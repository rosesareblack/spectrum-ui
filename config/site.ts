export const siteConfig = {
  name: "Spectrum UI - Beautiful React Components",
  url: "https://ui.spectrumhq.in",
  ogImage: {
    url: "https://ui.spectrumhq.in/og.png",
    width: 1200,
    height: 630,
    alt: "Spectrum UI - Instant UI Components Just Copy, Paste & Done",
  },
  description:
    "Beautifully designed, accessible React components built with Tailwind CSS. Copy, paste, and customize. Perfect for Next.js applications. Open source and free to use.",
  shortDescription: "Beautiful React components for modern web applications",
  keywords: [
    "React components",
    "UI library",
    "Next.js components",
    "Tailwind CSS",
    "Accessible design",
    "Open source UI",
    "Web development",
    "Frontend components",
    "Design system",
    "Spectrum UI",
    "Copy paste components",
    "React UI kit",
    "Modern UI components",
    "Responsive design",
    "TypeScript components",
    "shadcn alternative",
    "UI templates",
    "Component library",
    "React design system",
    "Tailwind components",
  ],
  links: {
    twitter: "https://x.com/arihantcodes",
    github: "https://github.com/arihantcodes/spectrum-ui",
    linkedin: "https://www.linkedin.com/in/arihantcodes",
    instagram: "https://www.instagram.com/arihantjainn18",
    discord: "https://discord.gg/spectrum-ui", // Add if you have one
  },
  author: {
    name: "Arihant Jain",
    url: "https://arihantcodes.in",
    twitter: "@arihantcodes",
    github: "arihantcodes",
  },
  creator: {
    name: "Arihant Jain",
    url: "https://arihantcodes.in",
  },
  locale: "en-US",
  version: "1.0.0",
  license: "MIT",
  repository: {
    type: "git",
    url: "https://github.com/arihantcodes/spectrum-ui",
  },
  // Enhanced SEO metadata
  seo: {
    title: {
      default: "Spectrum UI - Beautiful React Components",
      template: "%s | Spectrum UI",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "", // Add your Google Search
      yandex: "", // Add if needed
      yahoo: "", // Add if needed
    },
  },
  // Categories for better organization
  categories: [
    "Layout",
    "Navigation",
    "Data Display",
    "Data Input",
    "Feedback",
    "Overlay",
    "Disclosure",
    "Media",
    "Typography",
    "Utilities",
  ],
  // Featured components for homepage
  featured: ["Button", "Card", "Modal", "Form", "Table", "Navigation"],
  // Social media handles
  social: {
    twitter: {
      handle: "@arihantcodes",
      site: "@spectrumui",
      cardType: "summary_large_image",
    },
    github: {
      username: "arihantcodes",
      repository: "spectrum-ui",
    },
  },
  // Analytics and tracking
  analytics: {
    googleAnalytics: "", // Add your GA4 measurement ID
    plausible: "", // Add if using Plausible
  },
  // Manifest data for PWA
  manifest: {
    name: "Spectrum UI",
    shortName: "SpectrumUI",
    description: "Beautiful React components for modern web applications",
    startUrl: "/",
    display: "standalone",
    backgroundColor: "#ffffff",
    themeColor: "#000000",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

// Navigation structure for sitemap generation
export const navigation = {
  main: [
    {
      title: "Components",
      href: "/components",
      description: "Browse all available components",
    },
    {
      title: "Examples",
      href: "/examples",
      description: "See components in action",
    },
    {
      title: "Documentation",
      href: "/docs",
      description: "Learn how to use Spectrum UI",
    },
    {
      title: "Templates",
      href: "/templates",
      description: "Ready-to-use page templates",
    },
  ],
  docs: [
    {
      title: "Getting Started",
      href: "/docs/getting-started",
    },
    {
      title: "Installation",
      href: "/docs/installation",
    },
    {
      title: "Theming",
      href: "/docs/theming",
    },
    {
      title: "Customization",
      href: "/docs/customization",
    },
    {
      title: "Accessibility",
      href: "/docs/accessibility",
    },
  ],
  components: [
    // Layout
    { name: "Container", category: "Layout", href: "/components/container" },
    { name: "Grid", category: "Layout", href: "/components/grid" },
    { name: "Stack", category: "Layout", href: "/components/stack" },
    { name: "Flex", category: "Layout", href: "/components/flex" },

    // Navigation
    { name: "Navbar", category: "Navigation", href: "/components/navbar" },
    { name: "Sidebar", category: "Navigation", href: "/components/sidebar" },
    {
      name: "Breadcrumb",
      category: "Navigation",
      href: "/components/breadcrumb",
    },
    {
      name: "Pagination",
      category: "Navigation",
      href: "/components/pagination",
    },
    { name: "Tabs", category: "Navigation", href: "/components/tabs" },

    // Data Display
    { name: "Card", category: "Data Display", href: "/components/card" },
    { name: "Table", category: "Data Display", href: "/components/table" },
    { name: "List", category: "Data Display", href: "/components/list" },
    { name: "Avatar", category: "Data Display", href: "/components/avatar" },
    { name: "Badge", category: "Data Display", href: "/components/badge" },
    { name: "Tooltip", category: "Data Display", href: "/components/tooltip" },

    // Data Input
    { name: "Button", category: "Data Input", href: "/components/button" },
    { name: "Input", category: "Data Input", href: "/components/input" },
    { name: "Textarea", category: "Data Input", href: "/components/textarea" },
    { name: "Select", category: "Data Input", href: "/components/select" },
    { name: "Checkbox", category: "Data Input", href: "/components/checkbox" },
    { name: "Radio", category: "Data Input", href: "/components/radio" },
    { name: "Switch", category: "Data Input", href: "/components/switch" },
    { name: "Slider", category: "Data Input", href: "/components/slider" },

    // Feedback
    { name: "Alert", category: "Feedback", href: "/components/alert" },
    { name: "Toast", category: "Feedback", href: "/components/toast" },
    { name: "Progress", category: "Feedback", href: "/components/progress" },
    { name: "Spinner", category: "Feedback", href: "/components/spinner" },
    { name: "Skeleton", category: "Feedback", href: "/components/skeleton" },

    // Overlay
    { name: "Modal", category: "Overlay", href: "/components/modal" },
    { name: "Drawer", category: "Overlay", href: "/components/drawer" },
    { name: "Popover", category: "Overlay", href: "/components/popover" },
    { name: "Dropdown", category: "Overlay", href: "/components/dropdown" },

    // Disclosure
    {
      name: "Accordion",
      category: "Disclosure",
      href: "/components/accordion",
    },
    {
      name: "Collapsible",
      category: "Disclosure",
      href: "/components/collapsible",
    },

    // Media
    { name: "Image", category: "Media", href: "/components/image" },
    { name: "Video", category: "Media", href: "/components/video" },
    { name: "Gallery", category: "Media", href: "/components/gallery" },
  ],
  examples: [
    { name: "Dashboard", href: "/examples/dashboard" },
    { name: "Landing Page", href: "/examples/landing-page" },
    { name: "Authentication", href: "/examples/authentication" },
    { name: "E-commerce", href: "/examples/ecommerce" },
    { name: "Blog", href: "/examples/blog" },
    { name: "Portfolio", href: "/examples/portfolio" },
  ],
};
