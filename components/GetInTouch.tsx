import { RevealOnScroll } from "./RevealOnScroll";

const MAILTO_RESIDENT =
  "mailto:waitlist@scholarsrowgroup.com?subject=Scholar%27s%20Row%20Waitlist%20%E2%80%94%20Future%20Resident&body=Hello%2C%0A%0AI%27d%20like%20to%20join%20the%20Scholar%27s%20Row%20waitlist.%0A%0AName%3A%20%0AProgram%2FUniversity%3A%20%0AAnticipated%20start%20year%3A%20%0ANotes%3A%20%0A%0AThank%20you.";

const MAILTO_UNIVERSITY =
  "mailto:partnerships@scholarsrowgroup.com?subject=Scholar%27s%20Row%20%E2%80%94%20University%20Partnership%20Inquiry&body=Hello%2C%0A%0AI%27d%20like%20to%20discuss%20a%20potential%20partnership%20with%20Scholar%27s%20Row.%0A%0AName%3A%20%0ARole%3A%20%0AInstitution%3A%20%0ANature%20of%20inquiry%3A%20%0A%0AThank%20you.";

const MAILTO_INVESTOR =
  "mailto:investors@scholarsrowgroup.com?subject=Scholar%27s%20Row%20%E2%80%94%20Investor%20Overview%20Request&body=Hello%2C%0A%0AI%27d%20like%20to%20request%20the%20Scholar%27s%20Row%20investor%20overview.%0A%0AName%3A%20%0AFirm%3A%20%0ARole%3A%20%0ANature%20of%20inquiry%3A%20%0A%0AThank%20you.";

export function GetInTouch() {
  return (
    <section className="section-cta" id="contact">
      <div className="container">
        <RevealOnScroll className="cta-header">
          <div className="eyebrow" style={{ marginBottom: "1.25rem" }}>
            &sect; 05 &mdash; Get in touch
          </div>
          <h2 className="cta-headline">
            Three ways to reach us.{" "}
            <em>Pick the one that fits.</em>
          </h2>
          <p className="cta-sub">
            Scholar&#8217;s Row is pre-operational. We&#8217;re talking with
            future residents about what they need, with universities about
            partnership, and with capital partners about the platform.
          </p>
        </RevealOnScroll>

        <div className="cta-routes">
          {/* Resident — visually leads */}
          <RevealOnScroll as="div" className="cta-route lead">
            <a
              href={MAILTO_RESIDENT}
              aria-label="Join the Scholar's Row waitlist as a future resident"
              style={{ position: "absolute", inset: 0, zIndex: 1 }}
            />
            <span className="cta-route-num">i. Future residents</span>
            <h3 className="cta-route-title">
              Join the <em>waitlist.</em>
            </h3>
            <p className="cta-route-body">
              Tell us your program, university, and anticipated start year.
              We&#8217;ll keep you informed as communities open near you
              &mdash; starting with Santa Clara in 2027.
            </p>
            <span className="cta-route-link">
              Join the waitlist
              <span className="arrow">&rarr;</span>
            </span>
          </RevealOnScroll>

          <RevealOnScroll as="div" className="cta-route">
            <a
              href={MAILTO_UNIVERSITY}
              aria-label="Inquire about a university partnership with Scholar's Row"
              style={{ position: "absolute", inset: 0, zIndex: 1 }}
            />
            <span className="cta-route-num">ii. Universities</span>
            <h3 className="cta-route-title">
              Partnership <em>conversations.</em>
            </h3>
            <p className="cta-route-body">
              We work with housing offices, deans, and graduate programs to
              align on demand and sites. No institutional capital required.
            </p>
            <span className="cta-route-link">
              Schedule a call
              <span className="arrow">&rarr;</span>
            </span>
          </RevealOnScroll>

          <RevealOnScroll as="div" className="cta-route">
            <a
              href={MAILTO_INVESTOR}
              aria-label="Request the Scholar's Row investor overview"
              style={{ position: "absolute", inset: 0, zIndex: 1 }}
            />
            <span className="cta-route-num">iii. Investors</span>
            <h3 className="cta-route-title">
              Platform <em>overview.</em>
            </h3>
            <p className="cta-route-body">
              Our thesis, target project profile, governance, and the markets
              we&#8217;ve underwritten. Sent on request.
            </p>
            <span className="cta-route-link">
              Request overview
              <span className="arrow">&rarr;</span>
            </span>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
