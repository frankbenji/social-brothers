/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "frontend-case-api.sbdev.nl",
				port: "",
				pathname: "/storage/**",
			},
		],
	},
};

export default nextConfig;
