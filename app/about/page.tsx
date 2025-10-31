'use client';

import { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">About ADHD Focus Hub</h1>
      <p className="text-lg mb-4">
        ADHD Focus Hub is a community-driven platform dedicated to providing resources, support, and tools for individuals with ADHD.
      </p>
      <p className="text-lg mb-4">
        Our mission is to empower people with ADHD to thrive in all aspects of their lives. We believe that with the right strategies and support, anyone can learn to manage their ADHD and achieve their full potential.
      </p>
      <p className="text-lg">
        Join us on this journey to focus, clarity, and success.
      </p>
    </div>
  );
};

export default AboutPage;
