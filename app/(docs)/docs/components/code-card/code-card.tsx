"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeHighlight from "@/app/(docs)/docs/components/code-card/parts/code-highlight";
import { cn } from "@/lib/utils";

interface CodeCardProps {
  children?: React.ReactNode;
  code?: string;
  className?: string;
  CLI?: string;
}
const CodeCard = ({ children, code, className, CLI }: CodeCardProps) => {
  return (
    <Tabs defaultValue="preview" className={cn(className)}>
      <TabsList>
        <TabsTrigger value="preview" className="font-semibold font-regular">Preview</TabsTrigger>
        <TabsTrigger value="code"  className="font-semibold font-regular">Code</TabsTrigger>
        <TabsTrigger value="CLI"  className="font-semibold font-regular">CLI</TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="rounded-md border-2 mt-4">
        {children}
      </TabsContent>
      <TabsContent value="code" className="rounded-2xl   mt-4">
        <CodeHighlight code={code} inTab />
      </TabsContent>
      <TabsContent value="CLI" className="rounded-2xl   mt-4">
        <CodeHighlight  code={`npx shadcn@latest add ${CLI} `} inTab />
      </TabsContent>
    </Tabs>
  );
};

export default CodeCard;
