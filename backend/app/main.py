from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes.itinerary import router as itinerary_router
from app.api.routes.chat import router as chat_router

app = FastAPI(
    title="HimVision Travel AI API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    itinerary_router,
    prefix="/api/v1",
    tags=["Itinerary"]
)

app.include_router(
    chat_router,
    prefix="/api/v1",
    tags=["AI Chat"]
)

@app.get("/")
def root():
    return {
        "project": "HimVision Travel AI",
        "status": "Running 🚀"
    }
