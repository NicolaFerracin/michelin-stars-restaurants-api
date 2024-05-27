const baseUrl = 'https://guide.michelin.com/'

const query = 'en/restaurants/all-starred/page/';

const itemsPerPage = 20;

const ratingsMap = {
  o: 3,
  n: 2,
  m: 1,
};

const selectors = {
  cards: '.card__menu',
  rating: '.distinction-icon',
  year: '.card__menu-content--rating>span',
  img: '.card__menu-image>a>noscript',
  name: '.card__menu-content--title>a',
  link: '.card__menu-content--title>a',
  location: '.card__menu-image--top > div > div > div',
  type: '.card__menu-image--top > div > div > div'
}

const regEx = {
  img: /(?<=src=").*(?=" alt)/,
  totalItems: /(?<=of ).*(?= restaurants)/
}

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = { baseUrl, query, itemsPerPage, ratingsMap, selectors, regEx, timeout };
