import nextra from 'nextra'

const withNextra = nextra({
  theme: './src/themes/theme.tsx',
  themeConfig: './theme.config.jsx',
  staticImage: true,
  defaultShowCopyCode: true,
  readingTime: true
})

export default withNextra({
  reactStrictMode: true
})
