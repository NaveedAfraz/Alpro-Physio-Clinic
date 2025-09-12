/**
 * Error handling middleware
 * Handles different types of errors and sends appropriate responses
 */
const errorHandler = (err, req, res, next) => {
  // Default error status and message
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';
  let errors = [];
  let stack = process.env.NODE_ENV === 'development' ? err.stack : undefined;

  // Log the error with request details
  console.error(`[${new Date().toISOString()}] Error:`, {
    message: err.message,
    method: req.method,
    url: req.originalUrl,
    body: req.body,
    stack: err.stack
  });

  // Handle validation errors
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Validation Error';
    errors = Object.values(err.errors).map(error => ({
      field: error.path,
      message: error.message,
      type: error.kind
    }));
  }
  
  // Handle duplicate key errors (e.g., duplicate email)
  else if (err.code === 11000) {
    statusCode = 409; // Conflict
    const field = Object.keys(err.keyValue)[0];
    message = 'Duplicate Entry';
    errors.push({
      field,
      message: `This ${field} is already in use`,
      value: err.keyValue[field]
    });
  }
  
  // Handle JWT errors
  else if (err.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = 'Invalid token';
  }
  
  // Handle JWT expired error
  else if (err.name === 'TokenExpiredError') {
    statusCode = 401;
    message = 'Token expired';
  }
  // Handle Axios errors
  else if (err.isAxiosError) {
    const response = err.response;
    if (response) {
      // Handle HTTP errors
      statusCode = response.status || 500;
      message = response.data?.message || response.statusText || 'API request failed';
      
      // Include validation errors if available
      if (response.data?.errors) {
        errors = response.data.errors;
      } else if (response.data?.error) {
        errors = [{ message: response.data.error }];
      }
    } else if (err.request) {
      // The request was made but no response was received
      statusCode = 503;
      message = 'No response from server. Please try again later.';
    } else {
      // Something happened in setting up the request
      message = err.message || 'Error setting up request';
    }
  }
  // Handle other types of errors
  else if (err.statusCode) {
    statusCode = err.statusCode;
  }

  // Prepare error response
  const errorResponse = {
    success: false,
    message,
    ...(errors.length > 0 && { errors }),
    ...(process.env.NODE_ENV === 'development' && { 
      stack: err.stack,
      ...(err.code && { code: err.code }),
      ...(err.name && { errorType: err.name })
    })
  };

  // Send error response
  res.status(statusCode).json(errorResponse);
};

/**
 * 404 Not Found handler
 */
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
};

module.exports = {
  errorHandler,
  notFound
};
