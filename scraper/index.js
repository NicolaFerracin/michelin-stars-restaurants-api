const rp = require('request-promise');
const cheerio = require('cheerio');
const { baseUrl, query, itemsPerPage, ratingsMap, selectors, regEx } = require('./utils')

let page = 1;
let pages = 1;
const restaurants = [];

const run = async () => {
  while (page <= pages) {
    await scrape(query + page);
    page++;
  }
}

const setTotalPages = $ => {
  const totalItems = Number($('h1').text().match(regEx.totalItems)[0].replace(/[\.,]/g, ''));
  pages = totalItems / itemsPerPage;
}

const scrape = async (query) => {
  const options = {
    uri: baseUrl + query,
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

  const cards = $('.card__menu');
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
    restaurants.push({ rating, year, img, name, link, location, type });
  })
}

run();
