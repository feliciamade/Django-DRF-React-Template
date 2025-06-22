![localhost_3001_ (1)](https://github.com/user-attachments/assets/a8fc257a-965e-4d05-90c8-836709f55e1b)

**Key Steps Completed 6/21/2025 and notes because I be forgetting how to do this:**

1.  **React Frontend Initialized:**
    * Command: `npx create-react-app frontend`

2.  **Python Virtual Environment Created & Activated:**
    * Command: `python -m venv venv`
    * **⭐ Activation Command:** `.\venv\Scripts\activate`

3.  **Django Framework Installed:**
    * Command: `pip install django`

4.  **Django Project Created:**
    * Command: `django-admin startproject backend .`

5.  **Django REST Framework (DRF) Installed:**
    * Command: `pip install djangorestframework`
    * Purpose: For building robust API endpoints.

6.  **Django CORS Headers Installed:**
    * Command: `pip install django-cors-headers`
    * Purpose: Enables secure communication between the React frontend and Django backend.

7.  **Initial Database Migrations Applied:**
    * Command: `python manage.py migrate`

8.  **Django Superuser Created:**
    * Command: `python manage.py createsuperuser`

9.  **Backend Settings Configured (`backend/settings.py`):**
    * Integrated `rest_framework` and `corsheaders` into `INSTALLED_APPS`.
    * Added `corsheaders.middleware.CorsMiddleware` to `MIDDLEWARE`.
    * Defined `CORS_ALLOWED_ORIGINS` to allow communication from the React development server.

    ```python
    # In backend/settings.py
    INSTALLED_APPS = [
        # ... existing Django apps ...
        'rest_framework',
        'corsheaders',
        # Future custom apps will go here
    ]

    MIDDLEWARE = [
        'django.middleware.security.SecurityMiddleware',
        'corsheaders.middleware.CorsMiddleware', # Added for cross-origin requests
        'django.contrib.sessions.middleware.SessionMiddleware',
        'django.middleware.common.CommonMiddleware',
        'django.middleware.csrf.CsrfViewMiddleware',
        'django.contrib.auth.middleware.AuthenticationMiddleware',
        'django.contrib.messages.middleware.MessageMiddleware',
        'django.middleware.clickjacking.XFrameOptionsMiddleware',
    ]

    CORS_ALLOWED_ORIGINS = [
        "http://localhost:3000", # React development server URL
        "[http://127.0.0.1:3000](http://127.0.0.1:3000)",
        # Add production frontend URLs here when deployed
    ]
    ```
