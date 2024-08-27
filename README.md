# Books API

This is a simple RESTful API for managing books in a library. It is built using NestJS, TypeORM, and MySQL, and includes Swagger for API documentation.

## Table of Contents

- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Using Swagger for Testing](#using-swagger-for-testing)
- [Conclusion](#conclusion)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- [MySQL](https://www.mysql.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/zunaira119/books-management-api
   cd books-management-api

## Running the Application

1. **Start MySQL:**

Ensure your MySQL server is running.

2. **Create the database:**

3. **Run the application:**
   ```bash  
    npm run start

## Api Endpoints 

The API provides the following endpoints for managing books:

- GET /books - Retrieve all books.
- GET /books/:id - Retrieve a book by ID.
- POST /books - Add a new book.
- PUT /books/:id - Update a book by ID.
- DELETE /books/:id - Delete a book by ID.

### Example Requests

1. **Create a New Book**

- Request

      POST /books
- Body
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "isbn": "978-0743273565"
}
- Response 

{
  "statusCode": 201,
  "message": "Book successfully created",
  "data": {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "978-0743273565"
  }
}

2. **Retrieve All Books**

- Request

   GET /books

- Response 
{
  "statusCode": 200,
  "message": "List of books retrieved successfully.",
[
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "978-0743273565"
  },
  {
    "id": 2,
    "title": "1984",
    "author": "George Orwell",
    "isbn": "978-0451524935"
  }
]
}

3. **Retrieve a Book by ID**

- Request
   
   GET /books/1

- Response 

{
  "statusCode": 200,
  "message": "Book retrieved successfully.",
  "data": {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "978-0743273565"
  }
}
4. **Update a Book by ID**

- Request
   ```bash
   PUT /books/1
- Body
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "isbn": "978-0743273565"
}
- Response 

{
  "statusCode": 201,
  "message": "Book updated successfully",
  "data": {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "978-0743273565"
  }
}
5. **Delete a Book by ID**

- Request
  
   DELETE /books/1

- Response 

{
  "statusCode": 200,
  "message": "Book successfully deleted"
}

## Using Swagger for Testing

This API is documented using Swagger, which provides an interactive interface for testing the API.

1. **Access Swagger UI:**

After running the application, navigate to http://localhost:3000/api-docs in your browser.

2. **Explore the API:**

Swagger UI allows you to see all available endpoints, including details about request parameters, response formats, and example requests.

3. **Test API Endpoints:**

You can use Swagger UI to make API requests directly from your browser. Click on an endpoint, fill in the required parameters, and click "Execute" to see the response.

## Conclusion

This API provides a simple way to manage books in a library. It demonstrates the use of NestJS, TypeORM, MySQL, and Swagger for building and documenting RESTful APIs