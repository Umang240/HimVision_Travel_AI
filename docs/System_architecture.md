# System Architecture

# HimVision Travel AI

## Architecture Overview

HimVision Travel AI follows a modular client-server architecture powered by a **Single AI Agent**. The application consists of a React frontend, a FastAPI backend, Cloud SQL (PostgreSQL) for the production database, and the Google Gemini API for AI-powered travel assistance.

The architecture is designed to be scalable and can later evolve into a Multi-Agent AI system using Google ADK and Vertex AI in the future roadmap.

---

# High-Level Architecture

```text
                User
                  │
                  ▼
        React Frontend (UI)
                  │
            REST API (HTTPS)
                  │
                  ▼
        FastAPI Backend Server
                  │
     ┌────────────┼────────────┐
     │            │            │
     ▼            ▼            ▼
Travel AI     Cloud SQL     Google Gemini API
 Agent         (PostgreSQL)   API
                  │
                  ▼
        AI Response & Insights
                  │
                  ▼
             React Frontend
```

---

# System Components

## Frontend

Responsibilities:

- User Interface
- Forms
- Dashboard
- Chat Interface
- Display AI responses

Technology:

- React
- Tailwind CSS

---

## Backend

Responsibilities:

- REST APIs
- Business Logic
- Request Validation
- AI Integration
- Database Operations

Technology:

- FastAPI
- Python

---

## Production Database

Responsibilities:

- Store users
- Store destinations
- Save itineraries
- Store chat history

Technology:

- Cloud SQL (PostgreSQL)

---

## AI Layer

Responsibilities:

- Understand user queries
- Generate itineraries
- Recommend destinations
- Answer travel questions

Technology:

- Google Gemini API

---

# AI Agent Workflow

```text
User Request
      │
      ▼
Travel AI Agent
      │
      ├── Understand User Intent
      ├── Analyze User Preferences
      ├── Retrieve Destination Data
      ├── Generate AI Response
      ▼
Travel Recommendations
```

---

# Request Flow

```text
User
 │
 ▼
React Frontend
 │
 ▼
FastAPI API
 │
 ▼
Gemini API
 │
 ▼
FastAPI
 │
 ▼
Frontend
```

---

# Google Cloud Deployment (Future)

```text
User
 │
 ▼
Firebase Hosting
 │
 ▼
Google Cloud Run
 │
 ├── Google Gemini API
 ├── Cloud SQL (PostgreSQL)
 └── Cloud Storage
```

---

# Scalability

The architecture follows a modular design, allowing new services and AI capabilities to be integrated without affecting existing components.

Examples:

- Weather API
- Google Maps API
- Payment Gateway
- Notification Service

---

# Future Architecture

The current Single AI Agent architecture will evolve into a Multi-Agent AI system using Vertex AI & ADK.

Future specialized agents may include:

- Orchestrator Agent
- Destination Agent
- Weather Agent
- Safety Agent
- Budget Agent
- Itinerary Agent

These agents will collaborate to provide comprehensive travel decision support while maintaining a scalable and maintainable architecture.