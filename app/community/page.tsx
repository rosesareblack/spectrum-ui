'use client';

import { NextPage } from 'next';

const CommunityPage: NextPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Join our Community</h1>
      <p className="text-lg mb-4">
        Connect with other people who have ADHD, share your experiences, and learn from others in our supportive community.
      </p>
      <div className="border p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Community Forum</h2>
        <p className="mb-4">Our forum is a safe space to discuss all things ADHD. Ask questions, share tips, and connect with others who understand what you're going through.</p>
        <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded-lg">Join the Discussion</a>
      </div>
    </div>
  );
};

export default CommunityPage;
