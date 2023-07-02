/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {};

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
const withNextra = require("nextra")({
  theme: "./src/themes/index.tsx",
  themeConfig: "./theme.config.jsx",
});

module.exports = withNextra();
