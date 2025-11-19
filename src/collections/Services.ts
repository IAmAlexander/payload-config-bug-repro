import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Startups', value: 'startups' },
        { label: 'Accelerators', value: 'accelerators' },
        { label: 'Organizations', value: 'organizations' },
      ],
    },
  ],
}

