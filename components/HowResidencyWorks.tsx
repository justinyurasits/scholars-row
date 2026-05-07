import { RevealOnScroll } from "./RevealOnScroll";

export function HowResidencyWorks() {
  return (
    <section className="section" style={{ background: "var(--field)" }}>
      <div className="container-narrow">
        <RevealOnScroll>
          <div className="eyebrow" style={{ marginBottom: "var(--space-3)" }}>
            &sect; 08 &mdash; How residency works
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className="section-headline" style={{ marginBottom: "var(--space-4)" }}>
            Three steps.{" "}
            <em>No complexity.</em>
          </h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <p style={{
            fontFamily: "var(--sans)",
            fontSize: "1rem",
            lineHeight: 1.7,
            color: "var(--slate)",
            fontWeight: 300,
            maxWidth: 640,
            marginBottom: "var(--space-5)",
          }}>
            Scholar&#8217;s Row is pre-operational. The first community opens
            in Santa Clara in 2027. Here is how the process will work.
          </p>
        </RevealOnScroll>

        <div className="process-grid">
          <RevealOnScroll>
            <div className="process-step">
              <span className="process-num">01</span>
              <h3 className="process-title">Join the waitlist</h3>
              <p className="process-body">
                Tell us your program, university, and anticipated start year.
                No commitment, no fee.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="process-step">
              <span className="process-num">02</span>
              <h3 className="process-title">Application</h3>
              <p className="process-body">
                When a community near you approaches opening, we&#8217;ll
                reach out. Standard application: income verification, program
                enrollment, references.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="process-step">
              <span className="process-num">03</span>
              <h3 className="process-title">Lease</h3>
              {/* TODO: confirm specific lease terms — length, renewal options, restrictions */}
              <p className="process-body">
                Standard residential lease terms. Details will be published
                as communities approach opening.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
