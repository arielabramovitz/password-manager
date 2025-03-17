from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_sessionmaker
import dotenv
import os
dotenv.load_dotenv()

POSTGRES_USER = os.getenv("POSTGRES_USER")
POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD")
POSTGRES_DB = os.getenv("POSTGRES_DB")

engine = create_async_engine(f"postgresql+asyncpg://{POSTGRES_USER}:{POSTGRES_PASSWORD}@db:5432/{POSTGRES_DB}", echo=True)
Session = async_sessionmaker(autocommit=False, autoflush=False, bind=engine, class_=AsyncSession)

async def get_db(): 
    async with Session() as session:
        yield session
         
        
if __name__ == "__main__":
    from sqlalchemy import Integer, String
    from sqlalchemy.orm import declarative_base, mapped_column
    Base = declarative_base()
    class TestTable(Base):
        __tablename__ = "test_table"
        
        id = mapped_column(Integer, primary_key=True, index=True)
        name = mapped_column(String)
    async def test():
        print(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD)

        async with engine.begin() as conn:
            try:
                await conn.run_sync(Base.metadata.drop_all)
                await conn.run_sync(Base.metadata.create_all)
            finally:
                print("Tables created successfully")
    import asyncio
    asyncio.run(test())