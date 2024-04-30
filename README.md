# Image Generation App

## Overview

This is an image generation application that allows users to generate unique images by selecting a character, image style, and scene. The generated images are presented in sets of 4, and users can choose one of them as their final selection. The application consists of a frontend built with Vue.js and a backend powered by FastAPI.

## Prerequisites

- Ubuntu operating system

- Node.js (version 14 or higher)

- npm (version 6 or higher)

- Python (version 3.9 or higher)

- pip (version 20 or higher)

## Frontend Setup

1\. Clone the repository:

  ```sh

   git clone https://github.com/giranntu/image-generation-app.git

  ```

2\. Navigate to the frontend directory:

  ```sh

   cd image-generation-app/frontend

  ```

3\. Install the frontend dependencies:

  ```sh

   npm install

  ```

4\. Create a `.env` file in the `frontend` directory and provide the necessary environment variables (e.g., backend API URL).

5\. Build the frontend:

  ```sh

   npm run build

  ```

6\. Serve the frontend:

  ```sh

   npm run serve

  ```



## Production Deployment

1\. Set up a production server (e.g., Ubuntu) with the prerequisites installed.

2\. Clone the repository on the production server.

3\. Follow the frontend and backend setup instructions above.

4\. Configure a process manager (e.g., PM2) to run the backend server as a background process.

5\. Start the process manager and web server.

## Configuration

- **Frontend configuration**: Update the `.env` file in the `frontend` directory to specify the backend API URL and any other necessary environment variables.

## Dependencies

**Frontend**:

- Vue.js (version 3.x)

- Vuetify (version 3.x)

- Axios

**Backend**:

- FastAPI

- Uvicorn

- Google Cloud Storage

- MongoDB

- Loguru

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize Configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Scripts

```sh

# Install dependencies

npm install

# Compile and hot-reload for development

npm run dev

# Compile and minify for production

npm run build

# Run unit tests with Vitest

npm run test:unit

# Run end-to-end tests with Cypress

npm run test:e2e:dev # Run against Vite development server

npm run build; npm run test:e2e # Run against production build

# Lint with ESLint

npm run lint

```

## License

This project is licensed under the [MIT License](LICENSE).

```
