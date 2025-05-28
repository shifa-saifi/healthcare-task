

export default function UpcomingCard({ title, time, icon }) {
  return (
    <div
      style={{
        minWidth: 240,
        flex: 1,
        background: "#D3D9FB",
        borderRadius: 20,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 6,
        color: "#111730"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontWeight: 600 }}>{title}</span>
        <span style={{ fontSize: 20 }}>{icon}</span>
      </div>

      <span style={{ fontSize: 12, fontWeight: 600 }}>{time}</span>
    </div>
  );
}
