import type { Config } from 'tailwindcss'

const config: Config = {
      content: [
            './src/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      theme: {
            extend: {
                  fontSize: {
                        'tiny': ['0.625rem', { lineHeight: '0.875rem' }], // 10px
                        'micro': ['0.5rem', { lineHeight: '0.75rem' }],   // 8px
                  },
            },
      },
      plugins: [],
}

export default config