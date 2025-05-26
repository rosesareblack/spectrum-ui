"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { Button, buttonVariants } from "./ui/button";
import { Icons } from "./icon";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";
import { NumberTicker } from "./magicui/number-ticker";

export function SiteHeader() {
  const pathname = usePathname();
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
    <header className="border-grid sticky top-0 z-[50]  w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper ">
        <div className="container flex h-14 items-center gap-2 md:gap-4">
          <MobileNav />
          <MainNav />

          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            {pathname !== "/blocks" && (
              <Link
                href="https://shadcnblocks.com"
                className="hidden md:flex items-center gap-2 bg-neutral-100 border dark:bg-secondary rounded-md px-5 h-9 hover:bg-neutral-200 dark:hover:bg-secondary/80 transition-colors"
              >
                <Icons.shadcnblock className="h-4 w-4" />
                <div className="flex flex-col xl:flex-row gap-3 items-center">
                  <p className="text-sm font-medium hidden lg:block">Shadcnblocks.com</p>
                  <p className="text-[11px] text-neutral-700 dark:text-neutral-400 hidden xl:block">
                    [ 600+ extra shadcn blocks]
                  </p>
                </div>
              </Link>
            )}

            <div className="md:block hidden">
              <Link target="_blank" href={siteConfig.links.github}>
                <Button
                  className="h-9 px-2 text-w font-medium text-sm border dark:bg-secondary dark:hover:bg-secondary/80 bg-neutral-100 hover:bg-neutral-200 transition-colors"
                >
                  <div className="flex items-center">
                    <Icons.gitHub className="size-4" />
                    <span className="ml-1 lg:hidden">Star</span>
                    <span className="ml-1 hidden lg:inline">
                      Star on GitHub
                    </span>
                  </div>
                  <div className="ml-1 flex items-center gap-1 text-sm md:flex">
                    🌟
                    <NumberTicker value={star} className="font-display" />
                  </div>
                </Button>
              </Link>
            </div>

            <nav className="flex items-center gap-0.5">
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
