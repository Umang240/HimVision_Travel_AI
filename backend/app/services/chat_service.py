from app.core.gemini import generate_itinerary

def chat_with_ai(message: str):
    prompt = f"""
    You are HimVision Travel AI, an intelligent travel assistant.

    Answer the user's travel-related question in a helpful, concise, and friendly manner.

    User Question:
    {message}
    """

    return generate_itinerary(prompt)