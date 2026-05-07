import Link from "next/link";
import { RevealOnScroll } from "./RevealOnScroll";
import type { Location } from "@/lib/types";

interface HomepageLocationsProps {
  locations: Location[];
}

export function HomepageLocations({ locations }: HomepageLocationsProps) {
  return (
    <section className="section section-locations" id="locations">
      <div className="container">
        <div className="locations-header">
          <div>
            <RevealOnScroll className="section-meta">
              <span className="section-meta-label">
                &sect; 03 &mdash; Find your campus
              </span>
            </RevealOnScroll>
            <RevealOnScroll>
              <h2 className="section-headline">
                Four boutique communities,{" "}
                <em>each at a serious university.</em>
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll>
            <p className="locations-intro">
              Every Scholar&#8217;s Row site is selected for graduate density,
              walkability, and persistent housing demand. The flagship opens in
              Santa Clara in 2027.
            </p>
          </RevealOnScroll>
        </div>

        <div className="locations-grid">
          {locations.map((loc) => (
            <LocationCard key={loc.slug} location={loc} />
          ))}
        </div>

        <RevealOnScroll className="locations-footer">
          <span className="locations-footer-note">
            More markets under evaluation &middot; 2026 onward
          </span>
          <Link href="/locations" className="text-link">
            View all locations
            <span className="arrow">&rarr;</span>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function LocationCard({ location }: { location: Location }) {
  const isFlagship = location.flagship;

  return (
    <RevealOnScroll
      as="div"
      className={`location-card${isFlagship ? " flagship" : ""}`}
    >
      <Link
        href={`/locations/${location.slug}`}
        aria-label={`${location.name}, ${location.state} — ${location.status}`}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      />
      <div className="location-marker">
        <span className="location-tag">
          {isFlagship ? "\u2605 Flagship community" : "Community"}
        </span>
        <span className="location-status">{location.status}</span>
      </div>
      <h3 className="location-name">
        {location.name},{" "}
        <span className="location-state">{location.state}</span>
      </h3>
      <p className="location-anchors">{location.thesis.trim()}</p>
      <div className="location-spec-row">
        {location.units && (
          <div className="location-spec">
            <span className="location-spec-label">Units</span>
            <span className="location-spec-value">{location.units}</span>
          </div>
        )}
        {location.walk_minutes && (
          <div className="location-spec">
            <span className="location-spec-label">Walk to anchor</span>
            <span className="location-spec-value">
              ~ {location.walk_minutes} min
            </span>
          </div>
        )}
        {location.opening_year && (
          <div className="location-spec">
            <span className="location-spec-label">Opening</span>
            <span className="location-spec-value">
              {location.opening_year}
            </span>
          </div>
        )}
        {location.stage && (
          <div className="location-spec">
            <span className="location-spec-label">Stage</span>
            <span className="location-spec-value">{location.stage}</span>
          </div>
        )}
        {location.anchor_label && (
          <div className="location-spec">
            <span className="location-spec-label">Anchor</span>
            <span className="location-spec-value">
              {location.anchor_label}
            </span>
          </div>
        )}
      </div>
      <span className="location-arrow">&nearr;</span>
    </RevealOnScroll>
  );
}
