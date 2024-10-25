// for page navigation & to sort on leftbar
export const ROUTES = [
  {
    category: 'Getting Started',
    items: [
      { name: 'Introduction', href: '/introduction' }, // Removed '/docs'
      { name: 'Installation', href: '/installation' },  // Removed '/docs'
    ],
  },
  {
    category: 'Components',
    items: [
      { name: 'Button', href: '/button' },
      { name: 'Input', href: '/input' },
      { name: 'Card', href: '/card' },
      { name: 'Tabs', href: '/tabs' },
    ],
  },
  {
    category: 'Hooks',
    items: [
      { name: 'useToggle', href: '/use-toggle' },
      { name: 'useMediaQuery', href: '/use-media-query' },
    ],
  },
];

export const page_routes = ROUTES.map(({  items }) => {
  return items.map((link) => {
    return {
      title: link.name,
      href:  link.href,
    };
  });
}).flat();
