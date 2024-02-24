/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	compress: true,
	compiler: {
		styledComponents: true
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'source.unsplash.com',
				port: ''
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '1338'
			}
		]
	}
};

module.exports = nextConfig;
