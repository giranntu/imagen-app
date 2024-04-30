# imagen-app
# Image Generation App

This is an image generation application that allows users to generate unique images by selecting a character, image style, and scene. The generated images are presented in sets of 4, and users can choose one of them as their final selection.

## Prerequisites

- Ubuntu operating system

- Node.js (version 14 or higher)

- npm (version 6 or higher)

- Python (version 3.9 or higher)

- pip (version 20 or higher)

## Frontend Setup

1\. Clone the repository:

   ```

   git clone https://github.com/giranntu/image-generation-app.git

   ```

2\. Navigate to the frontend directory:

   ```

   cd image-generation-app/frontend

   ```

3\. Install the frontend dependencies:

   ```

   npm install

   ```

4\. Create a `.env` file in the `frontend` directory and provide the necessary environment variables (e.g., backend API URL).

5\. Build the frontend:

   ```

   npm run build

   ```

6\. Serve the frontend:

   ```

   npm run serve

   ```

## Backend Setup

1\. Navigate to the backend directory:

   ```

   cd ../backend

   ```

2\. Create a virtual environment:

   ```

   python3 -m venv venv

   ```

3\. Activate the virtual environment:

   ```

   source venv/bin/activate

   ```

4\. Install the backend dependencies:

   ```

   pip install -r requirements.txt

   ```

5\. Create a `.env` file in the `backend` directory and provide the necessary environment variables (e.g., MongoDB connection URL, Google Cloud Storage bucket name).

6\. Run the backend server:

   ```

   uvicorn main:app --host 0.0.0.0 --port 8000

   ```

## Production Deployment

1\. Set up a production server (e.g., Ubuntu) with the prerequisites installed.

2\. Clone the repository on the production server.

3\. Follow the frontend and backend setup instructions above.

4\. Configure a process manager (e.g., PM2) to run the backend server as a background process.

5\. Set up a web server (e.g., Nginx) to serve the frontend files and proxy requests to the backend server.

6\. Configure SSL/TLS certificates for secure HTTPS communication.

7\. Start the process manager and web server.

## Configuration

- Frontend configuration: Update the `.env` file in the `frontend` directory to specify the backend API URL and any other necessary environment variables.

- Backend configuration: Update the `.env` file in the `backend` directory to specify the MongoDB connection URL, Google Cloud Storage bucket name, and any other necessary environment variables.

## Dependencies

Frontend:

- Vue.js (version 3.x)

- Vuetify (version 3.x)

- Axios

Backend:

- FastAPI

- Uvicorn

- Google Cloud Storage

- MongoDB

- Loguru

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
