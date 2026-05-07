export function FloorPlanSchematic() {
  return (
    <div className="residence-schematic">
      <svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#B5895C" strokeWidth="0.8" fill="none" opacity={0.6}>
          {/* Outer walls */}
          <rect x="10" y="10" width="360" height="160" />
          {/* Interior partitions */}
          <line x1="220" y1="10" x2="220" y2="100" />
          <line x1="220" y1="100" x2="370" y2="100" />
          <line x1="130" y1="100" x2="220" y2="100" />
          <line x1="130" y1="10" x2="130" y2="100" />
          {/* Door swings */}
          <path d="M 130 60 A 20 20 0 0 1 150 80" />
          <path d="M 220 60 A 20 20 0 0 0 200 80" />
          {/* Windows */}
          <line x1="40" y1="10" x2="100" y2="10" strokeWidth="2" />
          <line x1="280" y1="10" x2="340" y2="10" strokeWidth="2" />
          <line x1="40" y1="170" x2="120" y2="170" strokeWidth="2" />
          <line x1="280" y1="170" x2="340" y2="170" strokeWidth="2" />
        </g>
        <g
          fill="#B5895C"
          opacity={0.85}
          fontFamily="JetBrains Mono, monospace"
          fontSize="8"
          letterSpacing="1.5"
        >
          <text x="55" y="55" opacity={0.7}>LIVING</text>
          <text x="155" y="55" opacity={0.7}>KITCHEN</text>
          <text x="270" y="55" opacity={0.7}>BEDROOM</text>
          <text x="55" y="140" opacity={0.7}>DESK</text>
          <text x="160" y="140" opacity={0.7}>BATH</text>
          <text x="270" y="140" opacity={0.7}>CLOSET</text>
        </g>
      </svg>
    </div>
  );
}
