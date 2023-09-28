'use client';


export default function PortfolioPage() {

  return (
    <main className='container mx-auto flex flex-col gap-10'>
        <h1>PortfolioPage</h1>
        <form>
            <label htmlFor="cars">Choose the Market:</label>
            <select name="cars" id="cars" multiple>
                <option value="nasdaq">NASDAQ</option>
                <option value="ny">NY</option>
                <option value="kospi">KOSPI</option>
                <option value="kosdaq">KOSDAQ</option>
            </select>
        </form>
        
    </main>
  );
}