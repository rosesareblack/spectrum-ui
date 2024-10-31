import { RainbowButton } from "@/components/ui/rainbow-button";


import Cube from "@/components/testing";
import { Cover } from "@/components/ui/cover";
import { Spotlight } from "@/components/ui/Spootlight";
import Image from "next/image";

import { Icons } from "@/components/icon";
import Link from "next/link";
import ShinyButton from "@/components/ui/shiny-button";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";

import CardCollection from "@/components/spectrumui/cards";


export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="grid md:grid-cols-2 mt-12">
        <div className="flex flex-col">
          <h1 className="md:text-4xl text-center md:mt-12 font-bold ">
            Instant UI Components <br /> at <Cover>Copy, Paste, Done</Cover>{" "}
          </h1>
          <h1 className="text-center font-bold mt-6 text-2xl text-gray-400">
            Build With
          </h1>
          <div className="flex flex-col  md:flex-row items-center justify-center mt-4 gap-5">
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
          <div className="flex gap-6 flex-col md:flex-row items-center justify-center">
            <Link href="/docs">
            <RainbowButton>Browse Components</RainbowButton>
            </Link>
            <Link href="https://github.com/arihantcodes/spectrum-ui">
              <RainbowButton className="gap-4 dark:bg-black">
                {" "}
                <Icons.gitHub className="icon-class w-4 " />
                Give a Star
              </RainbowButton>
            </Link>
          </div>
        </div>

        <div className="">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className="md:ml-5 h-full w-full">
            <Cube />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Card>
        <CardTitle className="mt-5 text-center mb-8">Explore Our Cards</CardTitle>
        <CardCollection />
        </Card>
      </div>


    <div className="mt-7">
    <Link href="https://x.com/compose/tweet?text=I%27ve%20been%20using%20%23SpectrumUI%20 share%20yourtought%20%40arihantCodes%20">
        <Button className="">Share Your Thoughts On
        <Icons.twitter className="icon-class ml-1 w-3.5 " />
        </Button>
      </Link>
    </div>
    
    </div>
  );
}
