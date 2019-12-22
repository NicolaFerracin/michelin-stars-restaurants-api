const Scraper = require('./scraper');
const DBUploader = require('./dbUploader');

const run = async () => {
  uploadRestaurantsToDb(await getRestaurants());
}

const getRestaurants = async () => {
  const scraper = new Scraper();
  await scraper.run();
  scraper.removeDuplicates();
  return scraper.getRestaurants();
}

const uploadRestaurantsToDb = (restaurants) => {
  const dbUploader = new DBUploader();
  dbUploader.connect();
  dbUploader.uploadRestaurants(restaurants);
  dbUploader.disconnect();
}

run();
