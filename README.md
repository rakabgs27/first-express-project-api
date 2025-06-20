# Express.js, Prisma, and TypeScript Setup Guide

This project uses Express.js as the web framework, Prisma as the ORM, and TypeScript for type safety.

## Prerequisites

- Node.js (v14 or higher)
- PNPM package manager
- MySQL database

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the database connection URL in `.env` with your MySQL credentials

4. Set up the database:
   ```bash
   pnpm prisma migrate dev
   ```

5. Start the development server:
   ```bash
   pnpm dev
   ```

## Project Structure

```
├── src/
│   ├── controllers/    # Route controllers
│   ├── routes/        # API routes
│   ├── services/      # Business logic
│   ├── models/        # Prisma models
│   └── app.ts         # Express app setup
├── prisma/
│   └── schema.prisma  # Database schema
└── package.json
```

## Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build the project
- `pnpm start` - Start production server
- `pnpm test` - Run tests
- `pnpm prisma studio` - Open Prisma Studio to manage database

## API Documentation

The API documentation is available at `/api-docs` when running the server.
