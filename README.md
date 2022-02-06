# Michelin Stars Restaurants Scraper and API

As I couldn't find any public list of all the Michelin Stars Restaurants I decided to build my own, by:
- scraping the list of restaurants from https://guide.michelin.com/
- uploading the data to a SQL database
- allowing access to the data via an API

**NOTE**: Unfortunately not even the official Michelin website lists all the starred restaurants, so this list can't be used for professional intents

## Scraping

Built in Node.js, using `request-promise` and `cheerio` NPM packages

## Uploading to DB

Built in Node.js, using `mysql` NPM packages

## API

Built in go, using `mux` and `gorm`

The only available endpoint is `/restaurants`.

```js
fetch('<your-server>/restaurants')
  .then(res => res.json())
  .then(restaurants => {
    // Do something with restaurants array
  }
```
