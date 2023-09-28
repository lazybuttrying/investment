import Link from 'next/link';

const css = {
    ul: "grid grid-col-3 p-2",
    li: "p-5 rounded border"
}

function AssessNavigation() {

    return (
      // <div className="bg-slate-850">
      <nav className={css.ul}>
        <ul>
          <Link className={css.li} href='/assess/stock'>Stock</Link>
          <Link className={css.li} href='/assess/bond'>Bond</Link>
          <Link className={css.li} href='/assess/real'>Real Estate</Link>
        </ul>
      </nav>
      // </div>
    );
}

function DefaultNavigation() {

    return (
      // <div className="bg-slate-850">
      <nav className={css.ul}>
        <ul>
          <Link className={css.li} href='/'>Home</Link>
          <Link className={css.li} href='/portfolio'>Portfolio</Link>
          <Link className={css.li} href='/assess'>Assess</Link>
        </ul>
      </nav>
      // </div>
    );
}


export { DefaultNavigation, AssessNavigation}