/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "img.freepik.com",
      "images.pexels.com",
      "source.unsplash.com",
      "plus.unsplash.com",
      "res.cloudinary.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, if desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default nextConfig;
