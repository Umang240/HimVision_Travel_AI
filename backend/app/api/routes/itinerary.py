from fastapi import APIRouter
from app.schemas.itinerary import ItineraryRequest
from app.services.itinerary_service import create_itinerary

router = APIRouter()

@router.post("/itinerary")
def generate(data: ItineraryRequest):
    result = create_itinerary(data)

    return {
        "status": "success",
        "itinerary": result
    }
