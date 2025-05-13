// components/Steppers.tsx

import React from "react";
import fs from "fs/promises";

interface StepperProps {
  title?: string;
  step: number;
  children?: React.ReactNode;
}

function Stepper({ title, step, children }: StepperProps) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
          {step}
        </span>
        <h4 className="text-base font-semibold">{title}</h4>
      </div>
      {children && (
        <div className="ml-11 mt-2 border-l pl-4 text-sm dark:border-neutral-600">
          {children}
        </div>
      )}
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

export  async function Steppers({
  className,
  installScript,
  codePath,
  steps = [],
  withInstall = false,
  withEnd = false,
}: SteppersProps) {
  let codeFromFile = "";

  if (withInstall && codePath) {
    try {
      codeFromFile = await fs.readFile(codePath, "utf8");
    } catch (error) {
      console.error("Failed to read file:", error);
      codeFromFile = "// Could not load file";
    }
  }

  let stepCounter = 1;

  return (
    <div className={className}>
      {withInstall && (
        <>
          {installScript && (
            <Stepper title="Install the package" step={stepCounter++} >
              <pre className=" bg-neutral-100 h-12 p-12 rounded-md text-sm dark:bg-[#101010] ">{installScript}</pre>
            </Stepper>
          )}
          <Stepper title="Paste this code into your project" step={stepCounter++}>
            <pre className="rounded bg-neutral-100 p-2 text-sm dark:bg-[#101010] whitespace-pre-wrap">
              {codeFromFile}
            </pre>
          </Stepper>
        </>
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
