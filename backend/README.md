# Alpro Backend

Backend service for handling appointment bookings for the Alpro application.

## Features

- RESTful API for appointment bookings
- Input validation and sanitization
- Email notifications using Resend API
- Error handling middleware
- Environment-based configuration

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Resend API key (for email notifications)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and update the environment variables:
   ```bash
   cp .env.example .env
   ```
4. Update the `.env` file with your configuration

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=5000
NODE_ENV=development
RESEND_API_KEY=your_resend_api_key
APP_NAME=Alpro
APP_EMAIL=noreply@alpro.com
ALLOWED_ORIGINS=http://localhost:3000
```

## Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with hot-reload
- `npm test` - Run tests (coming soon)

## API Endpoints

### Book an Appointment

- **URL**: `/api/appointments`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "date": "2023-12-31",
    "time": "14:30",
    "service": "Haircut",
    "message": "Additional notes"
  }
  ```
- **Success Response**:
  - **Code**: 201
  - **Content**:
    ```json
    {
      "success": true,
      "message": "Appointment booked successfully!",
      "data": {
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "+1234567890",
        "date": "2023-12-31",
        "time": "14:30",
        "service": "Haircut",
        "message": "Additional notes",
        "createdAt": "2023-11-01T12:00:00.000Z"
      }
    }
    ```

## Error Handling

All error responses follow this format:

```json
{
  "success": false,
  "message": "Error message",
  "errors": [
    {
      "field": "field_name",
      "message": "Error message for this field"
    }
  ]
}
```

## Validation Rules

- **Name**: Required, 2-50 characters
- **Email**: Required, valid email format
- **Phone**: Required, valid phone number format
- **Date**: Required, must be today or in the future
- **Time**: Required
- **Service**: Required
- **Message**: Optional, max 1000 characters

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
