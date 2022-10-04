import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <div className='cs-bg-primary flex min-h-screen w-full items-center justify-center '>
        {children}
      </div>
    </>
  );
}
