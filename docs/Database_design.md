# Database Design

# HimVision Travel AI

## Overview

The MVP uses PostgreSQL to store user information, destinations, itineraries, and travel history. The database is designed to be modular and scalable for future AI features.

---

# Database

Database: PostgreSQL

---

# Entity Relationship Overview

Users
│
├── Itineraries
│
├── Travel Preferences
│
└── Chat History (Future)

Destinations
│
└── Safety Information

---

# Table: users

| Column                 | Type          | Description |
|------------------------|---------------|-------------|
| id                     | UUID          | Primary Key |
| name                   | VARCHAR(100)  | User Name |
| email                  | VARCHAR(255)  | Email Address |
| created_at             | TIMESTAMP     | Account Creation |

---

# Table: destinations

| Column                 | Type          | Description |
|------------------------|---------------|-------------|
| id                     | UUID          | Primary Key |
| name                   | VARCHAR(100)  | Destination Name |
| state                  | VARCHAR(100)  | State |
| category               | VARCHAR(50)   | Hill Station, Trek, Temple, etc. |
| best_season            | VARCHAR(50)   | Best Time to Visit |
| average_budget         | INTEGER       | Estimated Budget |
| description            | TEXT          | Destination Description |

---

# Table: itineraries

| Column                 | Type          | Description |
|------------------------|---------------|-------------|
| id                     | UUID          | Primary Key |
| user_id                | UUID          | Foreign Key |
| destination            | VARCHAR(100)  | Destination |
| days                   | INTEGER       | Trip Duration |
| budget                 | INTEGER       | User Budget |
| itinerary              | JSON          | AI Generated Plan |
| created_at             | TIMESTAMP     | Creation Time |

---

# Table: safety_reports

| Column                 | Type          | Description |
|------------------------|---------------|-------------|
| id                     | UUID          | Primary Key |
| destination            | VARCHAR(100)  | Destination Name |
| safety_score           | INTEGER       | Score (0-100) |
| risk_level             | VARCHAR(20)   | Low, Medium, High |
| recommendations        | TEXT          | Safety Advice |

---

# Future Tables

- weather_reports
- hotels
- routes
- user_reviews
- travel_history
- notifications

---

# Relationships

User (1) ------ (M) Itineraries

Destination (1) ------ (M) Safety Reports

---

# Future Database Enhancements

- Chat history
- AI memory
- User preferences
- Saved itineraries
- Favorite destinations