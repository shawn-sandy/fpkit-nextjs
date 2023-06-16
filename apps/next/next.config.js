/**
 * @type {import('next').NextConfig}
 * */
const nextConfig = {};

module.exports = nextConfig;

const withNextra = require("nextra")({
  theme: "./src/themes/theme.tsx",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra();

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
