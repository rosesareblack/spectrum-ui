import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Spline from "@splinetool/react-spline/next";

import { Cover } from "@/components/ui/cover";

import { Button } from "@/components/ui/button";

import { CardsDemo } from "@/components/cards";
import Sponserbutton from "@/components/sponserbutton";

const title = "Spectrum UI";
const description =
  "A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.";

  export const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: "https://ui.spectrumhq.in/og.png",
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: `https://ui.spectrumhq.in/og.png`,
          alt: title,
        },
      ],
    },
  };

export default function IndexPage() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <>
      {/* <Homepage /> */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 container-wrapper">
        <div className=" py-5 flex flex-col items-center justify-center">
          <Sponserbutton/>
          <h1 className="text-center text-2xl font-bold md:mt-12 md:text-5xl">
            Instant UI Components <br /> Just{" "}
            <Cover>
              <span className="dark:text-neutral-100">
                Copy, Paste &amp; Done
              </span>
            </Cover>
          </h1>
          <h1 className="mt-6 text-center text-2xl font-bold text-gray-400">
            Built With
          </h1>
          <div className="my-4 flex flex-col items-center justify-center gap-5 md:flex-row ml-8">
            <Image src="./nextjs.svg" height={40} width={90} alt="next js" />
            <Image src="./shadcn.svg" height={40} width={140} alt="shadcn ui" />
            <Image
              src="./tailwind.svg"
              height={40}
              width={120}
              alt="tailwind css"
            />
            <Image
              src="./aceternity.svg"
              height={40}
              width={160}
              alt="acternity ui"
            />
          </div>

          <div className="my-5 flex items-center gap-4 flex-col md:flex-row">
            <Link href="/docs/installation">
              <Button size="lg" className="rounded-2xl">
                Explore Components
              </Button>
            </Link>
            <Link href="https://cal.com/arihantjain/15min?overlayCalendar=true">
              <Button className="h-12 gap-4 rounded-2xl" variant="secondary">
                <Image
                  src="/arihanticon.jpg"
                  alt="Arihant"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                Book a Call With Arihant
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <Spline scene="https://prod.spline.design/WtLbdYm-Wsiv4k7T/scene.splinecode" />
        </div>
      </div>

      <div className="container-wrapper mt-20">
        <div className="container py-6">
          <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
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
            className="hidden md:block [&>div]:p-0"
            style={
              {
                "--radius": "0.75rem",
              } as React.CSSProperties
            }
          >
            <CardsDemo />
          </section>
        </div>
      </div>
    </>
  );
}
