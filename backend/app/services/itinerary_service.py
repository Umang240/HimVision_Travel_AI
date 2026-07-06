from app.core.gemini import generate_itinerary

def create_itinerary(data):
    prompt = f"""
    You are an expert travel planner.

    Generate a {data.days}-day itinerary for {data.destination}.

    Budget: ₹{data.budget}

    Travel Type: {data.travel_type}

    Interests: {", ".join(data.interests)}

    Return:
    - Day-wise itinerary
    - Budget breakdown
    - Packing tips
    - Safety recommendations
    """

    return generate_itinerary(prompt)
