# Setting up EmailJS for Contact Form

To make the contact form send emails to your matrixofficial404@gmail.com address, follow these steps:

## 1. Create an EmailJS Account

1. Go to [EmailJS website](https://www.emailjs.com/) and sign up for a free account
2. The free plan allows 200 emails per month which should be sufficient for most small business websites

## 2. Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your matrixofficial404@gmail.com account
5. Name your service (e.g., "Matrix404 Contact")
6. Note down the **Service ID** for later use

## 3. Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{phone}}` - Sender's phone
   - `{{service}}` - Service they're interested in
   - `{{message}}` - Their message
4. Set the "To email" as matrixofficial404@gmail.com
5. Set a subject line like "New Contact from Matrix404 Website: {{name}}"
6. Save the template and note down the **Template ID**

## 4. Get Your Public Key

1. Go to "Account" > "API Keys"
2. Copy your **Public Key**

## 5. Update the Code

Replace the placeholders in the ContactForm.tsx file:

```javascript
// Initialize EmailJS with your public key
emailjs.init({
  publicKey: 'beElc9pm5y3VaRpik', // Replace with your actual EmailJS public key from step 4
});

// Send the email using EmailJS
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID', // Replace with your EmailJS service ID from step 2
  'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID from step 3
  formRef.current as HTMLFormElement
);
```

## 6. Test the Form

After making these changes, test your contact form to ensure emails are being sent correctly to your matrixofficial404@gmail.com address.

## Security Note

The EmailJS public key is safe to include in client-side code. However, be aware that the free plan has monthly limits, so monitor your usage.