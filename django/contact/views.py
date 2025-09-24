from django.http import HttpResponse, JsonResponse
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.conf import settings
import json
import logging

# Set up logging
logger = logging.getLogger(__name__)

def home(request):
    return HttpResponse("<h1>Welcome to the Django Backend!</h1><p>Contact form API is at /api/contact/</p>")

@csrf_exempt
@require_http_methods(["POST"])
def contact_form(request):
    try:
        # Handle both JSON and form data
        if request.content_type == 'application/json':
            data = json.loads(request.body)
        else:
            data = request.POST
            
        # Extract form data
        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        subject = data.get('subject', '').strip()
        message = data.get('message', '').strip()
        
        # Validate required fields
        if not all([name, email, subject, message]):
            return JsonResponse({
                'success': False, 
                'error': 'All fields (name, email, subject, message) are required.'
            }, status=400)
        
        # Create email content
        email_subject = f"Portfolio Contact: {subject}"
        email_message = f"""
New contact form submission from your portfolio:

Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}

---
This message was sent from your portfolio contact form.
Reply directly to: {email}
        """
        
        # Send email
        try:
            send_mail(
                subject=email_subject,
                message=email_message,
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=['rifathasan5u@gmail.com'],
                fail_silently=False,
            )
            
            logger.info(f"Contact form email sent successfully from {email}")
            
            return JsonResponse({
                'success': True, 
                'message': 'Your message has been sent successfully! I will get back to you soon.'
            })
            
        except Exception as e:
            logger.error(f"Failed to send email: {str(e)}")
            return JsonResponse({
                'success': False, 
                'error': 'Failed to send email. Please try again later or contact me directly.'
            }, status=500)
            
    except json.JSONDecodeError:
        return JsonResponse({
            'success': False, 
            'error': 'Invalid JSON data provided.'
        }, status=400)
        
    except Exception as e:
        logger.error(f"Unexpected error in contact form: {str(e)}")
        return JsonResponse({
            'success': False, 
            'error': 'An unexpected error occurred. Please try again.'
        }, status=500)
