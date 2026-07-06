from pydantic import BaseModel

class ItineraryRequest(BaseModel):
    destination: str
    days: int
    budget: int
    travel_type: str
    interests: list[str]
