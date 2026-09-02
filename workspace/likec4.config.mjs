import { defineConfig } from 'likec4/config'
import generators from './likec4-global'

export default defineConfig({
  name: 'essential-model',
  title: 'Vista unificada de sistemas',
  // entry: "systems.essential.c4",
  generators,
  "include": {
    "paths": [
        "./shared/specification.deployment.c4",
      "./shared/specification.element.c4",
      "./shared/specification.relationship.c4",
      "./shared/specification.tag.fai.c4",
      "./shared/systems.external.c4",
    ]
  },
  styles: {
    defaults: {
      opacity: 10,
    },
  },
})