# Frontend

This is the frontend for Go-Planner, built with React and Tailwind CSS.

## Requirements
- Node.js (v16+ recommended)
- npm

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. (Optional) Configure environment variables if needed.

## Running the App
Start the development server:
```bash
npm start
```
The app will be available at `http://localhost:3000`.

## Development
- Main pages: `src/pages/`
- Components: `src/components/`
- API utilities: `src/api/`
- Styles: Tailwind CSS (`tailwind.config.js`, `index.css`)

## Useful Commands
- Start dev server: `npm start`
- Build for production: `npm run build`
- Run tests: `npm test`

## Notes
- The frontend proxies API requests to the backend at `http://localhost:8000` (see `package.json`).
- Make sure the backend server is running for full functionality. 