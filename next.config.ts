import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The old separate pages now live as sections on the home page.
  async redirects() {
    return [
      { source: "/projects", destination: "/#work", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
