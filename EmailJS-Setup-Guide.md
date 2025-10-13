# EmailJS Setup Guide - FREE Email Service

## 🆓 EmailJS FREE Plan Includes:
- ✅ **200 emails/month** - Perfect for contact forms
- ✅ **Unlimited templates** 
- ✅ **Gmail, Outlook, Yahoo support**
- ✅ **No credit card required**
- ✅ **Professional email delivery**

## 📧 Step-by-Step Setup:

### 1. Create EmailJS Account (FREE)
1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"** - it's completely FREE
3. Use your Gmail: `rifathasan5u@gmail.com`
4. Verify your email

### 2. Connect Your Gmail Service
1. In EmailJS Dashboard → **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"**
4. Follow the OAuth setup (EmailJS will guide you)
5. **Copy the Service ID** (looks like: `service_abc123`)

### 3. Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template:

```
Subject: New Contact from {{from_name}} - {{subject}}

You have a new message from your portfolio!

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
Reply directly to: {{reply_to}}
```

4. **Copy the Template ID** (looks like: `template_xyz789`)

### 4. Get Your Public Key
1. Go to **"Account"** → **"General"**
2. Find **"Public Key"** 
3. **Copy it** (looks like: `user_abcdefghijk`)

### 5. Update Your Code
Open `email-service.js` and replace:

```javascript
const EmailJSConfig = {
    publicKey: 'YOUR_PUBLIC_KEY_HERE',     // Paste your public key
    serviceID: 'YOUR_SERVICE_ID_HERE',     // Paste your service ID  
    templateID: 'YOUR_TEMPLATE_ID_HERE'    // Paste your template ID
};
```

### 6. Test Your Contact Form
1. Save all files
2. Refresh your portfolio
3. Fill out the contact form
4. Check your Gmail inbox!

## ✅ Benefits:
- **Instant email delivery** to your Gmail
- **Professional notifications** 
- **Backup with Netlify Forms**
- **Completely FREE** for your usage level
- **Easy to manage** via EmailJS dashboard

## 🔧 Troubleshooting:
- **No emails?** Check EmailJS dashboard logs
- **Errors?** Check browser console (F12)
- **Gmail not working?** Verify OAuth connection
- **Template issues?** Check variable names match

## 📊 Usage Monitoring:
- Check **EmailJS Dashboard** for delivery stats
- Monitor your **200 emails/month** limit
- Upgrade only if you get 200+ messages/month

Your portfolio will now send you instant email notifications for every contact form submission! 🎉