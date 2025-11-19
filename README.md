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

3. Check for duplicate dependencies (as recommended by Payload team):
   ```bash
   ./check-dependencies.sh
   ```
   Or manually check using:
   ```bash
   find node_modules -name "payload" -type d
   find node_modules -name "@payloadcms" -type d
   ```

4. Start dev server:
   ```bash
   bun dev
   ```

5. Navigate to `http://localhost:3000/admin`

6. Error occurs: "Cannot destructure property 'config' of 'ue(...)' as it is undefined"

## Environment
- Payload CMS: 3.63.0
- Next.js: 15.4.7 (recommended by Payload)
- React: 19 (required by Payload)
- Node.js: 20.19.5

## Structure
- Uses `src/app/` folder structure (latest Payload convention)
- Updated `tsconfig.json` configuration
- Includes all collections mentioned in bug report:
  - Users
  - Articles
  - Courses
  - Services
  - Testimonials
  - Companies
  - Media

## Notes
- No client-side imports of Payload (verified)
- No components imported into admin config
- All Payload packages are on version 3.63.0 (no duplicates found)
- Using supported versions: React 19 (required) and Next.js 15.4.7 (recommended)
