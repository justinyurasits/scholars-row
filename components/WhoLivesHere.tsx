import { RevealOnScroll } from "./RevealOnScroll";

export function WhoLivesHere() {
  return (
    <section className="section" style={{ background: "var(--ink)", color: "var(--white)" }}>
      <div className="container-narrow">
        <RevealOnScroll>
          <div className="eyebrow on-ink" style={{ marginBottom: "var(--space-3)" }}>
            &sect; 01 &mdash; Who lives here
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className="section-headline on-ink" style={{ marginBottom: "var(--space-4)" }}>
            Built for people in the middle of{" "}
            <em>serious work.</em>
          </h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <p style={{
            fontFamily: "var(--sans)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            color: "rgba(252, 250, 246, 0.78)",
            fontWeight: 300,
            maxWidth: 640,
            marginBottom: "var(--space-3)",
          }}>
            Scholar&#8217;s Row is built for doctoral candidates, medical
            residents, law students, postdoctoral researchers, and visiting
            faculty. People whose days are shaped by labs, clinics, libraries,
            and lecture halls &mdash; and who need a residence that supports
            that rhythm without competing with it.
          </p>
        </RevealOnScroll>
        <RevealOnScroll>
          <p style={{
            fontFamily: "var(--sans)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            color: "rgba(252, 250, 246, 0.78)",
            fontWeight: 300,
            maxWidth: 640,
          }}>
            Not undergraduates. Not people looking for amenity-driven lifestyle
            housing. The audience is specific because the product is specific:
            quiet, durable, walkable residences designed around the realities
            of graduate-level work.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
