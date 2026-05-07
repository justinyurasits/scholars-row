import { RevealOnScroll } from "./RevealOnScroll";

export function LivingHereCTA() {
  return (
    <section className="section section-simple-cta">
      <div className="container-narrow">
        <RevealOnScroll>
          <div className="eyebrow" style={{ marginBottom: "var(--space-3)" }}>
            &sect; 09 &mdash; Get in touch
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className="section-headline" style={{ marginBottom: "var(--space-3)" }}>
            Join the{" "}
            <em>waitlist.</em>
          </h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <p style={{
            fontFamily: "var(--sans)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            color: "var(--slate)",
            fontWeight: 300,
            maxWidth: 640,
            marginBottom: "var(--space-4)",
          }}>
            Tell us your program, university, and anticipated start year.
            We&#8217;ll keep you informed as communities open &mdash;
            starting with Santa Clara in 2027.
          </p>
        </RevealOnScroll>
        <RevealOnScroll>
          <a
            href="mailto:waitlist@scholarsrowgroup.com?subject=Waitlist%20inquiry&body=Program%3A%0AUniversity%3A%0AAnticipated%20start%20year%3A"
            className="btn-ink"
          >
            Join the waitlist &rarr;
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
