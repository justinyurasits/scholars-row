import { RevealOnScroll } from "./RevealOnScroll";
import { WalkDiagram } from "./WalkDiagram";

export function TheWalkDeep() {
  return (
    <section className="section" style={{ background: "var(--field)" }} id="walk">
      <div className="container">
        <RevealOnScroll>
          <div className="eyebrow" style={{ marginBottom: "var(--space-3)" }}>
            &sect; 04 &mdash; The walk
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className="section-headline" style={{ marginBottom: "var(--space-5)" }}>
            Twelve minutes or{" "}
            <em>we don&#8217;t build.</em>
          </h2>
        </RevealOnScroll>

        <div className="split-grid">
          <RevealOnScroll className="split-prose">
            <p className="split-body">
              We don&#8217;t underwrite a project that fails the walking test.
              Twelve minutes, measured door to door, from a Scholar&#8217;s Row
              residence to the primary academic anchor. If the site doesn&#8217;t
              pass, we don&#8217;t build &mdash; regardless of what the land
              costs or how the proforma looks.
            </p>
            <p className="split-body">
              The walk matters because it shapes every other decision a
              resident makes. Whether to come home between classes. Whether
              to cook or eat out. Whether the residence is part of the daily
              rhythm or an inconvenience at the edges of it. A twelve-minute
              walk means the residence stays integrated with the academic day
              rather than separated from it.
            </p>

            {/* TODO: rendering/photo of streetscape or walk path */}
            <div className="image-slot" style={{ height: 240, marginBottom: "var(--space-4)" }}>
              <span className="image-slot-label">
                Image slot &mdash; The walk
              </span>
            </div>

            <div className="specs-on-field">
              <div className="residence-spec-row">
                <span className="residence-spec-label">Walk standard</span>
                <span className="residence-spec-value">&le; 12 minutes</span>
              </div>
              <div className="residence-spec-row">
                <span className="residence-spec-label">Transit</span>
                <span className="residence-spec-value">Required</span>
              </div>
              <div className="residence-spec-row">
                <span className="residence-spec-label">Bike storage</span>
                {/* TODO: confirm bike storage provision — secure room, outdoor racks, or both */}
                <span className="residence-spec-value">Every community</span>
              </div>
              <div className="residence-spec-row">
                <span className="residence-spec-label">Site criterion</span>
                <span className="residence-spec-value">Graduate density + walkability + housing undersupply</span>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <WalkDiagram />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
