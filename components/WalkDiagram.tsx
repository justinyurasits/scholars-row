export function WalkDiagram() {
  return (
    <div className="walk-diagram">
      <svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B5895C" stopOpacity={0.9} />
            <stop offset="100%" stopColor="#B5895C" stopOpacity={0.3} />
          </linearGradient>
        </defs>
        {/* Residence (origin) */}
        <g transform="translate(40, 100)">
          <rect x="-22" y="-16" width="44" height="32" stroke="#B5895C" strokeWidth="1" fill="none" />
          <rect x="-14" y="-8" width="6" height="6" fill="#B5895C" opacity={0.7} />
          <rect x="-2" y="-8" width="6" height="6" fill="#B5895C" opacity={0.4} />
          <rect x="10" y="-8" width="6" height="6" fill="#B5895C" opacity={0.7} />
          <text x="0" y="32" textAnchor="middle" fill="#B5895C" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="1.5" opacity={0.85}>RESIDENCE</text>
        </g>
        {/* Path (dashed walking line) */}
        <path
          d="M 70 100 Q 130 60, 180 100 T 290 100"
          stroke="url(#pathGrad)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          fill="none"
        />
        {/* Walk markers along path */}
        <circle cx="115" cy="82" r="2" fill="#B5895C" opacity={0.7} />
        <circle cx="180" cy="100" r="2" fill="#B5895C" opacity={0.7} />
        <circle cx="245" cy="118" r="2" fill="#B5895C" opacity={0.7} />
        {/* Walk time annotation */}
        <text x="180" y="50" textAnchor="middle" fill="#B5895C" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" opacity={0.95}>~ 11 MIN</text>
        <line x1="160" y1="55" x2="200" y2="55" stroke="#B5895C" strokeWidth="0.5" opacity={0.4} />
        {/* Anchor (destination — university building) */}
        <g transform="translate(320, 100)">
          <rect x="-22" y="-26" width="44" height="52" stroke="#B5895C" strokeWidth="1" fill="none" />
          <line x1="-22" y1="-13" x2="22" y2="-13" stroke="#B5895C" strokeWidth="0.5" />
          <line x1="-22" y1="0" x2="22" y2="0" stroke="#B5895C" strokeWidth="0.5" />
          <line x1="-22" y1="13" x2="22" y2="13" stroke="#B5895C" strokeWidth="0.5" />
          <rect x="-2" y="-26" width="4" height="6" fill="#B5895C" />
          <text x="0" y="42" textAnchor="middle" fill="#B5895C" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="1.5" opacity={0.85}>UNIVERSITY</text>
        </g>
      </svg>
    </div>
  );
}
