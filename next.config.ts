import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "connect-src 'self' ws://3.110.108.63:8080 https://onlinecompilerbackend-gnkk.onrender.com;"
          }
        ]
      }
    ]
  }
};

export default nextConfig;