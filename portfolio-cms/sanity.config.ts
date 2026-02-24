import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'portfolio-cms',

  projectId: 'so8fb28i',
  dataset: 'image',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
