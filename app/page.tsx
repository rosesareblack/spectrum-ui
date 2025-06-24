'use client';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Cover } from '@/components/ui/cover';
import { Button } from '@/components/ui/button';

import { Fomo } from '@/components/sponserbutton';
import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icon';
import { NumberTicker } from '@/components/magicui/number-ticker';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ShinyCardGroup } from '@/components/shiny-cards';
import {
  Bullet,
  Bullets,
  PricingButton,
  Color,
  Cost,
  FreeCardHighlight,
  PricingCard,
  PricingCardContent,
  PricingCardHeader,
  ProCardHighlight,
  Separator,
} from '@/components/pricing';
import HomeCardCollection from '@/components/homecard';

const Homepage = () => {
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
    <>
      {/* <Homepage /> */}
      <div className="flex justify-center min-h-[60vh] container-wrapper">
        <div className=" py-5 flex flex-col items-center justify-center">
          <Fomo />
          <h1 className="text-center text-2xl font-bold  mt-4 md:mt-12 md:text-5xl lg:text-6xl">
            Instant UI Components <br /> Just{' '}
            <Cover>
              <span className="dark:text-neutral-100">Copy, Paste &amp; Done</span>
            </Cover>
          </h1>
          <p className="text-center text-sm md:text-lg mt-4 md:mt-8 text-neutral-500 dark:text-neutral-500 max-w-2xl">
            250+ free and open-source animated components and effects built with Next Js,
            Typescript, Tailwind CSS, and Motion.Perfect companion for shadcn/ui.
          </p>
          <h1 className="mt-6  text-center text-lg md:text-2xl font-bold text-gray-400">
            Built With
          </h1>
          <div className=" flex items-center justify-center gap-5  md:ml-8">
            <Image
              src="./nextjs.svg"
              height={40}
              width={90}
              className="w-[50px] md:w-[90px]"
              alt="next js"
            />
            <Image
              src="./shadcn.svg"
              height={40}
              width={140}
              className="w-[90px] md:w-[140px]"
              alt="shadcn ui"
            />
            <Image
              src="./tailwind.svg"
              height={40}
              width={120}
              className="w-[80px] md:w-[120px]"
              alt="tailwind css"
            />
            <Image
              src="./aceternity.svg"
              height={40}
              width={160}
              className="w-[90px] md:w-[160px]"
              alt="acternity ui"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto px-5">
            <Link href="/docs/installation" className="w-full sm:w-auto">
              <Button size="lg" className="rounded-xl w-full sm:w-auto px-8">
                Explore Components
              </Button>
            </Link>

            <div className="w-full sm:w-auto">
              <Link target="_blank" href={siteConfig.links.github}>
                <Button variant="secondary" className="rounded-xl w-full sm:w-auto px-8 h-11">
                  <div className="flex items-center">
                    <Icons.gitHub className="size-4" />

                    <span className="ml-1 ">Star on GitHub</span>
                  </div>
                  <div className="ml-1 flex items-center gap-1 text-sm md:flex">
                    🌟
                    <NumberTicker value={star} className="font-display" />
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wrapper">
        <div className="container py-6">
          <section className="overflow-hidden  rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
            <Image
              src="/examples/cards-light.png"
              width={1280}
              height={1214}
              alt="Cards"
              className="block dark:hidden"
            />
            <Image
              src="/examples/cards-dark.png"
              width={1280}
              height={1214}
              alt="Cards"
              className="hidden dark:block"
            />
          </section>
          <section
            className="hidden md:block  [&>div]:p-0 "
            style={
              {
                '--radius': '1rem',
              } as React.CSSProperties
            }
          >
            <div className="flex flex-col justify-center items-center my-12">
              <div className="px-8 rounded-2xl text-center">
                <h2 className="font-bold text-2xl md:text-4xl mb-4 tracking-tight text-neutral-900 dark:text-white">
                  Ready-to-Use UI Blocks
                </h2>
                <p className="text-center text-sm md:text-lg mt-4 md:mt-8 text-neutral-600 dark:text-neutral-400 max-w-2xl">
                  Pre-built sections you can drop into any project — login forms, payment flows, AI
                  widgets, and more. Just copy, paste, and ship fast.
                </p>
              </div>
            </div>

            <HomeCardCollection />
          </section>
        </div>
        <Link href={siteConfig.links.twitter} className="flex justify-center items-center mb-12">
          <div className="px-8 rounded-2xl text-center text-2xl mt-4 font-semibold md:text-4xl mb-8">
            Feature Your Product on Spectrum UI
          </div>
        </Link>
        <ShinyCardGroup className="grid h-full max-w-4xl grid-cols-2 gap-6 mx-auto group">
          <PricingCard color={Color.White} className="col-span-2 md:col-span-1 ">
            <FreeCardHighlight className="absolute top-0 right-0 pointer-events-none" />

            <PricingCardHeader
              title="💜 Support Spectrum UI"
              description="Support Spectrum UI and get early access + your name on the wall."
              className="bg-gradient-to-tr from-transparent to-[#ffffff]/10 "
              color={Color.White}
            />
            <Separator />

            <PricingCardContent>
              <Cost dollar="$20" />
              <PricingButton
                productId="656c8573-32fe-4433-a0d9-ddd45ae267c6"
                label="Become a Supporter"
              />
              <Bullets>
                <li>
                  <Bullet
                    Icon={Check}
                    label="Show your support for Spectrum UI"
                    color={Color.White}
                  />
                </li>

                <li>
                  <Bullet
                    Icon={Check}
                    label="Get your name listed on our Supporter Wall"
                    color={Color.White}
                  />
                </li>
                <li>
                  {' '}
                  <Bullet
                    Icon={Check}
                    label="Priority access to new components & updates"
                    color={Color.White}
                  />
                </li>
                <li>
                  <Bullet Icon={Check} label="Warm fuzzy feeling ❤️" color={Color.White} />
                </li>
              </Bullets>
            </PricingCardContent>
          </PricingCard>
          <PricingCard color={Color.Yellow} className="col-span-2 md:col-span-1">
            <ProCardHighlight className="absolute top-0 right-0 pointer-events-none" />

            <PricingCardHeader
              title="Golden Banner Promotion"
              description="Promote your product at the top of every page "
              className="bg-gradient-to-tr from-black/50 to-[#FFD600]/10 "
              color={Color.Yellow}
            />
            <Separator />

            <PricingCardContent>
              <Cost dollar="$199" />
              <PricingButton
                productId="f0a5e414-d0aa-4f1c-9822-ce9e24f00faf"
                label="Book the Banner Slot"
              />
              <Bullets>
                <li>
                  <Bullet Icon={Check} label="Banner on all pages" color={Color.Yellow} />
                </li>

                <li>
                  <Bullet Icon={Check} label="Custom link + message" color={Color.Yellow} />
                </li>
                <li>
                  <Bullet Icon={Check} label="3 slots only" color={Color.Yellow} />
                </li>
                <li>
                  <Bullet Icon={Check} label="Seen by 10,000+ devs/month" color={Color.Yellow} />
                </li>
              </Bullets>
            </PricingCardContent>
          </PricingCard>
        </ShinyCardGroup>
      </div>
    </>
  );
};

export default Homepage;
