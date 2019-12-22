const baseUrl = 'https://guide.michelin.com/'

const query = 'en/restaurants/3-stars-michelin/2-stars-michelin/1-star-michelin/page/';

const itemsPerPage = 20;

const ratingsMap = {
  o: 3,
  n: 2,
  m: 1,
};

const selectors = {
  cards: '.card__menu',
  rating: '.card__menu-content--rating>.fa-michelin',
  year: '.card__menu-content--rating>span',
  img: '.card__menu-image>a>noscript',
  name: '.card__menu-content--title>a',
  link: '.card__menu-content--title>a',
  location: '.card__menu-footer--location',
  type: '.card__menu-footer--price',
}

const regEx = {
  img: /(?<=src=").*(?=" alt)/,
  totalItems: /(?<=of ).*(?= Restaurants)/
}

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = { baseUrl, query, itemsPerPage, ratingsMap, selectors, regEx, timeout };
