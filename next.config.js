const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "mvtzafdnoqacqytqmsje.supabase.co"
    ]
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '.'); // Ajusta la ruta según tu estructura de carpetas.
    return config;
  },
}

module.exports = nextConfig;