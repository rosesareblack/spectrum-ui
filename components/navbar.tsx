"use client";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button, buttonVariants } from "./ui/button";
import { Icons } from "./icon";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

import { ThemeToggle } from "./theme-toggle";
import { useEffect, useState } from "react";
import axios from "axios";


import { NumberTicker } from "./magicui/number-ticker";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname()
  const [star, setStar] = useState(0);
  const fetchGithubData = () => {
    axios
      .get("https://api.github.com/repos/arihantcodes/spectrum-ui")
      .then((response) => {
        const star = response.data.stargazers_count;
        setStar(star);
      })
      .catch((error) => {
        console.error("Error fetching GitHub data:", error);
      });
  };

  useEffect(() => {
    fetchGithubData();
  }, []);
  return (
    <header className=" border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center gap-2 md:gap-4">
          <MainNav />
          <MobileNav />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
          {pathname !== '/blocks' && (
            <Link
              href="https://shadcnblocks.com"
              className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 rounded-md px-5 h-9  hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              <Icons.shadcnblock className="h-5 w-5" />
              <div className="flex flex-col">
                <span className="text-sm font-medium ">Shadcnblocks.com</span>
                <span className="text-xs text-neutral-400">
                  600+ extra shadcn blocks
                </span>
              </div>
            </Link>
          )}
            <div className="md:block hidden">
              <Link target="_blank" href={siteConfig.links.github}>
                <Button
                  variant="secondary"
                  className="
               
                h-8 px-2 font-medium text-sm"
                >
                  <div className="flex items-center">
                    <Icons.gitHub className="size-4" />
                    <span className="ml-1 lg:hidden">Star</span>
                    <span className="ml-1 hidden lg:inline">
                      Star on GitHub
                    </span>{" "}
                  </div>
                  <div className="ml-1 flex items-center gap-1 text-sm md:flex">
                    🌟
                    <NumberTicker
                      value={star}
                      className="font-display font-medium"
                    />
                  </div>
                </Button>
              </Link>
            </div>

            <nav className="flex items-center gap-0.5">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-8 w-8 px-0"
              >
                <Link
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.twitter className="h-4 w-4" />
                  <span className="sr-only">X</span>
                </Link>
              </Button>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
