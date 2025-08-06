import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import { Steppers } from '@/components/ui/steppers';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import Link from 'next/link';
import Testimonial from './testimonialsdemo';

export const metadata: Metadata = baseMetadata({
  title: 'Spectrum UI - Testimonials',
  description: 'Spectrum UI Testimonials - Real feedback from real users',
});

const DualRangeSliderPage = () => {
  return (
    <PageTemplate title="Testimonials" className='mt-5'>
      <PreviewCodeCard
        path="app/(docs)/docs/testimonials/testimonialsdemo.tsx"
        cli="https://ui.spectrumhq.in/r/testimonials.json"
      >
        <Testimonial />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers
        withInstall
        codePath="app/(docs)/docs/testimonials/testimonialsdemo.tsx"
        withEnd
        installScript="npx shadcn@latest add https://ui.spectrumhq.in/r/testimonials.json"
      />

     
    </PageTemplate>
  );
};

export default DualRangeSliderPage;
