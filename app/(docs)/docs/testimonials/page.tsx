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
    <PageTemplate title="Profile Dropdown">
      <PreviewCodeCard
        path="app/(docs)/docs/testimonials/testimonialsdemo.tsx"
        cli="https://ui.spectrumhq.in/r/testimonials.json"
      >
        <Testimonial />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers
        withInstall
        codePath="app/(docs)/docs/profile/profiledemo.tsx"
        withEnd
        installScript="npm i lucide-react framer-motion"
      />

      <div className="flex items-center gap-2">
        <h1 className="text-neutral-700 dark:text-neutral-400">Design Credit -</h1>
        <Link href="https://x.com/_heyrico">@heyrico</Link>
      </div>
    </PageTemplate>
  );
};

export default DualRangeSliderPage;
