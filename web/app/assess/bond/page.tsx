'use client';


export default function BondPage() {

  return (
    <main className='container mx-auto flex flex-col gap-10'>
        <h1>BondPage</h1>
        <section>
            <h3>Terms</h3>
            <ul>
                <li><b>D</b>: </li>
                <li><b>P</b>: </li>
                <li><b>k</b>: </li>
                <li><b>g</b>: </li>
            </ul>
        </section>
        <section>
            <h3>3 Types of Bond Valuation Assessment</h3>
            <ul>
                <li>Zero-Coupon Growth Model</li>
                <li>Gordon's Growth Model </li>
                <li>Multi-Step Growth Model</li>
            </ul>
        </section>
    </main>
  );
}