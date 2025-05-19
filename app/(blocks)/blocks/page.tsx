import { PageTemplate } from "@/app/(docs)/docs/components/page-template";
import PreviewCodeCard from "@/app/(docs)/docs/components/preview-code-card";
import React from "react";
import Dashboardblock from "@/app/(blocks)/blocks/dashboard";
import Link from "next/link";
import { Icons } from "@/components/icon";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto container-wrapper px-8 py-2">
     
    
      <PageTemplate title="Pharmalogistics Dashboard" className="mt-5">
      <div className="flex justify-end  gap-2 -mt-12 ">
      <Link
              href="https://shadcnblocks.com"
              className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 rounded-md px-7 h-12  hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              <Icons.shadcnblock className="h-5 w-5" />
              <div className="flex flex-col">
                <span className="text-sm font-medium ">Shadcnblocks.com</span>
                <span className="text-xs text-neutral-400">
                  600+ extra shadcn blocks
                </span>
              </div>
            </Link>
      </div>
        <PreviewCodeCard
          className="p-4"
          path="app/(blocks)/blocks/dashboard.tsx"
        >
          <Dashboardblock />
        </PreviewCodeCard>
      </PageTemplate>
    </div>
  );
};

export default page;
