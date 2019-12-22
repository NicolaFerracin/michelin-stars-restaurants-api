const rp = require('request-promise');
const cheerio = require('cheerio');
const RateLimiter = require('limiter').RateLimiter;
const limiter = new RateLimiter(1, 1500);

const { baseUrl, query, itemsPerPage, ratingsMap, selectors, regEx } = require('./utils')

let pages = 1;
const restaurants = [];

const run = async () => {
  limiter.removeTokens(1, () => {
    scrape(1);
  });
}

const setTotalPages = $ => {
  const totalItems = Number($('h1').text().match(regEx.totalItems)[0].replace(/[\.,]/g, ''));
  pages = totalItems / itemsPerPage;
}

const scrape = async (page) => {
  const options = {
    uri: baseUrl + query + page,
    transform: body => {
      return cheerio.load(body);
    }
  };

  const $ = await rp(options).catch((err) => {
    delete err.response
    console.log(err)
  });

  if (pages === 1) {
    setTotalPages($);
  }

  const cards = $(selectors.cards);
  cards.each(function () {
    const $card = $(this)
    const rating = ratingsMap[$card.find(selectors.rating).text().trim()];
    const year = $card.find(selectors.year).text().trim();
    const img = $card.find(selectors.img).html().match(regEx.img)[0];
    const $title = $card.find(selectors.name);
    const name = $title.text().trim();
    const link = $title.attr('href');
    const location = $card.find(selectors.location).text().trim();
    const type = $card.find(selectors.type).text().trim();
    const lat = $card.data('lat');
    const lng = $card.data('lng');

    restaurants.push({ rating, year, img, name, link, location, type, coords: { lat, lng } });
  })

  if (page <= pages) {
    limiter.removeTokens(1, () => {
      scrape(page + 1);
    });
  }
}

run();
