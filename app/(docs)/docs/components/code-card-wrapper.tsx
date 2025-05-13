// components/code-card-wrapper.tsx
'use client';

import CodeCard from '@/app/(docs)/docs/components/code-card/code-card';

interface Props {
  code: string;
  className?: string;
  children?: React.ReactNode;
}

const CodeCardWrapper = ({ code, className, children }: Props) => {
  return (
    <CodeCard code={code} className={className}>
      {children}
    </CodeCard>
  );
};

export default CodeCardWrapper;
