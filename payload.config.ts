import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Import collections
import { Users } from './src/collections/Users'
import { Articles } from './src/collections/Articles'
import { Courses } from './src/collections/Courses'
import { Services } from './src/collections/Services'
import { Testimonials } from './src/collections/Testimonials'
import { Companies } from './src/collections/Companies'
import { Media } from './src/collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Articles,
    Courses,
    Services,
    Testimonials,
    Companies,
    Media,
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
    push: true,
  }),
  sharp,
  plugins: [],
})
