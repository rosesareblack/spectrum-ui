import { ROUTES } from "./routes-config";

/**
 * SEO utility functions for Spectrum UI
 */

// Component categories for better organization and SEO
export const componentCategories = {
  layout: ["Container", "Grid", "Stack", "Flex"],
  navigation: ["Navbar", "Sidebar", "Breadcrumb", "Pagination", "Tabs"],
  input: ["Button", "Input", "Textarea", "Select", "Checkbox", "Radio", "Switch", "Slider", "Multiple Selector", "Floating Label Input", "Datetime Picker"],
  display: ["Card", "Table", "List", "Avatar", "Badge", "Tooltip", "Accordion", "Event Calendar"],
  feedback: ["Alert", "Toast", "Progress", "Spinner", "Skeleton", "Loading Button"],
  overlay: ["Modal", "Drawer", "Popover", "Dropdown", "Responsive Modal"],
  media: ["Image", "Video", "Gallery", "Image Preview"],
  advanced: ["Infinite Scroll", "Animated Chart", "Animated Testimonials", "MultiStep Form"],
};

// Get related components based on category
export function getRelatedComponents(componentName: string): Array<{ label: string; url: string }> {
  const related: Array<{ label: string; url: string }> = [];
  
  // Find which category the component belongs to
  for (const [category, components] of Object.entries(componentCategories)) {
    if (components.some(c => c.toLowerCase().includes(componentName.toLowerCase()))) {
      // Get other components in the same category
      const relatedNames = components.filter(c => 
        !c.toLowerCase().includes(componentName.toLowerCase())
      ).slice(0, 3);
      
      // Find URLs from routes
      for (const group of ROUTES) {
        if (group.groupKey === "components") {
          for (const child of group.children) {
            if (relatedNames.some(name => 
              child.label.toLowerCase().includes(name.toLowerCase())
            )) {
              related.push({ label: child.label, url: child.url });
            }
          }
        }
      }
      break;
    }
  }
  
  return related.slice(0, 4);
}

// Generate structured data for components
export function generateComponentStructuredData(component: {
  name: string;
  description: string;
  category?: string;
  features?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: `${component.name} - React Component`,
    description: component.description,
    programmingLanguage: "TypeScript",
    runtimePlatform: "React",
    codeRepository: "https://github.com/arihantcodes/spectrum-ui",
    author: {
      "@type": "Person",
      name: "Arihant Jain",
      url: "https://arihantcodes.in",
    },
    about: {
      "@type": "Thing",
      name: component.category || "UI Component",
    },
    keywords: [
      component.name,
      "React component",
      "UI component",
      "Tailwind CSS",
      "Next.js",
      ...(component.features || []),
    ].join(", "),
  };
}

// Generate breadcrumb structured data
export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Generate FAQ structured data
export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Component metadata templates for common use cases
export const componentMetadataTemplates = {
  button: {
    keywords: ["button component", "React button", "interactive button", "custom button styles", "click events"],
    category: "input",
  },
  card: {
    keywords: ["card component", "React card", "content container", "card layout", "card design"],
    category: "display",
  },
  modal: {
    keywords: ["modal component", "dialog", "popup", "overlay", "modal window"],
    category: "overlay",
  },
  input: {
    keywords: ["input component", "form input", "text field", "user input", "form control"],
    category: "input",
  },
  accordion: {
    keywords: ["accordion component", "collapsible content", "expandable panel", "FAQ component"],
    category: "display",
  },
  navbar: {
    keywords: ["navigation bar", "header component", "menu", "responsive navigation"],
    category: "navigation",
  },
  // Add more templates as needed
};

// Get component-specific keywords
export function getComponentKeywords(componentName: string): string[] {
  const normalizedName = componentName.toLowerCase().replace(/\s+/g, "-");
  const template = componentMetadataTemplates[normalizedName as keyof typeof componentMetadataTemplates];
  
  const baseKeywords = [
    `${componentName} component`,
    `React ${componentName}`,
    `${componentName} example`,
    `how to use ${componentName}`,
    `${componentName} tutorial`,
  ];
  
  return template?.keywords ? [...baseKeywords, ...template.keywords] : baseKeywords;
}

// Generate SEO-friendly description
export function generateSEODescription(component: {
  name: string;
  shortDescription?: string;
}): string {
  const base = `Learn how to use the ${component.name} component in React. ${component.shortDescription || ''} Built with Tailwind CSS and fully accessible.`;
  return `${base} Copy, paste, and customize for your Next.js applications. Free and open source.`;
}

