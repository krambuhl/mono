const withTM = require('next-transpile-modules')(['ui'])

/** @type {import('next').NextConfig} */
const nextConfig = {
  styledComponents: true,
  reactStrictMode: true,
  eslint: {
    dirs: ['components', 'contexts', 'lib', 'pages', 'styles'],
  },
}

module.exports = withTM(nextConfig)
