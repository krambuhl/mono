const withTM = require('next-transpile-modules')(['ui'])

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    styledComponent: true,
  },
  eslint: {
    dirs: ['components', 'contexts', 'lib', 'pages', 'styles'],
  },
}

module.exports = withTM(nextConfig)
