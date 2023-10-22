# Quotes API

A simple Quotes REST API to manage quotes with CRUD functionality.

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the server: `npm start`

The server runs at `http://localhost:4000`.

## Endpoints

### Create a Quote

- **GET** `/api/v1/quotes`

Get all quotes

- **POST** `/api/v1/quotes`

Create a new quote by sending a JSON object with `text` and `author` in the request body.

### Read a Quote

- **GET** `/api/v1/quotes/:id`

Retrieve a quote by its ID.

### Update a Quote

- **PUT** `/api/v1/quotes/:id`

Update a quote by providing its ID in the URL and the updated information in the request body.

### Delete a Quote

- **DELETE** `/api/v1/quotes/:id`

Delete a quote by its ID.

## Usage

Use this API to manage a collection of quotes in your application. Examples include creating an inspirational quotes collection or allowing users to add their favorite quotes.

## Contributing

Fork the repository and create a pull request for contributions.


