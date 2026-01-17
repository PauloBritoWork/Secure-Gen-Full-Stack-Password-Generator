# Secure-Gen: Full-Stack Password Generator

Secure-Gen is a professional-grade application designed to generate cryptographically secure passwords. The project utilizes a decoupled architecture, featuring a Python-based microservice for the logic and a React-based interface for the user.

## Core Features
* Cryptographic Security: Implementation of the Python 'secrets' module to ensure high-entropy randomness suitable for security purposes.
* Asynchronous API: A high-performance FastAPI backend that handles requests without blocking operations.
* Modern Frontend: A responsive UI built with React and Vite for optimized performance and state management.
* Industry Standards: Secure CORS configuration and RESTful API design.

## Technical Stack
| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| Backend | Python 3.10+, FastAPI | High-performance API logic and security modules. |
| Frontend | React, Vite | Reactive UI and efficient state handling. |
| Communication | REST / JSON | Standardized data exchange between layers. |

## System Architecture
The application is built as a headless system. The React frontend initiates an asynchronous fetch request to the FastAPI backend. The backend processes the cryptographic generation and returns the data as a JSON object, which is then rendered by the frontend state.

## Preview

<img width="339" height="373" alt="image" src="https://github.com/user-attachments/assets/7732c250-0fb6-4933-abc7-e73af5ac3c7f" />


## Installation and Setup

### 1. Backend Configuration
Navigate to the backend directory, install the necessary dependencies, and initialize the server:

cd backend
pip install fastapi uvicorn
python -m uvicorn main:app --reload

### 2. Frontend Configuration
In a separate terminal tab, navigate to the frontend directory and start the development environment:

cd frontend
npm install
npm run dev

## Developer Notes
* CORS Middleware: Configured to allow cross-origin requests specifically for local development environments, preventing browser-level blocks.
* Entropy Management: Explicitly avoided the standard 'random' library to prevent algorithmic predictability in password generation.
* User Experience: Included a clipboard API integration to allow users to copy generated strings with a single action, including temporary UI state changes for user feedback.
