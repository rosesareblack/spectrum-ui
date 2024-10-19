"use client";
import Cube from "@/components/testing";
import { Cover } from "@/components/ui/cover";
import { Spotlight } from "@/components/ui/Spootlight";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="flex flex-col">
        <h1 className="md:text-4xl text-center md:mt-12 font-bold ">
          Instant UI Components <br /> at <Cover>Copy, Paste, Done</Cover>{" "}
        </h1>
        <h1 className="text-center font-bold mt-6 text-2xl text-gray-400">
          Build With
        </h1>
        <div className="flex flex-col  md:flex-row items-center justify-center mt-4 gap-5">
  
          <Image src="./nextjs.svg" height={40} width={90} alt="" />
          <Image src="./shadcn.svg" height={40} width={140} alt="" />
          <Image src="./tailwind.svg" height={40} width={120} alt="" />
          <Image src="./aceternity.svg" height={40} width={160} alt="" />
        </div>
      </div>

     <div className="">
     <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="gray"
      />
     <Cube />
     </div>
    </div>
  );
}
