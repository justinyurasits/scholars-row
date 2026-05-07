import { RevealOnScroll } from "./RevealOnScroll";
import { FloorPlanSchematic } from "./FloorPlanSchematic";

export function InsideTheResidence() {
  return (
    <section className="section" style={{ background: "var(--field)" }} id="residence">
      <div className="container">
        <RevealOnScroll>
          <div className="eyebrow" style={{ marginBottom: "var(--space-3)" }}>
            &sect; 02 &mdash; Inside the residence
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className="section-headline" style={{ marginBottom: "var(--space-5)" }}>
            Every unit is designed around{" "}
            <em>one person&#8217;s work.</em>
          </h2>
        </RevealOnScroll>

        <div className="split-grid">
          <RevealOnScroll className="split-prose">
            <p className="split-body">
              Studio, one-bedroom, and two-bedroom layouts. Each is designed
              for a single scholar or a couple &mdash; not for splitting four
              ways. Generous dedicated workspace. Real kitchens with full-size
              appliances, not kitchenettes. Storage where you need it.
              Daylight in every habitable room.
            </p>
            <p className="split-body">
              Materials are chosen for durability under years of serious use,
              not for staging photographs. Hard-surface flooring. Solid
              cabinetry. Hardware that works quietly and holds up.
            </p>

            {/* TODO: rendering/photo of residence interior — workspace and kitchen */}
            <div className="image-slot" style={{ height: 240, marginBottom: "var(--space-4)" }}>
              <span className="image-slot-label">
                Image slot &mdash; Residence interior
              </span>
            </div>

            <div className="specs-on-field">
              <div className="residence-spec-row">
                <span className="residence-spec-label">Layouts</span>
                <span className="residence-spec-value">Studio &middot; 1BR &middot; 2BR</span>
              </div>
              <div className="residence-spec-row">
                <span className="residence-spec-label">Workspace</span>
                {/* TODO: confirm whether units are furnished or have built-in workspace zones in unfurnished units */}
                <span className="residence-spec-value">Dedicated in every unit</span>
              </div>
              <div className="residence-spec-row">
                <span className="residence-spec-label">Kitchen</span>
                <span className="residence-spec-value">Full-size appliances</span>
              </div>
              <div className="residence-spec-row">
                <span className="residence-spec-label">Flooring</span>
                <span className="residence-spec-value">Hard surface throughout</span>
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
            <FloorPlanSchematic />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
