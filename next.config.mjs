// const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
// module.exports = withNextra()

/**
 * @type {import('next').NextConfig}
 */
const nextConfig   = {
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: './',
};

export default   nextConfig;