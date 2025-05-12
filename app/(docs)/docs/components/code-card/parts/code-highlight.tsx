"use client";
import React, { useState, useEffect } from "react";
import { Highlighter, createHighlighter } from "shiki";

import { Button } from "@/components/ui/button";
import {  Clipboard, CheckCheck } from 'lucide-react';
import { cn } from "@/lib/utils";

interface CodeHighlightProps {
  code?: string;
  inTab?: boolean;
  withExpand?: boolean;
  lang?: string;
}

const CodeHighlight = ({
  code = "",
  inTab = false,
  withExpand = false,
  lang = "tsx",
}: CodeHighlightProps) => {
  const [copied, setCopied] = useState(false);
  const [expand, setExpanded] = useState(!withExpand);
  const [highlighter, setHighlighter] = useState<Highlighter | null>(null);
  const [highlightedCode, setHighlightedCode] = useState<string>("");

  useEffect(() => {
    const loadHighlighter = async () => {
      const highlighter = await createHighlighter({
        themes: ['vesper'],
        
        langs: ['typescript', 'tsx', 'javascript', 'jsx', 'shell', 'bash'],
      });
      setHighlighter(highlighter);
    };
    
    loadHighlighter();
  }, []);

  useEffect(() => {
    if (highlighter && code) {
      try {
        // Map common language aliases
        const languageMap: Record<string, string> = {
          'tsx': 'tsx',
          'jsx': 'jsx',
          'js': 'javascript',
          'ts': 'typescript',
          'shell': 'bash',
        };
        
        const mappedLang = languageMap[lang] || lang;
        const html = highlighter.codeToHtml(code, { 
          lang: mappedLang, 
          theme: 'vesper' 
        });
        setHighlightedCode(html);
      } catch (error) {
        console.error("Failed to highlight code:", error);
        // Fallback to plain text if language not supported
        setHighlightedCode(`<pre>${code}</pre>`);
      }
    }
  }, [highlighter, code, lang]);

  return (
    <div className="relative  rounded-md">
      <Button
        className={cn(
          "absolute right-3 top-3 h-8 w-8 bg-neutral-700 hover:bg-neutral-900 z-10",
          (inTab || lang === "shell") && "right-3 top-3"
        )}
        variant="ghost"
        size="icon"
        onClick={() => {
          navigator.clipboard.writeText(code || "");
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 3000);
        }}
      >
        {copied ? (
          <CheckCheck className="h-4 w-4 text-green-400" />
        ) : (
          <Clipboard className="h-3 w-3 text-neutral-200" />
        )}
      </Button>
      <div
        className={cn(
          "max-h-[130px] overflow-hidden rounded-md",
          expand && "max-h-[400px] overflow-auto"
        )}
      >
        {highlightedCode ? (
          <div 
            dangerouslySetInnerHTML={{ __html: highlightedCode }} 
            className={cn("shiki-container", lang)}
          />
        ) : (
          <div className="px-4 bg-zinc-900 text-zinc-100 rounded-md">
            <pre>{code}</pre>
          </div>
        )}
      </div>
      <div
        className={cn(
          "absolute bottom-2 flex w-full items-center justify-center transition-opacity duration-300",
          inTab && "bottom-0",
          !withExpand && "hidden"
        )}
      >
        <Button
          variant="outline"
          onClick={() => {
            setExpanded((prev) => !prev);
          }}
        >
          {expand ? "Collapse" : "Expand"}
        </Button>
      </div>
    </div>
  );
};

export default CodeHighlight;
