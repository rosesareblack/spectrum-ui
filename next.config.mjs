/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx"

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    images: {
        domains: ['lh3.googleusercontent.com'],
      },
};

const withMDX = createMDX({
  // Add markdown plugins here, if desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})


export default nextConfig;
