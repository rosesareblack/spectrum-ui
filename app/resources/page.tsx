'use client';

import { NextPage } from 'next';

const ResourcesPage: NextPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">ADHD Resources</h1>
      <p className="text-lg mb-4">
        Welcome to our resources page. Here you will find a curated list of articles, tools, and other resources to help you understand and manage your ADHD.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Articles</h2>
          <p>Coming soon...</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Tools</h2>
          <p>Coming soon...</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Videos</h2>
          <p>Coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
