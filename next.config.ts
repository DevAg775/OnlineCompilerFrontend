import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "connect-src 'self' wss://idle-pos-endless-invitation.trycloudflare.com https://onlinecompilerbackend-gnkk.onrender.com https://cdn.jsdelivr.net;"
          }
        ]
      }
    ]
  }
};

export default nextConfig;