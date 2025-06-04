require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection with proper error handling
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/saimeghnaDanceDB';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connection established'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',  // You can change this based on your email provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const Contact = require('./models/Contact');

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Sai Meghna Dance School API' });
});

// Contact form route with email sending
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Create and save contact in database
    const contact = new Contact({ name, email, message });
    await contact.save();

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: ['ylavanya@yahoo.com', 'karthikyam2006@gmail.com'],
      subject: 'New Contact Form Submission - Sai Meghna Dance School',
      text: `
        New message from the website:
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
        
        Sent on: ${new Date().toLocaleString()}
      `,
      html: `
        <h2>New message from the website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><em>Sent on: ${new Date().toLocaleString()}</em></p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    // Update contact status
    contact.status = 'sent';
    await contact.save();

    res.status(200).json({ message: 'Message received and sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
