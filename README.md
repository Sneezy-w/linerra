# Linerra

Linerra is a comprehensive shipping and logistics management system built with modern web technologies. It consists of a frontend application using Ant Design Pro and a backend service powered by Serverless Framework and Node.js.

## Project Structure

The project is organized into two main parts:

1. Frontend (agent-ui)
2. Backend (agent-backend and system)

### Frontend (agent-ui)

The frontend is built using Ant Design Pro, a powerful UI solution for enterprise applications.

### Backend

The backend is split into two parts:

1. agent-backend: A Serverless Framework Node Express API running on AWS Lambda.
2. system: A shared library for common functionality.

## Getting Started

### Frontend

To set up and run the frontend:

1. Navigate to the `frontend/agent-ui` directory.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run start
   ```

### Backend

To set up and run the backend:

1. Navigate to the `root` directory.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Navigate to the `backend/agent-backend` directory.
4. Start the local development server:

    ```bash
    serverless dev
    ```

## Development

### Frontend

To deploy the frontend:

  ```bash
  cd frontend/agent-ui
  npm run build
  ```

Then deploy the contents of the `dist` directory to your web server.

### Backend

To deploy the backend to AWS:

  ```bash
  cd backend/agent-backend
  serverless deploy
  ```

## Contributing

Please read our contributing guidelines before submitting pull requests.

