const rp = require('request-promise');
const cheerio = require('cheerio');

const { baseUrl, query, itemsPerPage, ratingsMap, selectors, regEx, timeout } = require('./utils')

class Scraper {
  constructor() {
    this.rateLimiterDelay = 1500;
    this.restaurants = [];
    this.totalPages = 1;
  }

  run = async () => {
    await this.scrape(1);
  }

  getRestaurants = () => this.restaurants;

  removeDuplicates = () => {
    this.restaurants = this.restaurants.filter((r, index, self) =>
      index === self.findIndex((t) => JSON.stringify(t) === JSON.stringify(r))
    )
  }

  setTotalPages = $ => {
    const totalItems = Number($('h1').text().match(regEx.totalItems)[0].replace(/[\.,]/g, ''));
    this.totalPages = Math.ceil(totalItems / itemsPerPage);
  }

  scrape = async (currentPage) => {
    const that = this;
    const start = new Date();
    const options = {
      uri: baseUrl + query + currentPage,
      transform: body => {
        return cheerio.load(body);
      }
    };

    const $ = await rp(options).catch((err) => {
      delete err.response
      console.log(err)
    });

    if (this.totalPages === 1) {
      this.setTotalPages($);
    }

    const cards = $(selectors.cards);
    cards.each(function () {
      const $card = $(this)
      const rating = ratingsMap[$card.find(selectors.rating).text().trim()];
      const year = $card.find(selectors.year).text().trim();
      const img = $card.find(selectors.img).html().match(regEx.img)[0];
      const $title = $card.find(selectors.name);
      const name = $title.text().trim();
      const link = `${baseUrl}${$title.attr('href')}`;
      const location = $card.find(selectors.location).text().trim();
      const type = $card.find(selectors.type).text().trim();
      const lat = $card.data('lat');
      const lng = $card.data('lng');

      that.restaurants.push({ rating, year, img, name, link, location, type, lat, lng });
    });

    const end = new Date();
    const delay = this.rateLimiterDelay - (end - start)
    await timeout(delay)

    if (currentPage < this.totalPages) {
      return this.scrape(currentPage + 1);
    }
    return;
  }
}

module.exports = Scraper;
