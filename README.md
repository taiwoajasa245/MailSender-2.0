# Newsletter Subscription App

This is a simple newsletter subscription app built with Node.js, Express, MongoDB, and Nodemailer. The application allows users to subscribe to a newsletter and sends a welcome email upon successful subscription. Additionally, there's a feature to send newsletters to all subscribers.

## Features

- **Subscriber Management:**
  - Users can subscribe with their email, first name, and last name.
  - Unique email validation to avoid duplicate subscriptions.

- **Newsletter Sending:**
  - Ability to send newsletters to all subscribers.

## Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/taiwoajasa245/Newsletter.git
   cd newsletter-subscription-app
   ```

2. **install Dependencies:**

   ```bash
   npm install
   ``` 

3. **Setup MongoDB:**
- Create a MongoDB database and update the connection string in server.js

4. **Configure Email:**

- Update email credentials and settings in utils/email.js.

5. **Run the Application:**

   ```bash
   npm run start
   ```

6. **Test the Application:**
- Access the application at http://localhost:3000.
- Use Postman or other tools to interact with the subscription and newsletter endpoints.




## Endpoints

**Subscribe:**
    ```
    POST /subscribers/subscribe
    Body: { "firstName": "John", "lastName": "Doe" "email": "user@example.com",  } 
    ```
**Send Newsletter:**
    ```
    POST /newsletter/send
    Body: { "subject": "Newsletter Subject", "text": "Newsletter Content" }
    ```
## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Nodemailer


