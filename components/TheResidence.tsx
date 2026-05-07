import Link from "next/link";
import { RevealOnScroll } from "./RevealOnScroll";
import { FloorPlanSchematic } from "./FloorPlanSchematic";
import { WalkDiagram } from "./WalkDiagram";

export function TheResidence() {
  return (
    <section className="section section-residence">
      <div className="container">
        <div className="residence-header">
          <div>
            <RevealOnScroll>
              <div className="eyebrow on-ink" style={{ marginBottom: "1.25rem" }}>
                &sect; 02 &mdash; The residence
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <h2 className="residence-headline">
                Designed inside and out for{" "}
                <em>serious academic life.</em>
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll>
            <p className="residence-intro">
              Every Scholar&#8217;s Row residence is engineered around the
              realities of graduate work &mdash; quiet, daylight, durability,
              and proximity to the place you spend your day. A short tour
              below, and a deeper look on the Living Here page.
            </p>
          </RevealOnScroll>
        </div>

        <div className="residence-grid">
          {/* Left: the unit itself */}
          <RevealOnScroll className="residence-cell">
            <span className="residence-cell-tag">i. Inside the unit</span>
            <h3 className="residence-cell-title">
              A residence built around{" "}
              <em>one person&#8217;s work.</em>
            </h3>
            <p className="residence-cell-body">
              Studio, one-bedroom, and two-bedroom layouts. Each unit is
              designed for a single scholar or a couple &mdash; not for
              splitting four ways. Generous workspace. Real kitchens.
              Storage where you need it. Daylight in every room.
            </p>

            <FloorPlanSchematic />

            <div className="residence-specs">
              <div className="residence-spec-row">
                <span className="residence-spec-label">Layouts</span>
                <span className="residence-spec-value">
                  Studio &middot; 1BR &middot; 2BR
                </span>
              </div>
              <div className="residence-spec-row">
                <span className="residence-spec-label">Sound</span>
                <span className="residence-spec-value">
                  STC 60+ assemblies
                </span>
              </div>
              <div className="residence-spec-row">
                <span className="residence-spec-label">Air</span>
                <span className="residence-spec-value">
                  MERV-13 filtration
                </span>
              </div>
              <div className="residence-spec-row">
                <span className="residence-spec-label">Daylight</span>
                <span className="residence-spec-value">
                  Every habitable room
                </span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: the walk */}
          <RevealOnScroll className="residence-cell">
            <span className="residence-cell-tag">ii. The walk</span>
            <h3 className="residence-cell-title">
              Eleven minutes{" "}
              <em>from your door to your desk.</em>
            </h3>
            <p className="residence-cell-body">
              Every Scholar&#8217;s Row community is sited to be a short walk
              from the labs, libraries, clinics, and lecture halls that anchor
              your work. We don&#8217;t underwrite a project that fails the
              walking test.
            </p>

            <WalkDiagram />

            <div className="residence-specs">
              <div className="residence-spec-row">
                <span className="residence-spec-label">Walk standard</span>
                <span className="residence-spec-value">
                  &le; 12 minutes
                </span>
              </div>
              <div className="residence-spec-row">
                <span className="residence-spec-label">Transit</span>
                <span className="residence-spec-value">Required</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll className="residence-cta-row">
          <Link href="/living-here" className="text-link on-ink">
            See more on Living Here
            <span className="arrow">&rarr;</span>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
