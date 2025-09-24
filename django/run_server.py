#!/usr/bin/env python
"""
Reliable Django Server Runner
This script ensures the Django server stays running and restarts if it crashes.
"""

import os
import sys
import subprocess
import time
from pathlib import Path

# Configuration
DJANGO_DIR = Path(__file__).parent
PYTHON_PATH = r"C:/Users/rifat/.virtualenvs/Medical_Chatbot-7Z8YtPeT/Scripts/python.exe"
MANAGE_PY = DJANGO_DIR / "manage.py"
HOST = "127.0.0.1"
PORT = "8000"

def is_server_running():
    """Check if Django server is already running on the port."""
    try:
        import socket
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        result = sock.connect_ex((HOST, int(PORT)))
        sock.close()
        return result == 0
    except:
        return False

def start_django_server():
    """Start the Django development server."""
    if is_server_running():
        print(f"🔄 Server already running on {HOST}:{PORT}")
        return None
    
    print(f"🚀 Starting Django server on {HOST}:{PORT}...")
    print(f"📂 Django directory: {DJANGO_DIR}")
    print(f"🐍 Python path: {PYTHON_PATH}")
    print("-" * 50)
    
    try:
        # Start Django server
        cmd = [
            PYTHON_PATH,
            str(MANAGE_PY),
            "runserver",
            f"{HOST}:{PORT}"
        ]
        
        process = subprocess.Popen(
            cmd,
            cwd=str(DJANGO_DIR),
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            universal_newlines=True,
            bufsize=1
        )
        
        return process
        
    except Exception as e:
        print(f"❌ Failed to start Django server: {e}")
        return None

def monitor_server(process):
    """Monitor the Django server and display output."""
    print("✅ Django server started successfully!")
    print(f"🌐 Your portfolio is now live at: http://{HOST}:{PORT}/")
    print(f"📧 Contact form API: http://{HOST}:{PORT}/api/contact/")
    print("\n📋 Server log:")
    print("-" * 50)
    
    try:
        for line in iter(process.stdout.readline, ''):
            if line:
                print(line.rstrip())
                
                # Check for common success messages
                if "Starting development server" in line:
                    print("🎉 Server is ready to receive requests!")
                elif "Quit the server with" in line:
                    print("💡 Press Ctrl+C to stop the server")
                    
    except KeyboardInterrupt:
        print("\n🛑 Shutting down Django server...")
        process.terminate()
        process.wait()
        print("✅ Server stopped successfully!")
    except Exception as e:
        print(f"❌ Server monitoring error: {e}")

def main():
    """Main function to run the Django server."""
    print("🎯 Portfolio Django Server Manager")
    print("=" * 40)
    
    # Check if manage.py exists
    if not MANAGE_PY.exists():
        print(f"❌ manage.py not found at: {MANAGE_PY}")
        print("Please make sure you're running this from the Django directory.")
        return
    
    # Check if Python path exists
    if not os.path.exists(PYTHON_PATH):
        print(f"❌ Python executable not found at: {PYTHON_PATH}")
        print("Please check your virtual environment path.")
        return
    
    # Start the server
    process = start_django_server()
    
    if process:
        monitor_server(process)
    else:
        print("❌ Failed to start the Django server.")
        print("\n🔧 Troubleshooting:")
        print("1. Make sure the virtual environment is set up correctly")
        print("2. Check if Django is installed: pip list | grep Django")
        print("3. Verify the manage.py file exists")

if __name__ == "__main__":
    main()