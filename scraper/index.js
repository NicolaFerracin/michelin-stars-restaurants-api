const Scraper = require('./scraper');
const DBUploader = require('./dbUploader');

const run = async () => {
  uploadRestaurantsToDb(await getRestaurants());
}

const getRestaurants = async () => {
  const scraper = new Scraper();

  // Scraping can be flaky. Attempt scraping multiple times
  for (let i = 0; i < 3; i++) {
    console.log('Scraping attempt:', i + 1);

    await scraper.run();
    console.log(`Found ${scraper.getRestaurants().length} restaurants`);

    scraper.removeDuplicates();
    console.log(`Duplicates removed, ${scraper.getRestaurants().length} restaurants remained`);

    console.log('==========');
  }
  return scraper.getRestaurants();
}

const uploadRestaurantsToDb = (restaurants) => {
  console.log('Connecting to the database');
  const dbUploader = new DBUploader();
  dbUploader.connect();

  console.log('Clearing old data');
  dbUploader.clearTable();

  console.log('Resetting auto increment ID');
  dbUploader.resetAutoIncrement();

  console.log('Uploading new data');
  dbUploader.uploadRestaurants(restaurants);

  console.log('Closing connection');
  dbUploader.disconnect();
}

run();
