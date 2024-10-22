"use client";
import { AppSidebar } from '@/components/app-sidebar';
import AllComponents from '@/components/spectrumui/dashbord';
import { useParams } from 'next/navigation'; // Import useParams to get the slug
import React from 'react';

const Page = () => {
  const { slug } = useParams();
  const slugString = Array.isArray(slug) ? slug.join('/') : slug; // Ensure slug is a string

  return (
    <div className=''>
      <AllComponents slug={slugString} />
      
    </div>
  );
}

export default Page;
