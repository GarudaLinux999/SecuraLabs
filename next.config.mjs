/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // <--- Enables static export
  images: {
    unoptimized: true, // <--- Required for GitHub Pages
  },
   // basePath: '/SecuraLabs', // <--- Add this line
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
