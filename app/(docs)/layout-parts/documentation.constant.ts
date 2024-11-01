interface Documentation {
  groupKey: string;
  groupValue: string;
  children: DocumentationChild[];
}

interface DocumentationChild {
  label: string;
  value: string;
  url: string;
  new?: boolean;
}

export const DOCS: Documentation[] = [
  {
    groupKey: 'gettingStart',
    groupValue: 'Getting Started',
    children: [
      {
        label: 'Introduction',
        value: 'introduction',
        url: '/docs',
      },
    ],
  },
  {
    groupKey: 'components',
    groupValue: 'Components',
    children: [
      {
        label:'Card',
        value:'card',
        url:'/docs/card',
        
      },
      {
        label:'Navbar',
        value:'navbar',
        url:'/docs/navbar',
        new:true,
  
      },
      {
        label:'Footer',
        value:'footer',
        url:'/docs/footer',
        new:true,
  
      },
      {
        label:'Input',
        value:'input',
        url:'/docs/input',
      },
      {
        label:'Button',
        value:'button',
        url:'/docs/button',
      },
      {
        label: 'Autosize Textarea',
        value: 'autosize-textarea',
        url: '/docs/autosize-textarea',
      },
      
      { label: 'Datetime Picker', value: 'datetime-picker', url: '/docs/datetime-picker' },
      {
        label: 'Dual Range Slider',
        value: 'dual-range-slider',
        url: '/docs/dual-range-slider',
      },
      {
        label: 'Floating Label Input',
        value: 'floating-label-input',
        url: '/docs/floating-label-input',
      },
   
      { label: 'Infinite Scroll', value: 'infiniteScroll', url: '/docs/infinite-scroll' },
      {
        label: 'Loading Button',
        value: 'loading-button',
        url: '/docs/loading-button',
      },
      {
        label: 'Progress With Value',
        value: 'progress-with-value',
        url: '/docs/progress-with-value',
      },
      {
        label: 'Responsive Modal',
        value: 'responsive-modal',
        url: '/docs/responsive-modal',
      },
      { label: 'Multiple Selector', value: 'multipleSelector', url: '/docs/multiple-selector' },
      { label: 'Spinner', value: 'spinner', url: '/docs/spinner' },
    ],
  },
];
