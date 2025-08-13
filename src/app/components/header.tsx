import Link from "next/link";

function Header() {
      return (
            <header className="flex justify-between items-center">
                  <nav className="flex gap-4 text-sm font-mono">
                        <Link href="/"> Home </Link>
                        <Link href="/about"> About </Link>
                        <Link href="/contact"> Contact </Link>
                        <a href="https://portfolio-starter-kit-gules-seven.vercel.app/" target="_blank" rel="noopener noreferrer"> Blog </a>
                        <Link href="/portfolio"> Portfolio </Link>

                  </nav>
            </header>
      )
}

export default Header;

