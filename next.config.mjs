const isGithubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration
  output: 'export', // Required for static export

  // Base path and asset prefix for GitHub Pages
  basePath: isGithubPages ? '/next_js' : '', // Replace with your repo name
  assetPrefix: isGithubPages ? '/next_js/' : '', // Replace with your repo name

  // Image optimization (disabled for static export)
  images: {
    unoptimized: true, // Disable image optimization for static export
  },

  // Optional: Add trailing slashes to URLs for GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig;
