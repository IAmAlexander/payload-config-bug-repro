# Payload CMS Config Bug Reproduction

## Setup

1. Install dependencies:
   ```bash
   bun install
   ```

2. Copy `.env.example` to `.env` and add your PostgreSQL connection string

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
