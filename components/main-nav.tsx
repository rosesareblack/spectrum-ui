'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Icons } from './icon';

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4  md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <div className="h-6 w-6 bg-neutral-100 border-neutral-300 border dark:bg-white rounded-md flex items-center justify-center p-1">
          <Icons.logo className="h-5 w-5 text-black " />
        </div>

        <span className=" font-bold lg:inline-block">ADHD Focus Hub</span>
      </Link>      <nav className=" items-center gap-4 text-sm xl:gap-6 hidden md:flex">
        <Link
          href="/resources"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/resources' ? 'text-foreground' : 'text-foreground/80',
          )}
        >
          Resources
        </Link>

        <Link
          href="/community"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/community') ? 'text-foreground' : 'text-foreground/80',
          )}
        >
          Community
        </Link>
        <Link href="/blog" className={cn(
          'transition-colors hover:text-foreground/80',
          pathname === '/blog' ? 'text-foreground' : 'text-foreground/80',
        )}>
          Blog
        </Link>

        <Link
          href="/about"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/about') ? 'text-foreground' : 'text-foreground/80',
          )}
        >
          About
        </Link>
      </nav>
    </div>
  );
}
