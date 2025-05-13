
import React from "react";
import fs from "fs/promises";
import { createHighlighter,  Highlighter } from "shiki";

// Initialize shiki highlighter
let highlighterPromise: Promise<Highlighter> | null = null;

const getShikiHighlighter = async () => {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['vesper', 'vesper'],
      langs: ["bash", "typescript", "javascript", "tsx", "jsx", "html", "css", "json"]
    });
  }
  return highlighterPromise;
};

interface StepperProps {
  title?: string;
  step: number;
  children?: React.ReactNode;
}

function Stepper({ title, step, children }: StepperProps) {
  return (
    <div className="group">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 font-medium shadow-sm transition-colors group-hover:bg-neutral-200 dark:bg-neutral-900/30 dark:text-neutral-400 dark:group-hover:bg-neutral-800/40">
          {step}
        </span>
        <h4 className="text-base font-semibold text-neutral-800 dark:text-neutral-200">{title}</h4>
      </div>
      {children && (
        <div className="ml-11 mt-2 border-l-2 border-neutral-100 pl-4 text-sm dark:border-neutral-800">
          {children}
        </div>
      )}
    </div>
  );
}

interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
}

async function CodeBlock({ code, language = "typescript", fileName }: CodeBlockProps) {
  const highlighter = await getShikiHighlighter();
  
  const highlightedCode = highlighter.codeToHtml(code, {
    lang: language,
    theme: 'vesper',
    transformers: [
      {
        name: 'line-numbers',

      }
    ]
  });
  
  return (
    <div className="overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 mt-3">
      {fileName && (
        <div className="bg-neutral-50 dark:bg-neutral-900 px-4 py-2 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800">
          <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">{fileName}</span>
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
        </div>
      )}
      <div 
        className="bg-neutral-50 dark:bg-neutral-900 overflow-x-auto p-4" 
        dangerouslySetInnerHTML={{ __html: highlightedCode }} 
      />
    </div>
  );
}

interface SteppersProps {
  className?: string;
  installScript?: string;
  codePath?: string;
  steps?: { title: string; children?: React.ReactNode }[];
  withInstall?: boolean;
  withEnd?: boolean;
}

export async function Steppers({
  className,
  installScript,
  codePath,
  steps = [],
  withInstall = false,
  withEnd = false,
}: SteppersProps) {
  let codeFromFile = "";
  let fileExtension = "";

  if (withInstall && codePath) {
    try {
      codeFromFile = await fs.readFile(codePath, "utf8");
      fileExtension = codePath.split('.').pop() || "ts";
    } catch (error) {
      console.error("Failed to read file:", error);
      codeFromFile = "// Could not load file";
    }
  }

  let stepCounter = 1;

  return (
    <div className={`space-y-6 py-2 ${className || ""}`}>
      {withInstall && installScript && (
        <Stepper title="Install the package" step={stepCounter++}>
          <CodeBlock 
            code={installScript} 
            language="bash" 
            fileName="Terminal" 
          />
        </Stepper>
      )}
      
      {withInstall && codePath && (
        <Stepper title="Paste this code into your project" step={stepCounter++}>
          <CodeBlock 
            code={codeFromFile} 
            language={fileExtension} 
            fileName={codePath.split('/').pop()} 
          />
        </Stepper>
      )}

      {steps.map((s) => (
        <Stepper key={s.title} title={s.title} step={stepCounter++}>
          {s.children}
        </Stepper>
      ))}

      {withEnd && (
        <Stepper title="Update import paths as needed" step={stepCounter++} />
      )}
    </div>
  );
}