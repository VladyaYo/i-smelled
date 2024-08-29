from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from contextlib import asynccontextmanager
from database import create_tables, delete_tables
from router import router as content_router
import uvicorn



app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "https://localhost:3000",
    "localhost:3000",
]




@asynccontextmanager
async def lifespan(app: FastAPI):
    # await delete_tables()
    await create_tables()
    print("db is up")
    yield
    print("app is down")

app = FastAPI(lifespan=lifespan)
app.include_router(content_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=10000)