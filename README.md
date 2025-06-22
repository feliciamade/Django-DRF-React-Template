# girlbytes

6/21/2025 Felicia Progress 
1. Installed React succesfully: npx create react app frontend
2. Created and Activated a Python Virtual Environment: python -m venv venv
    - ⭐ Activated the virtual enviroment: .\venv\Scripts\activate ⭐
3. Installed Django: pip install django
4. Created Django Project: django-admin startproject girlbytes_backend .
5. Installed Django REST Framework (DRF): pip install djangorestframework
6. Installed Django CORS Headers: pip install django-cors-headers
7. Initial Database Migrations: python manage.py migrate
8. Create the Django SuperUser: python manage.py createsuperuser
9. Added these codes to the backend/settings.py 

```python
INSTALLED_APPS = [
    # ... existing apps ...
    'rest_framework',
    'corsheaders',
    # Your custom apps will go here later
]
``` 

```python
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'corsheaders.middleware.CorsMiddleware', # Add this line
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
```
```python 
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000", # Your React frontend URL
    "http://127.0.0.1:3000",
    # Add your production frontend URL here when you deploy
]
```
10. 