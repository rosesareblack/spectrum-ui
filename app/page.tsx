'use client';
import type { CSSProperties } from 'react';
import Image from 'next/image';

import { HeroSection } from './home';

const Homepage = () => {
  return (
    <>
      <div className="container-wrapper">

      <HeroSection />
    </div>

      <div className="container-wrapper">
        <div className="container py-6">
          <section
            style={{
              '--radius': '1rem',
            } as CSSProperties}
          className='flex flex-col items-center justify-center '>
            <h1 className="font-bold text-2xl md:text-4xl text-center  text-neutral-900 dark:text-white mb-12">
            Join our Supportive Community
            <br />
             to Connect and Share Experiences
            </h1>
            <Link href="/community">
              <Button size="lg" className="rounded-2xl w-full sm:w-auto px-8">
                Join Now
              </Button>
            </Link>
          </section>
          <section
            className="hidden md:block  [&>div]:p-0 "
            style={{
              '--radius': '1rem',
            } as CSSProperties}
          >
            <div className="flex flex-col justify-center items-center my-12">
              <div className="px-8 rounded-2xl text-center">
                <h2 className="font-bold text-2xl md:text-4xl mb-4 tracking-tight text-neutral-900 dark:text-white">
                  Explore Our ADHD Resources
                </h2>
              </div>
            </div>

          </section>
        </div>
      </div>
    </>
  );
};

export default Homepage;
