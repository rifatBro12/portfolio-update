// EmailJS Configuration for Contact Form
// FREE email service - sends emails directly to your Gmail

// 🔧 EMAILJS CONFIGURATION
// ================================
// Follow EmailJS-Setup-Guide.md for step-by-step instructions
// Get these values from https://www.emailjs.com/ (FREE account)

const EmailJSConfig = {
    publicKey: 'YOUR_PUBLIC_KEY',   // From EmailJS Account → General → Public Key
    serviceID: 'YOUR_SERVICE_ID',   // From EmailJS Email Services (Gmail service)
    templateID: 'YOUR_TEMPLATE_ID' // From EmailJS Email Templates
};

// 🚨 SETUP STATUS CHECKER
function checkEmailJSSetup() {
    const isConfigured = EmailJSConfig.publicKey !== 'YOUR_PUBLIC_KEY' && 
                        EmailJSConfig.serviceID !== 'YOUR_SERVICE_ID' && 
                        EmailJSConfig.templateID !== 'YOUR_TEMPLATE_ID';
    
    if (!isConfigured) {
        console.warn('⚠️ EmailJS not configured yet. Follow EmailJS-Setup-Guide.md');
        console.log('📋 Setup steps:');
        console.log('1. Create free account at https://www.emailjs.com/');
        console.log('2. Connect Gmail service');
        console.log('3. Create email template');
        console.log('4. Update EmailJSConfig above with your IDs');
        return false;
    }
    
    console.log('✅ EmailJS configuration looks good!');
    return true;
}

// Initialize EmailJS when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔄 DOM Content Loaded - Initializing email service...');
    
    // Check setup status
    const isSetup = checkEmailJSSetup();
    
    // Check if EmailJS is available
    if (typeof emailjs !== 'undefined') {
        if (isSetup) {
            emailjs.init(EmailJSConfig.publicKey);
            console.log('✅ EmailJS initialized successfully - Ready to send emails!');
        } else {
            console.log('📧 EmailJS library loaded but needs configuration');
        }
    } else {
        console.warn('⚠️ EmailJS library not loaded - will use fallback mode');
    }
});

// Enhanced contact form handler with EmailJS
function initializeEmailJS() {
    console.log('🔄 Initializing EmailJS form handler...');
    
    const contactForm = document.querySelector('form[name="contact"]');
    
    if (!contactForm) {
        console.warn('❌ Contact form not found');
        return;
    }

    console.log('✅ Contact form found:', contactForm);

    // Remove the action attribute to prevent default submission
    contactForm.removeAttribute('action');
    contactForm.removeAttribute('method');
    console.log('🔧 Removed action and method attributes');
    
    // Override form submission
    contactForm.addEventListener('submit', function(e) {
        console.log('📨 Form submission intercepted');
        e.preventDefault(); // Always prevent default form submission
        e.stopPropagation(); // Stop event bubbling
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Update button state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';

        // Prepare form data
        const formData = new FormData(contactForm);
        const templateParams = {
            from_name: formData.get('name'),
            from_email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            to_email: 'rifathasan5u@gmail.com',
            reply_to: formData.get('email')
        };

        // Check if EmailJS is configured and ready
        const isEmailJSReady = typeof emailjs !== 'undefined' && checkEmailJSSetup();
        
        if (isEmailJSReady) {
            console.log('📤 Sending email via EmailJS...');
            
            emailjs.send(EmailJSConfig.serviceID, EmailJSConfig.templateID, templateParams)
                .then(function(response) {
                    console.log('✅ Email sent successfully to rifathasan5u@gmail.com');
                    console.log('📊 Response:', response);
                    showNotification('success', `✅ Message sent successfully! I'll get back to you soon at ${templateParams.reply_to}`);
                    contactForm.reset();
                })
                .catch(function(error) {
                    console.error('❌ EmailJS Error:', error);
                    showNotification('error', '❌ Failed to send message. Please try again or contact me directly at rifathasan5u@gmail.com');
                })
                .finally(function() {
                    // Reset button state
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                });
        } else {
            // Show setup instructions or fallback message
            console.log('📧 EmailJS not configured - using fallback mode');
            
            setTimeout(() => {
                if (typeof emailjs === 'undefined') {
                    showNotification('info', '📧 Message submitted! I\'ll check and respond soon.');
                } else {
                    showNotification('warning', '⚙️ Email setup needed. Check console for instructions.');
                }
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            }, 1000);
        }
    });
}

// Notification system
function showNotification(type, message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        max-width: 350px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;

    // Set colors based on type
    switch(type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
            break;
        case 'info':
            notification.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #6b7280, #4b5563)';
    }

    notification.textContent = message;
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeEmailJS);