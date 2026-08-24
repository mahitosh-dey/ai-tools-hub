export default function HeroIllustration() {
  const lx = [68, 188, 308, 420];
  const l0y = [50, 120, 196, 266];
  const l1y = [50, 120, 196, 266];
  const l2y = [80, 170, 260];
  const l3y = [130, 210];

  return (
    <svg
      viewBox="0 0 496 330"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="hi-bg1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hi-bg2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hi-active" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>

      {/* Ambient background glows */}
      <ellipse cx="248" cy="165" rx="210" ry="155" fill="url(#hi-bg1)" />
      <ellipse cx="380" cy="170" rx="110" ry="95" fill="url(#hi-bg2)" />

      {/* ── Background connections L0 → L1 ── */}
      {l0y.map((y0, i) =>
        l1y.map((y1, j) => (
          <line
            key={`c01-${i}-${j}`}
            x1={lx[0]} y1={y0}
            x2={lx[1]} y2={y1}
            stroke="#a855f7"
            strokeOpacity={Math.abs(i - j) <= 1 ? 0.13 : 0.06}
            strokeWidth="1"
          />
        ))
      )}

      {/* ── Background connections L1 → L2 ── */}
      {l1y.map((y1, i) =>
        l2y.map((y2, j) => (
          <line
            key={`c12-${i}-${j}`}
            x1={lx[1]} y1={y1}
            x2={lx[2]} y2={y2}
            stroke="#7c3aed"
            strokeOpacity="0.09"
            strokeWidth="1"
          />
        ))
      )}

      {/* ── Background connections L2 → L3 ── */}
      {l2y.map((y2, i) =>
        l3y.map((y3, j) => (
          <line
            key={`c23-${i}-${j}`}
            x1={lx[2]} y1={y2}
            x2={lx[3]} y2={y3}
            stroke="#22d3ee"
            strokeOpacity="0.1"
            strokeWidth="1"
          />
        ))
      )}

      {/* ── Active path: L0[2]→L1[1]→L2[1]→L3[0] ── */}
      <line x1={lx[0]} y1={l0y[2]} x2={lx[1]} y2={l1y[1]} stroke="url(#hi-active)" strokeOpacity="0.65" strokeWidth="1.5" />
      <line x1={lx[1]} y1={l1y[1]} x2={lx[2]} y2={l2y[1]} stroke="url(#hi-active)" strokeOpacity="0.65" strokeWidth="1.5" />
      <line x1={lx[2]} y1={l2y[1]} x2={lx[3]} y2={l3y[0]} stroke="url(#hi-active)" strokeOpacity="0.65" strokeWidth="1.5" />

      {/* ── Secondary dashed path: L0[0]→L1[3]→L2[2]→L3[1] ── */}
      <line x1={lx[0]} y1={l0y[0]} x2={lx[1]} y2={l1y[3]} stroke="#a855f7" strokeOpacity="0.22" strokeWidth="1" strokeDasharray="4 3" />
      <line x1={lx[1]} y1={l1y[3]} x2={lx[2]} y2={l2y[2]} stroke="#7c3aed" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="4 3" />
      <line x1={lx[2]} y1={l2y[2]} x2={lx[3]} y2={l3y[1]} stroke="#22d3ee" strokeOpacity="0.22" strokeWidth="1" strokeDasharray="4 3" />

      {/* ── L0 nodes (input, purple) ── */}
      {l0y.map((y, i) => (
        <g key={`n0-${i}`}>
          <circle cx={lx[0]} cy={y} r="14" fill="#a855f7" fillOpacity="0.07" />
          <circle cx={lx[0]} cy={y} r="6.5" stroke="#a855f7" strokeWidth="1.5" strokeOpacity="0.45" fill="#0d0d14" />
          <circle cx={lx[0]} cy={y} r="3" fill="#a855f7">
            <animate attributeName="opacity" values="0.85;1;0.85" dur={`${2.4 + i * 0.35}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* ── L1 nodes ── */}
      {l1y.map((y, i) => (
        <g key={`n1-${i}`}>
          <circle cx={lx[1]} cy={y} r="14" fill="#a855f7" fillOpacity={i === 1 ? 0.12 : 0.05} />
          <circle cx={lx[1]} cy={y} r="6.5" stroke="#a855f7" strokeWidth="1.5" strokeOpacity={i === 1 ? 0.75 : 0.3} fill="#0d0d14" />
          <circle cx={lx[1]} cy={y} r={i === 1 ? 3.5 : 2.8} fill="#a855f7" fillOpacity={i === 1 ? 1 : 0.65}>
            <animate attributeName="opacity" values={i === 1 ? "1;0.75;1" : "0.65;0.9;0.65"} dur={`${2.7 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* ── L2 nodes ── */}
      {l2y.map((y, i) => (
        <g key={`n2-${i}`}>
          <circle cx={lx[2]} cy={y} r="16" fill={i === 1 ? "#a855f7" : "#6d28d9"} fillOpacity={i === 1 ? 0.1 : 0.05} />
          <circle cx={lx[2]} cy={y} r="7.5" stroke={i === 1 ? "#a855f7" : "#7c3aed"} strokeWidth="1.5" strokeOpacity={i === 1 ? 0.7 : 0.32} fill="#0d0d14" />
          <circle cx={lx[2]} cy={y} r={i === 1 ? 4 : 3.2} fill={i === 1 ? "#c084fc" : "#a855f7"} fillOpacity={i === 1 ? 1 : 0.65}>
            <animate attributeName="r" values={i === 1 ? "4;5.2;4" : "3.2;3.9;3.2"} dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* ── L3 nodes (output, cyan) ── */}
      {l3y.map((y, i) => (
        <g key={`n3-${i}`}>
          <circle cx={lx[3]} cy={y} r="22" fill="#22d3ee" fillOpacity="0.07" />
          <circle cx={lx[3]} cy={y} r="10" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.65" fill="#0d0d14" />
          <circle cx={lx[3]} cy={y} r="4.5" fill="#22d3ee">
            <animate attributeName="r" values="4.5;6;4.5" dur={`${2.6 + i * 0.7}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;1;0.9" dur={`${2.6 + i * 0.7}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* ── Score badges beside output nodes ── */}
      <rect x="450" y="121" width="40" height="18" rx="3" fill="#0d0d14" stroke="#22d3ee" strokeWidth="0.75" strokeOpacity="0.55" />
      <text x="470" y="134" fill="#67e8f9" fontSize="9.5" textAnchor="middle" fontFamily="monospace" fontWeight="600">9/10</text>

      <rect x="450" y="201" width="40" height="18" rx="3" fill="#0d0d14" stroke="#22d3ee" strokeWidth="0.75" strokeOpacity="0.45" />
      <text x="470" y="214" fill="#67e8f9" fontSize="9.5" textAnchor="middle" fontFamily="monospace" fontWeight="600">8/10</text>

      {/* ── Floating AI tool chip labels (top) ── */}
      <rect x="148" y="10" width="64" height="20" rx="4" fill="#13131e" stroke="#a855f7" strokeWidth="0.75" strokeOpacity="0.55" />
      <text x="180" y="24" fill="#c084fc" fontSize="9.5" textAnchor="middle" fontFamily="monospace" fontWeight="500">ChatGPT</text>

      <rect x="252" y="14" width="58" height="20" rx="4" fill="#13131e" stroke="#a855f7" strokeWidth="0.75" strokeOpacity="0.45" />
      <text x="281" y="28" fill="#c084fc" fontSize="9.5" textAnchor="middle" fontFamily="monospace" fontWeight="500">Claude</text>

      {/* ── Floating AI tool chip labels (bottom) ── */}
      <rect x="128" y="292" width="78" height="20" rx="4" fill="#13131e" stroke="#7c3aed" strokeWidth="0.75" strokeOpacity="0.45" />
      <text x="167" y="306" fill="#a78bfa" fontSize="9.5" textAnchor="middle" fontFamily="monospace" fontWeight="500">Midjourney</text>

      <rect x="250" y="292" width="64" height="20" rx="4" fill="#13131e" stroke="#22d3ee" strokeWidth="0.75" strokeOpacity="0.5" />
      <text x="282" y="306" fill="#67e8f9" fontSize="9.5" textAnchor="middle" fontFamily="monospace" fontWeight="500">Gemini</text>

      {/* ── Subtle corner accent dots ── */}
      <circle cx="32" cy="165" r="2" fill="#a855f7" fillOpacity="0.25" />
      <circle cx="130" cy="42" r="1.5" fill="#a855f7" fillOpacity="0.3" />
      <circle cx="358" cy="295" r="1.5" fill="#22d3ee" fillOpacity="0.28" />
      <circle cx="462" cy="52" r="2" fill="#22d3ee" fillOpacity="0.2" />
    </svg>
  );
}
