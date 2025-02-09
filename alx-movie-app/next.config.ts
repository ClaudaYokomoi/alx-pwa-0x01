import withPWAInit from "@ducanh2912/next-pwa";
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const withPWA = withPWAInit({
  dest: 'public',
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'],
  },
};

export default withPWA(nextConfig);
