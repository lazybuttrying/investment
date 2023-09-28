'use client';

import { DefaultNavigation } from "@/components/Navigation";

export default function IndexPage() {

  return (
    <main className='container mx-auto flex flex-col gap-10'>
        <h1>Investment Helper</h1>
        <DefaultNavigation/>
    </main>
  );
}