from scraper import Scraper
from postgres import Postgres
import pandas as pd
import time
from glob import glob


def scrape_website():
    output_name = f"restaurants{round(time.time())}.csv"
    scraper_instance = Scraper()
    scraper_instance.scrape()

    df = pd.DataFrame([r.__dict__ for r in scraper_instance.restaurants])
    df.to_csv(output_name)

    print(f"Output saved: {output_name}")
    return output_name


def upload_to_postgres(file):
    print('Connecting to the database...')
    postgres_conn = Postgres()

    print('Inserting restaurants...')
    postgres_conn.insert_restaurants(file)

    print('Done!')


if __name__ == "__main__":
    if glob('*.csv'):
        print("Output found will not refresh data...")
    else:
        print("Output not found refreshing data...")
        data_file = scrape_website()
        upload_to_postgres(data_file)
