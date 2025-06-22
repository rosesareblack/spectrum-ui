import React from "react";
import { RainbowButton } from "./magicui/rainbow-button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Cta = () => {
  return (
    <div className="container-wrapper py-12 px-4 md:px-28 z-50 ">
      <div className="container mx-auto h-56 md:h-96 flex  justify-center bg-gradient-to-b from-neutral-600 to-black rounded-2xl md:rounded-[44px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.07)] ">
        <div className="flex flex-col  items-center mt-6 md:mt-16">
          <h1 className="text-[20px] md:text-[40px] font-bold text-white text-center ">
            Build Beautiful Interfaces Like
            <br />
            Spectrum UI for Your Product
          </h1>
          <p className="text-muted-foreground md:text-lg max-w-[300px] md:max-w-xl md:mx-auto mt-5 text-center">
            I help companies ship fast, clean UIs that users love.
          </p>
          <Link href="https://x.com/arihantcodes" className="flex">
            <RainbowButton
              variant="outline"
              className=" px-7 rounded-3xl mt-5 flex items-center"
            >
              Lets Talk <ChevronRight className="h-4 w-4 " />
            </RainbowButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cta;
