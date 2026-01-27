# Secure-Gen: Password Generator

A full-stack application that generates secure passwords using a Python backend and a React frontend.

## Features
* Secure Generation: Uses Python's 'secrets' module for maximum security.
* Custom Length: Users can specify the exact length of the password.
* Copy to Clipboard: One-click copying with visual confirmation.
* Fast Performance: Built with FastAPI and Vite for near-instant responses.

## Tech Stack
* Backend: Python (FastAPI)
* Frontend: React (Vite)
* API: REST (JSON)

## Preview
<img width="339" height="383" alt="image" src="https://github.com/user-attachments/assets/2019c638-7b73-48a1-b3d2-79dad93d2a75" />

## How to Run

### 1. Backend
Open a terminal and run:
cd backend
pip install fastapi uvicorn
python -m uvicorn main:app --reload

### 2. Frontend
Open a second terminal and run:
cd frontend
npm install
npm run dev

## Technical Highlights
* Security: I used the 'secrets' library instead of 'random' to ensure the passwords are cryptographically strong.
* Connectivity: Implemented CORS middleware to allow the React frontend to communicate securely with the Python API.
* User Experience: Added a clipboard API integration for easy password copying.
