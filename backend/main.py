# main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import secrets
import string

app = FastAPI()

# SECURITY: CORS (Cross-Origin Resource Sharing) is required to allow
# the React frontend (port 5173) to securely communicate with this API.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/generate")
def generate_password(length: int = 12):
    """
    Generates a cryptographically secure random password.
    Standard 'random' library is not secure for passwords;
    'secrets' is used here for industry-standard security.
    """
    # Define the pool of characters: uppercase, lowercase, digits, and punctuation
    alphabet = string.ascii_letters + string.digits + string.punctuation

    # Generate password using a list comprehension and secrets.choice
    password = ''.join(secrets.choice(alphabet) for i in range(length))

    return {"password": password}