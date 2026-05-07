import { RevealOnScroll } from "./RevealOnScroll";
import { AirQualitySchematic } from "./AirQualitySchematic";

export function HealthyByStandard() {
  return (
    <section className="section" style={{ background: "var(--ink)", color: "var(--white)" }}>
      <div className="container">
        <RevealOnScroll>
          <div className="eyebrow on-ink" style={{ marginBottom: "var(--space-3)" }}>
            &sect; 05 &mdash; Healthy by standard
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className="section-headline on-ink" style={{ marginBottom: "var(--space-5)" }}>
            Building performance, not{" "}
            <em>luxury amenity.</em>
          </h2>
        </RevealOnScroll>

        <div className="split-grid">
          <RevealOnScroll className="split-prose">
            <p className="split-body on-ink">
              The air in a Scholar&#8217;s Row residence passes through
              MERV-13 filtration &mdash; the same standard used in hospital
              outpatient facilities. Not because we think you&#8217;re
              fragile, but because the quality of the air you breathe while
              you work is a building performance specification, not a luxury
              amenity.
            </p>
            <p className="split-body on-ink">
              Every habitable room receives natural daylight. Windows in
              living spaces are operable. Materials are specified
              low-VOC and formaldehyde-free, because the interior
              environment of a residence where someone spends twelve hours
              a day should meet the same standard as the lab or clinic
              where they spend the other twelve.
            </p>

            <div className="residence-specs" style={{ marginTop: "var(--space-4)" }}>
              <div className="residence-spec-row">
                <span className="residence-spec-label">Filtration</span>
                <span className="residence-spec-value">MERV-13</span>
              </div>
              <div className="residence-spec-row">
                <span className="residence-spec-label">Ventilation</span>
                <span className="residence-spec-value">Dedicated outdoor air</span>
              </div>
              <div className="residence-spec-row">
                <span className="residence-spec-label">Materials</span>
                <span className="residence-spec-value">Low-VOC, formaldehyde-free</span>
              </div>
              <div className="residence-spec-row">
                <span className="residence-spec-label">Daylight</span>
                <span className="residence-spec-value">Every habitable room</span>
              </div>
              <div className="residence-spec-row">
                <span className="residence-spec-label">Windows</span>
                <span className="residence-spec-value">Operable in living spaces</span>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <AirQualitySchematic />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
