import React from "react";

export default function InitialsLogo({ size = 220 }) {
  const fontSize = size * 0.35; // slightly larger font size

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="BN logo"
      className="drop-shadow-2xl"
    >
      <defs>
        {/* Rich purple gradient */}
        <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        
        {/* Secondary accent gradient */}
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>

        {/* Enhanced shadow filter */}
        <filter id="enhancedShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="15"
            floodColor="#1e1b4b"
            floodOpacity="0.4"
          />
        </filter>

        {/* Glow effect */}
        <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background circle with enhanced shadow */}
      <g filter="url(#enhancedShadow)">
        <circle cx="100" cy="100" r="88" fill="url(#mainGradient)" />
      </g>

      {/* Inner accent ring */}
      <circle
        cx="100"
        cy="100"
        r="78"
        fill="none"
        stroke="url(#accentGradient)"
        strokeWidth="2"
        opacity="0.8"
      />

      {/* Outer glow ring */}
      <circle
        cx="100"
        cy="100"
        r="88"
        fill="none"
        stroke="url(#mainGradient)"
        strokeWidth="1.5"
        filter="url(#glow)"
        opacity="0.6"
      />

      {/* Initials text with better positioning */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
        fontWeight="900"
        fontSize={fontSize}
        fill="#ffffff"
        style={{
          letterSpacing: "-1px",
          textShadow: "0 2px 8px rgba(0,0,0,0.4)"
        }}
      >
        BN
      </text>

      {/* Decorative elements */}
      <circle cx="70" cy="70" r="3" fill="url(#accentGradient)" opacity="0.7" />
      <circle cx="130" cy="130" r="2.5" fill="url(#accentGradient)" opacity="0.6" />
      <circle cx="130" cy="70" r="2" fill="url(#accentGradient)" opacity="0.5" />
      <circle cx="70" cy="130" r="2.5" fill="url(#accentGradient)" opacity="0.6" />
    </svg>
  );
}
