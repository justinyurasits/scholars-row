import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-name">Scholar&#8217;s Row</div>
            <p className="footer-brand-tagline">
              Boutique academic housing for graduate scholars. Pre-operational.
              Building toward the first opening in Santa Clara, 2027.
            </p>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Locations</div>
            <ul>
              <li>
                <Link href="/locations/santa-clara">Santa Clara</Link>
              </li>
              <li>
                <Link href="/locations/berkeley">Berkeley</Link>
              </li>
              <li>
                <Link href="/locations/worcester">Worcester</Link>
              </li>
              <li>
                <Link href="/locations/evanston">Evanston</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Living Here</div>
            <ul>
              <li>
                <Link href="/living-here">The experience</Link>
              </li>
              <li>
                <Link href="/living-here#residence">Inside a residence</Link>
              </li>
              <li>
                <Link href="/living-here#quiet">Quiet by design</Link>
              </li>
              <li>
                <Link href="/living-here#day">A day at the Row</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">About</div>
            <ul>
              <li>
                <Link href="/about">What we do</Link>
              </li>
              <li>
                <Link href="/about#site-selection">Site selection</Link>
              </li>
              <li>
                <Link href="/about/insights">Insights</Link>
              </li>
              <li>
                <Link href="/about#press">Press</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Team</div>
            <ul>
              <li>
                <Link href="/team">Who we are</Link>
              </li>
              <li>
                <Link href="/team/partners">Partners</Link>
              </li>
              <li>
                <Link href="/team#careers">Careers</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">
            &copy; 2026 Scholar&#8217;s Row Group, LLC
          </span>
          <div className="footer-legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
