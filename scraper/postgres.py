import psycopg2
import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from glob import glob
import pandas as pd

# Load Environment Variables
load_dotenv()
user = os.environ["postgres_user"]
host = os.environ["postgres_host"]
db_name = os.environ["postgres_db"]
password = os.environ["postgres_pass"]
port = os.environ["postgres_port"]


class Postgres:
    def __init__(self):
        try:
            self.conn = psycopg2.connect(f"""
                  dbname={db_name}
                  user={user}
                  host={host}
                  password={password}
                  """)
        except:
            self.conn = None
            print("Unable to connect to Postgres DB. Is .env file present?")

    def insert_restaurants(self, file):
        engine = create_engine(
            f'postgresql+psycopg2://{user}:{password}@{host}:{port}/{db_name}')

        # Use session to create/replace 'restaurants' table if exists
        with Session(engine) as session:
            df = pd.read_csv(file)
            df.to_sql('restaurants',
                      con=engine,
                      if_exists='replace',
                      index=True,
                      index_label="id")

            engine.execute('ALTER TABLE restaurants ADD PRIMARY KEY (id);')
