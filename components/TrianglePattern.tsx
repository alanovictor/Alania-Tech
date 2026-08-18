export function TrianglePattern({ className = "" }: { className?: string }) {
  // isometric triangle grid, echoes the logo mark — used as ambient texture
  const tris: { x: number; y: number; s: number }[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 5; col++) {
      tris.push({ x: col * 34 - (row % 2) * 17, y: row * 30, s: 34 });
    }
  }
  return (
    <svg
      viewBox="0 0 170 120"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {tris.map((t, i) => (
        <path
          key={i}
          d={`M${t.x + t.s / 2} ${t.y} L${t.x + t.s} ${t.y + t.s * 0.86} L${t.x} ${
            t.y + t.s * 0.86
          } Z`}
          fill="none"
          stroke="#4fd7f5"
          strokeOpacity="0.25"
          strokeWidth="0.6"
        />
      ))}
    </svg>
  );
}
