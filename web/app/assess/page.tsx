'use client';

import { AssessNavigation } from "@/components/Navigation";

export default function IndexPage() {

  return (
    <main className='container mx-auto flex flex-col gap-10'>
        <h1>What type do you assess?</h1>
        <AssessNavigation/>
    </main>
  );
}