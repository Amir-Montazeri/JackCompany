import React from 'react';

import { VanArsdelHeader } from '@/components';

interface VALProps {
  children: React.ReactNode;
}

function VanArsdelLayout({ children }: VALProps) {
  return (
    <section className="bg-white">
      <VanArsdelHeader />
      {children}
    </section>
  );
}

export default VanArsdelLayout;
