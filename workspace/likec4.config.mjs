import { defineConfig } from 'likec4/config'
// import generators from './likec4-global'

export default defineConfig({
  name: 'essential-model',
  title: 'Vista unificada de sistemas',
  // entry: "systems.essential.c4",
  generators,
  include: [
    "./capability.essential.c4",
    "./systems.essential.c4",
    "./specification.global.c4",
  ],
  styles: {
    defaults: {
      opacity: 10,
    },
  },
})