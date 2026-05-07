import Link from "next/link";
import { HeroGeometry } from "./HeroGeometry";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-atmosphere" />
      <HeroGeometry />

      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-eyebrow eyebrow on-ink">
              Boutique academic housing
            </div>
            <h1 className="hero-headline">
              What it&#8217;s like to live where{" "}
              <em>serious work</em> gets done.
            </h1>
            <p className="hero-sub">
              Scholar&#8217;s Row builds boutique residences for graduate
              students, medical residents, and visiting faculty &mdash; within
              walking distance of the universities shaping medicine, law,
              science, and research. Quiet by design.
            </p>
          </div>

          <div className="hero-right">
            <div className="hero-meta">
              <div className="hero-meta-row">
                <span className="hero-meta-label">Flagship</span>
                <span className="hero-meta-value">Santa Clara, CA</span>
              </div>
              <div className="hero-meta-row">
                <span className="hero-meta-label">Status</span>
                <span className="hero-meta-value">In development</span>
              </div>
              <div className="hero-meta-row">
                <span className="hero-meta-label">Opening</span>
                <span className="hero-meta-value">2027</span>
              </div>
              <div className="hero-meta-row">
                <span className="hero-meta-label">Markets</span>
                <span className="hero-meta-value">4 announced</span>
              </div>
            </div>

            <div className="hero-ctas">
              <Link href="/living-here" className="btn btn-primary">
                Step inside a residence
                <span className="arrow">&rarr;</span>
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                For universities &amp; investors
                <span className="arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="rendering-label">
        Concept rendering &middot; Santa Clara, CA &middot; 2027
      </div>
    </section>
  );
}
