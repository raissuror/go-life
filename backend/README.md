# Backend

This is the backend service for Go-Planner, built with FastAPI.

## Requirements
- Python 3.8+
- pip
- (Optional) MySQL or PostgreSQL database

## Setup
1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Copy the example environment file and configure your environment variables:
   ```bash
   cp .env.example .env
   # Edit .env as needed
   ```
3. (Optional) Set up your database and update the connection string in `.env`.

## Running the Server
Start the FastAPI server with Uvicorn:
```bash
uvicorn app.main:app --reload
```
The API will be available at `http://localhost:8000`.

## Development
- Main entry point: `app/main.py`
- Business logic: `app/services/`
- Data models: `app/models.py`, `app/schemas.py`
- Configuration: `.env`

## Useful Commands
- Run with auto-reload: `uvicorn app.main:app --reload`
- Install new dependencies: `pip install <package> && pip freeze > requirements.txt`

## Testing
Add your tests and instructions here if available. 