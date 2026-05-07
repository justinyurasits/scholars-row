import Link from "next/link";
import { RevealOnScroll } from "./RevealOnScroll";

const pillars = [
  {
    num: "i. Built for",
    title: "Serious student life",
    body: "Quiet by engineering. Durable by choice. Designed around the realities of graduate work \u2014 long hours, deep focus, the need for community without noise. Amenities chosen for how scholars actually live: a study lounge, a real laundry room, secure entry, package handling, and shared spaces that support a residence rather than dominate it.",
  },
  {
    num: "ii. Located at",
    title: "Walking distance",
    body: "Every Scholar\u2019s Row community sits within a short walk of the labs, libraries, clinics, and lecture halls that define your day. Proximity matters more than amenity packages.",
  },
  {
    num: "iii. Built to",
    title: "Perform under serious use",
    body: "Every community is built to a measurable product standard \u2014 acoustic isolation, indoor air quality, daylight, durability, and high-efficiency mechanical systems. Energy-efficient by design, not by retrofit. The building is meant to perform under serious use, year after year.",
  },
];

export function TheStandard() {
  return (
    <section className="section section-standard" id="about">
      <div className="container">
        <div className="standard-header">
          <div>
            <RevealOnScroll>
              <div
                className="eyebrow on-ink"
                style={{ marginBottom: "1.25rem" }}
              >
                &sect; 04 &mdash; The standard
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <h2 className="standard-headline">
                Three principles that{" "}
                <em>shape every community.</em>
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll>
            <p className="standard-intro">
              Scholar&#8217;s Row isn&#8217;t a leasing brand. It&#8217;s a
              development platform built around three commitments &mdash;
              applied identically whether you&#8217;re in Santa Clara,
              Berkeley, Worcester, or Evanston.
            </p>
          </RevealOnScroll>
        </div>

        <div className="standard-grid">
          {pillars.map((p) => (
            <RevealOnScroll key={p.num} className="standard-cell">
              <span className="standard-num">{p.num}</span>
              <h3 className="standard-title">{p.title}</h3>
              <p className="standard-body">{p.body}</p>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="standard-footer">
          <Link href="/about" className="text-link on-ink">
            How we build
            <span className="arrow">&rarr;</span>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
