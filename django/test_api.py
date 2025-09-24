#!/usr/bin/env python
"""
Test the contact form API endpoint
"""

import requests
import json

def test_contact_api():
    """Test the contact form API"""
    url = "http://127.0.0.1:8000/api/contact/"
    
    # Test data
    test_data = {
        "name": "Test User",
        "email": "test@example.com", 
        "subject": "API Test",
        "message": "This is a test message from the API test script."
    }
    
    print("🧪 Testing Contact Form API")
    print("=" * 30)
    print(f"📡 Endpoint: {url}")
    print(f"📋 Test data: {json.dumps(test_data, indent=2)}")
    print()
    
    try:
        response = requests.post(
            url,
            json=test_data,
            headers={'Content-Type': 'application/json'},
            timeout=10
        )
        
        print(f"📊 Status Code: {response.status_code}")
        print(f"📄 Response: {response.text}")
        
        if response.status_code == 200:
            result = response.json()
            if result.get('success'):
                print("✅ API test successful! Contact form is working.")
                return True
            else:
                print(f"❌ API returned success=false: {result.get('error')}")
                return False
        else:
            print(f"❌ API test failed with status {response.status_code}")
            return False
            
    except requests.exceptions.ConnectionError:
        print("❌ Connection failed. Is the Django server running?")
        return False
    except Exception as e:
        print(f"❌ Test error: {e}")
        return False

if __name__ == "__main__":
    success = test_contact_api()
    
    if success:
        print("\n🎉 Your contact form API is working perfectly!")
        print("✅ Visitors can now send you messages through your portfolio.")
    else:
        print("\n⚠️  Contact form API needs attention.")
        print("🔧 Please check the Django server and configuration.")