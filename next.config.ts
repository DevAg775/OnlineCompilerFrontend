import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "connect-src 'self' wss://alternate-implement-analyzed-signatures.trycloudflare.com https://onlinecompilerbackend-gnkk.onrender.com;"
          }
        ]
      }
    ]
  }
};

export default nextConfig;