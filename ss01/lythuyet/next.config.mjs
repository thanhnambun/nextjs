/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'file3.qdnd.vn',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
