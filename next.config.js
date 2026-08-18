/** @type {import('next').NextConfig} */

// GitHub Actions sets this automatically (see .github/workflows/deploy.yml)
// based on the repository name, so the site works correctly when published
// at https://usuario.github.io/nome-do-repositorio/. Locally it's empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  // Static HTML export — required for GitHub Pages, which only serves
  // static files (no Node.js server behind it).
  output: "export",

  // Keeps URLs as /pagina/index.html so GitHub Pages resolves them without
  // needing server-side rewrites.
  trailingSlash: true,

  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,

  images: {
    // GitHub Pages has no image-optimization server, so next/image falls
    // back to serving the original files as-is.
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }],
  },
};

module.exports = nextConfig;
