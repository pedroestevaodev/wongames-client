/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	compress: true,
	compiler: {
		styledComponents: true
	},
	images: {
		domains: ['source.unsplash.com']
	}
};

module.exports = nextConfig;
