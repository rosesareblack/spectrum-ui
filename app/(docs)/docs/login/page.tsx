import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import { Steppers } from '@/components/ui/steppers';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import LoginPage from './login-demo';

export const metadata: Metadata = baseMetadata({
  title: 'Spectrum UI-Login card',
  description:
    'Spectrum UI Login page is a simple and elegant login form that allows users to sign in to their accounts. It is designed to be easy to use and visually appealing, with a clean and modern interface.',
});

const DualRangeSliderPage = () => {
  return (
    <PageTemplate title="Login Card">
      <PreviewCodeCard
        path="app/(docs)/docs/login/login-demo.tsx"
        cli="https://ui.spectrumhq.in/r/login_card.json"
      >
        <LoginPage />
      </PreviewCodeCard>
    </PageTemplate>
  );
};

export default DualRangeSliderPage;
