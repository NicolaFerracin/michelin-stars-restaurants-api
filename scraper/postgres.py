import psycopg2
import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from glob import glob
import pandas as pd

load_dotenv()
user = os.environ["postgres_user"]
host = os.environ["postgres_host"]
db_name = os.environ["postgres_db"]
password = os.environ["postgres_pass"]


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
            f'postgresql+psycopg2://{user}:{password}@{host}:5432/{db_name}')
        Session = sessionmaker(bind=engine)

        with Session() as session:
            df = pd.read_csv(file)
            df.to_sql('restaurants',
                      con=engine,
                      if_exists='replace',
                      index=False)