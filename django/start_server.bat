@echo off
echo Starting Portfolio Django Backend Server...
echo ==========================================

cd /d "%~dp0"

echo Checking Django installation...
python -c "import django; print(f'Django version: {django.get_version()}')" || (
    echo Django not found! Installing requirements...
    pip install -r requirements.txt
)

echo.
echo Starting development server on http://127.0.0.1:8000/
echo Contact form API will be available at: http://127.0.0.1:8000/api/contact/
echo.
echo Press Ctrl+C to stop the server
echo.

python manage.py runserver 127.0.0.1:8000

pause