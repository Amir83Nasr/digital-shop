import { defineConfig } from '@fullstacksjs/eslint-config'

export default defineConfig({
  typescript: {
    tsconfigRootDir: import.meta.dirname, // If you are using TypeScript
  },
  rules: {
    '@eslint-react/no-array-index-key': 0,
  },
  // prettier: 0,
})
