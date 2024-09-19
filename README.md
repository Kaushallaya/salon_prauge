# Salon Booking Platform

## Project Overview

This platform allows customers to view available salon services and make bookings online. Customers can schedule appointments based on available time slots and pay online using Stripe. The project is built using the MERN (MongoDB, Express, React, Node.js) stack.

## Demo Video

[![Watch Demo Video](https://i.postimg.cc/htXXvwpc/salone-purge.png)](selone_perge.mp4)


## Business Case

### Summary

The salon booking platform is designed to address the business need for an online solution that allows customers to:
1. View salon services and details.
2. Select available appointment slots.
3. Book services and make online payments through Stripe.
4. Receive email confirmation after successful booking and payment.

### Background

**Express Hair Salon** is a full-service salon specializing in haircuts and services for both children and adults. The salon operates from 8:00 AM to 6:00 PM and aims to provide flexible booking hours. As part of its expansion strategy, the salon has decided to move online to provide customers with a more convenient way to book appointments.

### Features

- **Service View**: Customers can explore various salon services.
- **Flexible Booking**: Users can book appointments within the salon’s business hours.
- **Stripe Payment Integration**: Secure payments processed through Stripe.
- **Email Confirmation**: Customers receive booking confirmation via email.

## Technical Overview

### Frontend
- **React**: Used for building the user interface.
- **Material UI (MUI)**: Provides a modern and responsive design framework.
- **Axios**: Used for making API requests to the backend.
- **Stripe Integration**: To handle payments.
- **SweetAlert2**: For pop-up alerts and booking confirmations.

### Backend
- **Node.js & Express**: Backend server to handle API requests, booking logic, and Stripe payments.
- **MongoDB**: Stores customer bookings and services.
- **Stripe**: For online payments.
- **Nodemailer**: Sends booking confirmation emails to customers.
- **Pino & Pino-Pretty**: Used for logging server activities in a formatted manner.

### Technologies Used

#### Client-Side (React):
- **React**: v18.2.0
- **Material UI**: v5.10.9
- **React Router**: v6.4.2
- **Axios**: v1.1.2
- **Stripe Checkout**: v2.6.3
- **SweetAlert2**: v11.4.8

#### Server-Side (Node.js & Express):
- **Express**: v4.18.2
- **MongoDB & Mongoose**: v6.6.5 for database management.
- **Nodemailer**: v6.8.0 for sending email confirmations.
- **Stripe**: v8.209.0 for handling online payments.
- **Pino**: v7.8.0 for logging.
- **Cors**: v2.8.5 to handle cross-origin requests.
- **Body-Parser**: v1.20.1 for parsing incoming request bodies.

### Project Structure

- **Client**: React frontend for user interaction.
- **Server**: Node.js backend using Express for API routes and business logic.
- **Database**: MongoDB for storing bookings and service data.

## Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) installed.
- [MongoDB](https://www.mongodb.com/) set up locally or via MongoDB Atlas.
- A Stripe account for payment processing.

### Steps to Run Locally

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/salon-booking-platform.git
   cd salon-booking-platform
   ```

2. **Install Client-Side Dependencies**:

   ```bash
   cd client
   npm install
   ```

3. **Install Server-Side Dependencies**:

   ```bash
   cd ../server
   npm install
   ```

4. **Set Up Environment Variables**:
   Create a `.env` file in the `server` directory and add your MongoDB connection string and Stripe API keys.

   ```bash
   MONGO_URI=your-mongodb-uri
   STRIPE_SECRET_KEY=your-stripe-secret-key
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-email-password
   ```

5. **Run the Server**:

   Start the Node.js server:

   ```bash
   cd server
   npm start
   ```

6. **Run the Client**:

   In a separate terminal window, start the React frontend:

   ```bash
   cd client
   npm start
   ```

7. Open the browser and navigate to `http://localhost:3000` to access the platform.

## Features

- **Customer Booking**: Allows customers to book services within the salon’s available hours.
- **Stripe Payment Gateway**: Secure online payments for salon services.
- **Email Confirmation**: After successful booking, the customer receives an email confirmation with details.
- **Responsive Design**: User-friendly interface across devices.

## Future Enhancements

- **Customer Login System**: Enable users to log in and view booking history.
- **Service Reviews**: Implement a feedback system for users to rate services.
- **Admin Panel**: Provide salon owners with an admin dashboard to manage bookings and services.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
