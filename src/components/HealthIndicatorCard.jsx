
export default function HealthIndicatorCard({
  title,
  date,
  progress,
  color,
  icon
}) {
  return (
    <div
      style={{
        background: "#F3F5FA",
        borderRadius: 24,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        minWidth: 220
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 28 }}>{icon}</span>
        <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>{title}</h4>
      </div>

      <span style={{ fontSize: 11, color: "#9ca3af" }}>Date: {date}</span>

      <div
        style={{
          height: 6,
          width: "100%",
          background: "#E2E8F0",
          borderRadius: 6,
          overflow: "hidden"
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            background: color,
            height: "100%"
          }}
        />
      </div>
    </div>
  );
}
