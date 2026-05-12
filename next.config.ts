import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: "/user_service/:path*",
        destination: "http://13.53.205.180:5000/:path*",
      },
      {
        source: "/chat_service/:path*",
        destination: "http://13.53.205.180:5002/:path*",
      },
    ];
  },
};

export default nextConfig;
