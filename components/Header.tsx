"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Header() {
  const pathname = usePathname();
  const transparentOverHero = pathname === "/";
  const [scrolled, setScrolled] = useState(!transparentOverHero);

  useEffect(() => {
    if (!transparentOverHero) {
      setScrolled(true);
      return;
    }

    const onScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentOverHero]);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="logo">
            Scholar&#8217;s Row
            <span className="logo-mark">SR</span>
          </Link>
          <nav>
            <ul>
              <li>
                <Link href="/locations">Locations</Link>
              </li>
              <li>
                <Link href="/living-here">Living Here</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
