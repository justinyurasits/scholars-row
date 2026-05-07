export function AirQualitySchematic() {
  return (
    <div className="residence-schematic">
      <svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
        {/* Room cross-section — simplified */}
        <g stroke="#B5895C" strokeWidth="0.8" fill="none" opacity={0.6}>
          {/* Floor */}
          <line x1="30" y1="200" x2="330" y2="200" />
          {/* Left wall */}
          <line x1="30" y1="40" x2="30" y2="200" />
          {/* Ceiling */}
          <line x1="30" y1="40" x2="330" y2="40" />
          {/* Right wall */}
          <line x1="330" y1="40" x2="330" y2="200" />

          {/* Window opening */}
          <rect x="220" y="60" width="50" height="90" strokeWidth="1" />
          {/* Window mullion */}
          <line x1="245" y1="60" x2="245" y2="150" strokeWidth="0.5" />
          {/* Window sill */}
          <line x1="215" y1="150" x2="275" y2="150" strokeWidth="1.2" />
        </g>

        {/* Daylight rays through window */}
        <g stroke="#B5895C" strokeWidth="0.4" opacity={0.25}>
          <line x1="270" y1="60" x2="180" y2="170" />
          <line x1="270" y1="75" x2="160" y2="180" />
          <line x1="270" y1="90" x2="140" y2="190" />
          <line x1="270" y1="105" x2="120" y2="200" />
          <line x1="255" y1="60" x2="200" y2="155" />
        </g>

        {/* MERV-13 filter unit — ceiling mounted */}
        <g stroke="#B5895C" strokeWidth="0.8" fill="none" opacity={0.6}>
          <rect x="80" y="40" width="60" height="18" />
          {/* Filter media lines */}
          <line x1="88" y1="44" x2="88" y2="54" strokeWidth="0.4" />
          <line x1="94" y1="44" x2="94" y2="54" strokeWidth="0.4" />
          <line x1="100" y1="44" x2="100" y2="54" strokeWidth="0.4" />
          <line x1="106" y1="44" x2="106" y2="54" strokeWidth="0.4" />
          <line x1="112" y1="44" x2="112" y2="54" strokeWidth="0.4" />
          <line x1="118" y1="44" x2="118" y2="54" strokeWidth="0.4" />
          <line x1="124" y1="44" x2="124" y2="54" strokeWidth="0.4" />
          <line x1="130" y1="44" x2="130" y2="54" strokeWidth="0.4" />
        </g>

        {/* Airflow path — filtered air descending */}
        <g stroke="#B5895C" strokeWidth="0.6" fill="none" opacity={0.4}>
          <path d="M 100 58 L 100 80 Q 100 95, 110 100 L 140 100 Q 155 100, 155 115 L 155 140" strokeDasharray="4 3" />
          <path d="M 120 58 L 120 75 Q 120 88, 130 92 L 160 92 Q 175 92, 175 107 L 175 135" strokeDasharray="4 3" />
          {/* Flow arrows */}
          <polygon points="155,140 152,134 158,134" fill="#B5895C" stroke="none" />
          <polygon points="175,135 172,129 178,129" fill="#B5895C" stroke="none" />
        </g>

        {/* Labels */}
        <g
          fill="#B5895C"
          opacity={0.85}
          fontFamily="JetBrains Mono, monospace"
          fontSize="7"
          letterSpacing="1.2"
        >
          <text x="110" y="35" textAnchor="middle" opacity={0.7}>MERV-13</text>
          <text x="245" y="170" textAnchor="middle" opacity={0.7}>DAYLIGHT</text>
        </g>

        {/* Sill height annotation */}
        <g stroke="#B5895C" strokeWidth="0.4" opacity={0.4}>
          <line x1="285" y1="150" x2="285" y2="200" />
          <line x1="281" y1="150" x2="289" y2="150" />
          <line x1="281" y1="200" x2="289" y2="200" />
        </g>
        <text
          x="295"
          y="180"
          fill="#B5895C"
          fontFamily="JetBrains Mono, monospace"
          fontSize="6.5"
          letterSpacing="1"
          opacity={0.7}
        >
          SILL
        </text>

        {/* Desk silhouette — occupant workspace */}
        <g stroke="#B5895C" strokeWidth="0.5" fill="none" opacity={0.3}>
          <rect x="130" y="175" width="60" height="25" />
        </g>
      </svg>
    </div>
  );
}
