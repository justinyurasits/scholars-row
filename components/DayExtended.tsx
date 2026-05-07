import { RevealOnScroll } from "./RevealOnScroll";

export function DayExtended() {
  return (
    <section className="section" style={{ background: "var(--field)" }}>
      <div className="container-narrow">
        <RevealOnScroll>
          <div className="eyebrow" style={{ marginBottom: "var(--space-3)" }}>
            &sect; 06 &mdash; A day at Scholar&#8217;s Row
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <h2 className="section-headline" style={{ marginBottom: "var(--space-5)" }}>
            Tomorrow is the same shape.{" "}
            <em>That&#8217;s the point.</em>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="day-passage">
            <span className="day-time">05:47</span>
            <p className="day-text">
              Pre-dawn. The building&#8217;s mechanical systems have been
              running all night. You didn&#8217;t hear them.
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="day-passage">
            <span className="day-time">06:20</span>
            <p className="day-text">
              Coffee at your own counter. Desk by the window. The first hour
              of writing before campus &mdash; the hour that actually moves
              the chapter forward.
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="day-passage">
            <span className="day-time">07:40</span>
            <p className="day-text">
              The walk. Eleven minutes, door to door. You pass the same
              buildings every morning. You stop noticing them. That&#8217;s
              the right kind of commute.
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="day-passage">
            <span className="day-time">10:15</span>
            <p className="day-text">
              Mid-morning. You come back for something you forgot. The door
              closes behind you. No one is in the hallway. No music through
              the walls. The building is doing exactly what it was designed
              to do.
            </p>
          </div>
        </RevealOnScroll>

        {/* TODO: rendering/photo of daily rhythm — morning light, workspace, walk */}
        <RevealOnScroll>
          <div className="image-slot" style={{ height: 240, marginBottom: "var(--space-4)" }}>
            <span className="image-slot-label">
              Image slot &mdash; Daily rhythm
            </span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="day-passage">
            <span className="day-time">13:30</span>
            <p className="day-text">
              Lunch at your own desk. Daylight angled across the room. You
              eat something you cooked in a kitchen that was designed for
              cooking, not for listing photographs.
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="day-passage">
            <span className="day-time">17:00</span>
            <p className="day-text">
              The department empties. You stay another hour. Then the walk
              back &mdash; the same eleven minutes, the same route, the same
              unremarkable return to a place that works.
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="day-passage">
            <span className="day-time">20:45</span>
            <p className="day-text">
              Dinner, reading, the work you do after the work. The walls are
              rated STC 60. Your neighbor is three feet away and entirely
              inaudible. You forget they exist.
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="day-passage">
            <span className="day-time">23:15</span>
            <p className="day-text day-closing">
              You sleep. Tomorrow is the same shape. That&#8217;s the point.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
