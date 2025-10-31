import Image from 'next/image';
import { AnimatedBadge } from './AnimatedBadge';
import { AnimateEnter } from './AnimateEnter';
import { GridBackground } from './GridBackground';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icon';
import { NumberTicker } from '@/components/magicui/number-ticker';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function HeroContent() {
  const [star, setStar] = useState(0);
  const fetchGithubData = () => {
    axios
      .get('https://api.github.com/repos/arihantcodes/spectrum-ui')
      .then((response) => {
        const star = response.data.stargazers_count;
        setStar(star);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    fetchGithubData();
  }, []);
  return (
    <div className="z-[3] flex flex-col items-center gap-16 sm:gap-28 text-center">
      <div>
        <div className="mb-5 sm:mb-8 space-y-4 sm:space-y-6">
          <AnimateEnter delay={0.3} duration={2}>
            <h1 className="mx-auto text-center max-w-5xl px-4 font-bold text-2xl md:text-6xl leading-tight tracking-tight">
              <span className="block text-gradient mb-1">Thrive with ADHD</span>
              <span className="">
                Your Journey to Focus and Clarity
              </span>
            </h1>
          </AnimateEnter>
        </div>
        <AnimateEnter delay={0.5} duration={2} className="mb-6 sm:mb-8">
          <p className="container mx-auto  md:max-w-lg text-[12px] sm:text-base text-foreground">
            Explore resources, connect with a supportive community, and discover strategies to manage ADHD effectively.
          </p>
        </AnimateEnter>
        <AnimateEnter className="flex items-center justify-center gap-3" delay={0.7} duration={2}>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 md:mt-6 w-full sm:w-auto px-5">
            <Link href="/resources" className="w-full sm:w-auto">
              <Button size="lg" className="rounded-2xl w-full sm:w-auto px-8">
                Explore Resources
              </Button>
            </Link>

            <div className="w-full sm:w-auto">
              <Link target="_blank" href="/community">
                <Button variant="secondary" className="rounded-2xl w-full sm:w-auto px-8 h-11">
                  <div className="flex items-center">
                    <Icons.users className="size-4" />

                    <span className="ml-1 ">Join our Community</span>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </AnimateEnter>
      </div>

      <GridBackground />
    </div>
  );
}
