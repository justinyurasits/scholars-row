export function AcousticSchematic() {
  return (
    <div className="residence-schematic">
      <svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
        {/* Wall cross-section: layers of acoustic assembly */}
        <g stroke="#B5895C" strokeWidth="0.8" fill="none" opacity={0.6}>
          {/* Outer drywall — left */}
          <rect x="60" y="20" width="12" height="200" />
          {/* Air gap 1 */}
          <rect x="72" y="20" width="16" height="200" strokeDasharray="2 3" strokeWidth="0.4" />
          {/* Insulation fill */}
          <rect x="88" y="20" width="40" height="200" />
          {/* Structure (stud) */}
          <rect x="128" y="20" width="16" height="200" strokeWidth="1.2" />
          {/* Insulation fill 2 */}
          <rect x="144" y="20" width="40" height="200" />
          {/* Air gap 2 */}
          <rect x="184" y="20" width="16" height="200" strokeDasharray="2 3" strokeWidth="0.4" />
          {/* Outer drywall — right */}
          <rect x="200" y="20" width="12" height="200" />
        </g>

        {/* Insulation hatch pattern */}
        <g stroke="#B5895C" strokeWidth="0.3" opacity={0.25}>
          {/* Left insulation */}
          <line x1="90" y1="30" x2="126" y2="60" />
          <line x1="90" y1="55" x2="126" y2="85" />
          <line x1="90" y1="80" x2="126" y2="110" />
          <line x1="90" y1="105" x2="126" y2="135" />
          <line x1="90" y1="130" x2="126" y2="160" />
          <line x1="90" y1="155" x2="126" y2="185" />
          <line x1="90" y1="180" x2="126" y2="210" />
          {/* Right insulation */}
          <line x1="146" y1="30" x2="182" y2="60" />
          <line x1="146" y1="55" x2="182" y2="85" />
          <line x1="146" y1="80" x2="182" y2="110" />
          <line x1="146" y1="105" x2="182" y2="135" />
          <line x1="146" y1="130" x2="182" y2="160" />
          <line x1="146" y1="155" x2="182" y2="185" />
          <line x1="146" y1="180" x2="182" y2="210" />
        </g>

        {/* Sound wave indicators — left side (blocked) */}
        <g stroke="#B5895C" strokeWidth="0.6" fill="none" opacity={0.5}>
          <path d="M 40 90 Q 32 100, 40 110" />
          <path d="M 34 85 Q 22 100, 34 115" />
          <path d="M 28 80 Q 12 100, 28 120" />
        </g>

        {/* Silence indicator — right side */}
        <g fill="#B5895C" opacity={0.4}>
          <line x1="230" y1="100" x2="250" y2="100" stroke="#B5895C" strokeWidth="0.6" />
        </g>

        {/* Layer labels */}
        <g
          fill="#B5895C"
          opacity={0.85}
          fontFamily="JetBrains Mono, monospace"
          fontSize="6.5"
          letterSpacing="1.2"
        >
          <text x="66" y="238" textAnchor="middle" opacity={0.7}>GYP</text>
          <text x="108" y="238" textAnchor="middle" opacity={0.7}>BATT</text>
          <text x="136" y="238" textAnchor="middle" opacity={0.7}>STUD</text>
          <text x="164" y="238" textAnchor="middle" opacity={0.7}>BATT</text>
          <text x="206" y="238" textAnchor="middle" opacity={0.7}>GYP</text>
        </g>

        {/* STC rating annotation */}
        <g
          fill="#B5895C"
          fontFamily="JetBrains Mono, monospace"
          opacity={0.95}
        >
          <text x="272" y="95" fontSize="9" letterSpacing="2">STC 60+</text>
          <line x1="268" y1="100" x2="320" y2="100" stroke="#B5895C" strokeWidth="0.5" opacity={0.4} />
          <text x="268" y="118" fontSize="7" letterSpacing="1" opacity={0.6}>INAUDIBLE</text>
        </g>

        {/* Dimension line across assembly */}
        <g stroke="#B5895C" strokeWidth="0.4" opacity={0.4}>
          <line x1="60" y1="12" x2="212" y2="12" />
          <line x1="60" y1="8" x2="60" y2="16" />
          <line x1="212" y1="8" x2="212" y2="16" />
        </g>
      </svg>
    </div>
  );
}
