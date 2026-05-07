import { RevealOnScroll } from "./RevealOnScroll";
import { AcousticSchematic } from "./AcousticSchematic";

export function QuietByDesign() {
  return (
    <section className="section" style={{ background: "var(--ink)", color: "var(--white)" }}>
      <div className="container">
        <RevealOnScroll>
          <div className="eyebrow on-ink" style={{ marginBottom: "var(--space-3)" }}>
            &sect; 03 &mdash; Quiet by design
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className="section-headline on-ink" style={{ marginBottom: "var(--space-5)" }}>
            The difference between muffled and{" "}
            <em>silent.</em>
          </h2>
        </RevealOnScroll>

        <div className="split-grid">
          <RevealOnScroll className="split-prose">
            <p className="split-body on-ink">
              STC 60 means the neighbor&#8217;s conversation is inaudible.
              Not muffled &mdash; inaudible. Most apartment buildings achieve
              STC 45&#8211;50. Scholar&#8217;s Row specifies assemblies rated
              STC 60 or higher, because the difference between muffled and
              silent is the difference between a residence that tolerates
              focus and one that enables it.
            </p>
            <p className="split-body on-ink">
              Wall assemblies use staggered-stud framing with continuous
              insulation and decoupled gypsum layers. Floor&#8211;ceiling
              assemblies include concrete topping slabs and isolated ceiling
              grids. Mechanical systems are decoupled from the building
              structure so ductwork and equipment vibration never transmit
              to living spaces.
            </p>

            <div className="residence-specs" style={{ marginTop: "var(--space-4)" }}>
              <div className="residence-spec-row">
                <span className="residence-spec-label">Wall assembly</span>
                <span className="residence-spec-value">STC 60+</span>
              </div>
              <div className="residence-spec-row">
                <span className="residence-spec-label">Floor / ceiling</span>
                <span className="residence-spec-value">STC 55+</span>
              </div>
              <div className="residence-spec-row">
                <span className="residence-spec-label">Windows</span>
                <span className="residence-spec-value">STC 35+ minimum</span>
              </div>
              <div className="residence-spec-row">
                <span className="residence-spec-label">Mechanical</span>
                <span className="residence-spec-value">Decoupled from structure</span>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <AcousticSchematic />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
