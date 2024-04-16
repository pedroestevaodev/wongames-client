/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	compress: true,
	compiler: {
		removeConsole: true,
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
				port: '1337'
			},
			{
				protocol: 'https',
				hostname: 'wongames-api-production.up.railway.app',
				port: ''
			}
		]
	}
};

export default nextConfig;
