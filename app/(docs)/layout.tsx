import LeftSide from "@/app/(docs)/layout-parts/left-side/left-side";
import React from "react";
import { Toaster } from "@/components/ui/toaster";

import Requestcomponets from "@/components/requestcomponets";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mt-10 flex">
      <LeftSide />
      <section className="flex flex-1 flex-col overflow-auto px-6">
        <div className="flex-1">
          <div className="mb-4">
            <Requestcomponets />
          </div>
          {children}
        </div>
      </section>
      <Toaster />
    </main>
  );
}
