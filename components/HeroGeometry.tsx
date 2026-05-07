export function HeroGeometry() {
  return (
    <div className="hero-geometry">
      <svg
        viewBox="0 0 800 1000"
        preserveAspectRatio="xMaxYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineFade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B5895C" stopOpacity={0.6} />
            <stop offset="100%" stopColor="#B5895C" stopOpacity={0} />
          </linearGradient>
        </defs>
        <g stroke="url(#lineFade)" strokeWidth="0.5" fill="none">
          <line x1="100" y1="100" x2="100" y2="900" />
          <line x1="280" y1="50" x2="280" y2="950" />
          <line x1="460" y1="100" x2="460" y2="900" />
          <line x1="640" y1="150" x2="640" y2="850" />
          <line x1="80" y1="200" x2="700" y2="200" />
          <line x1="80" y1="320" x2="700" y2="320" />
          <line x1="80" y1="440" x2="700" y2="440" />
          <line x1="80" y1="560" x2="700" y2="560" />
          <line x1="80" y1="680" x2="700" y2="680" />
          <line x1="80" y1="800" x2="700" y2="800" />
          <rect x="120" y="220" width="140" height="80" strokeWidth="0.4" />
          <rect x="300" y="220" width="140" height="80" strokeWidth="0.4" />
          <rect x="480" y="220" width="140" height="80" strokeWidth="0.4" />
          <rect x="120" y="340" width="140" height="80" strokeWidth="0.4" />
          <rect x="300" y="340" width="140" height="80" strokeWidth="0.4" />
          <rect x="480" y="340" width="140" height="80" strokeWidth="0.4" />
          <rect x="120" y="460" width="140" height="80" strokeWidth="0.4" />
          <rect x="300" y="460" width="140" height="80" strokeWidth="0.4" />
          <rect x="480" y="460" width="140" height="80" strokeWidth="0.4" />
          <rect x="120" y="580" width="140" height="80" strokeWidth="0.4" />
          <rect x="300" y="580" width="140" height="80" strokeWidth="0.4" />
          <rect x="480" y="580" width="140" height="80" strokeWidth="0.4" />
        </g>
        <g fill="#B5895C" opacity={0.35}>
          <rect x="120" y="220" width="140" height="80" />
          <rect x="480" y="340" width="140" height="80" />
          <rect x="300" y="460" width="140" height="80" />
          <rect x="120" y="580" width="140" height="80" />
          <rect x="480" y="580" width="140" height="80" />
        </g>
      </svg>
    </div>
  );
}
