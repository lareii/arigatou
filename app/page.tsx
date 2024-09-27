'use client';

import { useState } from 'react';
import Modal from '@/components/Modal';

export default function Home() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <main className='h-screen flex justify-center items-center'>
      <button
        onClick={() => setIsHidden(false)}
        className='px-4 py-3 rounded-lg hover:bg-zinc-900 transition ease-in-out'
      >
        tıkla bana senpai :33
      </button>
      <Modal isHidden={isHidden} setIsHidden={setIsHidden} />
    </main>
  );
}
