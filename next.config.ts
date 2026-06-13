import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "connect-src 'self' wss://3.110.108.63.nip.io https://onlinecompilerbackend-gnkk.onrender.com https://cdn.jsdelivr.net;"
          }
        ]
      }
    ]
  }
};

export default nextConfig;