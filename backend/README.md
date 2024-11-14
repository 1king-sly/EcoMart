# EcoMart FastAPI Backend

This is the backend service for the EcoMart e-commerce platform.

## Features

- User authentication and authorization
- Product management
- Order processing
- M-Pesa payment integration
- Review system
- Category management

## Setup

1. Install dependencies:
   ```bash
   poetry install
   ```

2. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the values in `.env`

3. Initialize the database:
   ```bash
   alembic upgrade head
   ```

4. Run the development server:
   ```bash
   uvicorn app.main:app --reload
   ```

## API Documentation

Once the server is running, visit:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Project Structure

```
backend/
├── app/
│   ├── api/
│   │   └── v1/
│   │       └── endpoints/
│   ├── core/
│   ├── crud/
│   ├── db/
│   ├── models/
│   ├── schemas/
│   └── services/
├── alembic/
└── tests/
```