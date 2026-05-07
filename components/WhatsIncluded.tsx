import { RevealOnScroll } from "./RevealOnScroll";

export function WhatsIncluded() {
  return (
    <section className="section" style={{ background: "var(--ink)", color: "var(--white)" }}>
      <div className="container">
        <RevealOnScroll>
          <div className="eyebrow on-ink" style={{ marginBottom: "var(--space-3)" }}>
            &sect; 07 &mdash; What&#8217;s included
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className="section-headline on-ink" style={{ marginBottom: "var(--space-5)" }}>
            Chosen for how scholars{" "}
            <em>actually live.</em>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="included-grid">
            <div className="included-col">
              <div className="included-col-title">Included</div>
              <div className="included-list">
                <div className="included-item">
                  {/* TODO: confirm whether units are furnished with workspace or have built-in workspace zones */}
                  <span>Dedicated workspace in every unit</span>
                </div>
                <div className="included-item">
                  <span>Full kitchen &mdash; not a kitchenette</span>
                </div>
                <div className="included-item">
                  <span>In-unit washer / dryer or dedicated laundry room</span>
                </div>
                <div className="included-item">
                  <span>Secure building entry</span>
                </div>
                <div className="included-item">
                  <span>Package handling</span>
                </div>
                <div className="included-item">
                  {/* TODO: confirm bike storage provision — secure room, outdoor racks, or both */}
                  <span>Bike storage</span>
                </div>
                <div className="included-item">
                  <span>Study lounge</span>
                </div>
                <div className="included-item">
                  {/* TODO: confirm internet provision — included in lease, building-wide, or resident-arranged */}
                  <span>High-speed internet infrastructure</span>
                </div>
                <div className="included-item">
                  <span>HVAC in every unit</span>
                </div>
                <div className="included-item">
                  <span>Operable windows</span>
                </div>
              </div>
            </div>

            <div className="included-col">
              <div className="included-col-title">Deliberately omitted</div>
              <div className="included-list">
                <div className="included-item">
                  <span>Gym or fitness center</span>
                </div>
                <div className="included-item">
                  <span>Pool</span>
                </div>
                <div className="included-item">
                  <span>Co-working lounge with espresso bar</span>
                </div>
                <div className="included-item">
                  <span>Concierge</span>
                </div>
                <div className="included-item">
                  <span>Rooftop deck</span>
                </div>
                <div className="included-item">
                  <span>Dog park</span>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <p style={{
            fontFamily: "var(--sans)",
            fontSize: "0.92rem",
            lineHeight: 1.7,
            color: "var(--slate-soft)",
            fontWeight: 300,
            maxWidth: 640,
            marginTop: "var(--space-4)",
          }}>
            Amenities are chosen for how scholars actually live, not for
            marketing photography. Every inclusion earns its place by
            supporting the daily rhythm of academic work.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
