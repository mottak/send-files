# Technical Test Backend
This repository contains the backend implementation for a technical test. The backend is designed to handle CSV file uploads, store data, and provide search functionality through a RESTful API.

## Features
- Upload CSV files from the frontend and store data in the backend.
- Search through loaded CSV data using query parameters.
Handle errors for invalid requests and other issues.

## Getting Started

### Prerequisites
- Node.js 
- npm

### Installation
Clone the repository:

```bash
git clone git@github.com:mottak/send-files.git
cd send-files
```
Install dependencies:

```bash
npm install
```
Start the server:

```bash
npm run dev
```

The backend server will start running on port 3000.

## API Endpoints
### POST /api/files
This endpoint accepts a CSV file upload from the frontend and stores the data in a folder that works as a data structure. Use the key "file" in the request body for file upload.

### GET /api/users
Search through the loaded CSV data. This route accepts a q query parameter for search terms. The search is case-insensitive and searches through every column of the CSV for partial matches.

## Testing
Integration tests have been included in the codebase to ensure that the implemented routes match the requirements specified. To run the tests, you can use the following command:

```bash
npm test
```