// GitHub Pages (project sites) serves the site from
// https://usuario.github.io/nome-do-repositorio/ — not from the domain root.
// next/image, next/link etc. handle that prefix automatically, but plain
// HTML tags (like <video>/<source src="...">) don't, so we prefix those
// manually using this constant.
//
// The value comes from NEXT_PUBLIC_BASE_PATH, which the GitHub Actions
// workflow (.github/workflows/deploy.yml) sets automatically at build time
// based on the repository name. Locally (npm run dev) it's simply empty.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
