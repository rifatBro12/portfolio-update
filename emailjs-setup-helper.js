// 🚀 EmailJS Quick Setup Helper
// ===========================
// Run this in browser console after getting your EmailJS credentials

// Step 1: Go to https://www.emailjs.com/ and create free account
// Step 2: Get your credentials and paste them here
// Step 3: Copy the generated configuration

function setupEmailJS() {
    console.log('🚀 EmailJS Setup Helper');
    console.log('========================');
    
    const publicKey = prompt('Enter your EmailJS Public Key:');
    const serviceID = prompt('Enter your Gmail Service ID:');
    const templateID = prompt('Enter your Template ID:');
    
    if (publicKey && serviceID && templateID) {
        const config = `
// ✅ Your EmailJS Configuration - Copy this to email-service.js
const EmailJSConfig = {
    publicKey: '${publicKey}',
    serviceID: '${serviceID}',
    templateID: '${templateID}'
};

// Configuration generated on: ${new Date().toLocaleString()}
        `;
        
        console.log(config);
        console.log('📋 Copy the configuration above and paste it into email-service.js');
        console.log('💾 Then save the file and refresh your website');
        
        return config;
    } else {
        console.log('❌ Setup cancelled - missing credentials');
        return null;
    }
}

// Make function available in browser console
window.setupEmailJS = setupEmailJS;

console.log('💡 Type setupEmailJS() in console to configure EmailJS easily');