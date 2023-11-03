from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQL_DB_URL = "maa-2.cb23pnbzjijy.us-east-1.rds.amazonaws.com"
SQL_DB_PASS = "1qaz2wsx!QAZ@WSX"

engine = create_engine(
    SQL_DB_URL, connect_args={"check_same_thread": False}
)
