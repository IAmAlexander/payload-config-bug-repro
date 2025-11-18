# Payload CMS Config Bug Reproduction

**Note:** This repository has been updated to use the latest Payload structure (`src/app/`) as recommended in [issue #12640](https://github.com/payloadcms/payload/issues/12640).

## Setup

1. Install dependencies:
   ```bash
   bun install
   ```
   (or `npm install` / `pnpm install`)

2. Copy `.env.example` to `.env` and add your PostgreSQL connection string:
   ```
   POSTGRES_URL=postgresql://user:password@localhost:5432/database
   PAYLOAD_SECRET=your-secret-key-here
   ```

3. Start dev server:
   ```bash
   bun dev
   ```

4. Navigate to `http://localhost:3000/admin`

5. Error occurs: "Cannot destructure property 'config' of 'ue(...)' as it is undefined"

## Environment
- Payload CMS: 3.63.0
- Next.js: 15.1.6
- React: 18
- Node.js: 20.19.5

## Structure
- Uses `src/app/` folder structure (latest Payload convention)
- Updated `tsconfig.json` configuration
