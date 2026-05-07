import { RevealOnScroll } from "./RevealOnScroll";

const passages = [
  {
    time: "06:14",
    text: "Coffee in a kitchen designed for one person to move quickly. The building is awake but you can\u2019t hear it.",
  },
  {
    time: "07:23",
    text: (
      <>
        You&#8217;re at the lab &mdash; or the library, or the clinic, or the
        lecture hall. The walk took eleven minutes.{" "}
        <em>It always takes eleven minutes.</em>
      </>
    ),
  },
  {
    time: "13:05",
    text: "Lunch at your own desk. Daylight on the work. Air that someone designed to be breathable, not just permitted.",
  },
  {
    time: "19:48",
    text: "You come home twelve hours later to a building that is quiet because the walls are quiet \u2014 not because nobody is here.",
  },
  {
    time: "23:30",
    text: "You sleep. You do it again tomorrow. The residence is the constant, so the work can be the variable.",
  },
];

export function DayAtScholarsRow() {
  return (
    <section className="section section-day" id="living">
      <div className="container-narrow">
        <RevealOnScroll className="day-header">
          <div className="day-eyebrow eyebrow">
            &sect; 01 &mdash; Lived experience
          </div>
          <h2 className="day-headline">
            A day at Scholar&#8217;s Row,{" "}
            <em>in five quiet moments.</em>
          </h2>
        </RevealOnScroll>

        <div className="day-narrative">
          {passages.map((p) => (
            <RevealOnScroll key={p.time} className="day-passage">
              <span className="day-time">{p.time}</span>
              <p className="day-text">{p.text}</p>
            </RevealOnScroll>
          ))}

          <RevealOnScroll>
            <p className="day-closing">
              This is what Scholar&#8217;s Row is designed for. Nothing more,
              nothing less.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
