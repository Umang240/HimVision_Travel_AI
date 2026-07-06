# API Design

# HimVision Travel AI

## Overview

The HimVision Travel AI backend follows a RESTful API architecture built using FastAPI. The APIs enable communication between the React frontend, Google Gemini API, and PostgreSQL database.

Base URL (Development)

http://localhost:8000/api/v1

---

# API Architecture

User
│
▼
React Frontend
│
▼
FastAPI REST API
│
├── Gemini API
├── PostgreSQL
└── Business Logic

---

# Authentication

Authentication is not included in the MVP.

Future Version:
- JWT Authentication
- Google Sign-In

---

# Endpoints

## Health Check

### GET /

Description

Check whether the backend server is running.

Response

```json
{
  "message": "Welcome to HimVision Travel AI API"
}
```

---

## Generate Itinerary

### POST /api/v1/itinerary

Description

Generate a personalized travel itinerary using Gemini AI.

Request

```json
{
  "destination": "Auli",
  "days": 4,
  "budget": 20000,
  "travel_type": "Family",
  "interests": [
    "Nature",
    "Adventure"
  ]
}
```

Response

```json
{
  "status": "success",
  "itinerary": {
    "day_1": "...",
    "day_2": "...",
    "day_3": "...",
    "day_4": "..."
  }
}
```

---

## Destination Recommendation

### POST /api/v1/recommendations

Description

Recommend destinations based on user preferences.

Request

```json
{
  "budget": 15000,
  "interests": [
    "Adventure"
  ],
  "season": "Winter"
}
```

Response

```json
{
  "recommendations": [
    "Auli",
    "Chopta",
    "Munsiyari"
  ]
}
```

---

## Travel Safety Assessment

### GET /api/v1/safety/{destination}

Description

Provide a travel safety score and recommendations.

Example

GET /api/v1/safety/Auli

Response

```json
{
  "destination": "Auli",
  "safety_score": 88,
  "risk_level": "Low",
  "recommendations": [
    "Carry warm clothes",
    "Check weather before departure"
  ]
}
```

---

## AI Chat

### POST /api/v1/chat

Description

Interact with the Travel AI Agent.

Request

```json
{
  "message": "Suggest a 3-day trip to Mussoorie under ₹10000."
}
```

Response

```json
{
  "response": "Here is a personalized travel plan..."
}
```

---

# HTTP Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Resource Created |
| 400 | Invalid Request |
| 404 | Resource Not Found |
| 500 | Internal Server Error |

---

# Gemini Integration Flow

User Request
│
▼
FastAPI Endpoint
│
▼
Prompt Builder
│
▼
Google Gemini API
│
▼
AI Response
│
▼
JSON Formatter
│
▼
Frontend

---

# Future APIs

- User Registration
- User Login
- Save Itinerary
- View Saved Trips
- Weather API
- Route Planning
- Hotel Recommendations
- Emergency Contacts

---

# API Design Principles

- RESTful architecture
- JSON request and response
- Modular endpoint structure
- Easy frontend integration
- Scalable for future multi-agent architecture