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
    const totalItemsText = $('h1').text();
    const match = totalItemsText.match(regEx.totalItems);
  
    if (match && match.length > 0) {
      const totalItems = Number(match[0].replace(/[\.,]/g, ''));
      this.totalPages = Math.ceil(totalItems / itemsPerPage);
      console.log("Total pages to scrape:", this.totalPages);
    } else {
      console.log("Failed to find total items in the page", totalItemsText);
      this.totalPages = 0; 
    }
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

    // due to errors try to collect cards if fail then simply continue
    try {
      const cards = $(selectors.cards);
      cards.each(function () {
        const $card = $(this)
        const rating = $card.find(selectors.rating).html().match(/michelin-award/g).length;
        const year = $card.find(selectors.year).text().trim();
        const img = $card.find(selectors.img).html().match(regEx.img)[0];
        const $title = $card.find(selectors.name);
        const name = $title.text().trim();
        const link = `${baseUrl}${$title.attr('href')}`;
        const location = $card.find(selectors.location).attr('data-dtm-city').trim();
        const type = $card.find(selectors.type).attr('data-cooking-type').trim();
        const lat = $card.data('lat');
        const lng = $card.data('lng');

        that.restaurants.push({ rating, year, img, name, link, location, type, lat, lng });
      });
    }
    catch (err) {
      console.log(err)
    }

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
