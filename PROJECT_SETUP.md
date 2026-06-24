# Recro Project Setup

## Project Name
**recro** - Behavioral health and relationship-focused care platform

## Development Server
The project is now configured to run on **localhost:3000**

## How to Run

### Development Mode
```bash
npm run dev
```
This will start the development server on http://localhost:3000

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```
This will serve the production build on http://localhost:3000

## Configuration Changes Made

1. **Package.json**
   - Project name changed from `tanstack_start_ts` to `recro`
   - Dev script updated: `vite dev --port 3000`
   - Preview script updated: `vite preview --port 3000`

2. **Vite Config (vite.config.ts)**
   - Added server configuration with port 3000
   - Added preview configuration with port 3000
   - Set `strictPort: false` to allow fallback to another port if 3000 is occupied

## Project Structure
```
recro/
├── src/
│   ├── routes/          # Page routes
│   ├── components/      # Reusable components
│   ├── assets/          # Images, icons, etc.
│   ├── hooks/           # Custom React hooks (e.g., use-auth)
│   ├── lib/             # Utility functions
│   └── styles.css       # Global styles
├── public/              # Static assets
├── .env                 # Environment variables
├── package.json         # Project dependencies and scripts
└── vite.config.ts       # Vite configuration
```

## Key Features
- Demo authentication system (localStorage-based)
- Insights page (unified blog + media)
- Services with SVG icons
- Booking system
- Admin dashboard (all logged-in users have full access)
- Responsive design with Tailwind CSS

## Notes
- All TypeScript errors have been resolved
- All booking links include required search parameters
- Project uses TanStack Router for routing
- Styled with Tailwind CSS v4
