import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "connect-src 'self' wss://online-compiler-devansh.serveousercontent.com https://onlinecompilerbackend-gnkk.onrender.com https://cdn.jsdelivr.net;"
          }
        ]
      }
    ]
  }
};

export default nextConfig;