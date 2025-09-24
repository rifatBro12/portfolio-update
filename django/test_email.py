#!/usr/bin/env python
"""
Test script to verify email functionality is working correctly.
Run this script from the django directory to test email sending.
"""

import os
import sys
import django
from django.conf import settings

# Add the current directory to the Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Set the Django settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'contactform.settings')

# Setup Django
django.setup()

from django.core.mail import send_mail

def test_email_configuration():
    """Test the email configuration by sending a test email."""
    
    print("Testing email configuration...")
    print(f"EMAIL_HOST: {settings.EMAIL_HOST}")
    print(f"EMAIL_PORT: {settings.EMAIL_PORT}")
    print(f"EMAIL_USE_TLS: {settings.EMAIL_USE_TLS}")
    print(f"EMAIL_HOST_USER: {settings.EMAIL_HOST_USER}")
    print(f"EMAIL_BACKEND: {settings.EMAIL_BACKEND}")
    
    try:
        # Test email content
        subject = "Portfolio Contact Form Test"
        message = """
This is a test email from your portfolio contact form system.

If you receive this email, your email configuration is working correctly!

Test Details:
- Django backend is running
- SMTP configuration is correct
- Email sending functionality is operational

You can now receive contact form submissions from your portfolio website.

Best regards,
Your Portfolio System
        """
        
        # Send test email
        send_mail(
            subject=subject,
            message=message,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=['rifathasan5u@gmail.com'],
            fail_silently=False,
        )
        
        print("✅ Test email sent successfully!")
        print("✅ Check your inbox at rifathasan5u@gmail.com")
        print("✅ Email configuration is working correctly!")
        
        return True
        
    except Exception as e:
        print(f"❌ Failed to send test email: {str(e)}")
        print("\n🔧 Troubleshooting tips:")
        print("1. Make sure Gmail 2-factor authentication is enabled")
        print("2. Use an App Password instead of your regular Gmail password")
        print("3. Check if 'Less secure app access' is enabled (not recommended)")
        print("4. Verify your Gmail settings in contactform/settings.py")
        
        return False

if __name__ == "__main__":
    print("🚀 Portfolio Email System Test")
    print("=" * 40)
    
    success = test_email_configuration()
    
    if success:
        print("\n🎉 Your portfolio contact form is ready!")
        print("📧 Visitors can now send you emails through your website!")
    else:
        print("\n⚠️  Email configuration needs attention.")
        print("📋 Please check the troubleshooting tips above.")