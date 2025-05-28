export default function AppointmentCard({
  title,
  time,
  doctor,
  icon,
  bg,
  dark = false
}) {
  const base = {
    flex: 1,
    minWidth: 260,
    borderRadius: 24,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    background: bg,
    color: dark ? "#ffffff" : "#111730"
  };

  return (
    <div style={base}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>{title}</h4>
        <span style={{ fontSize: 24 }}>{icon}</span>
      </div>

      <p style={{ margin: 0, fontSize: 13, fontWeight: 600 }}>{time}</p>
      <p style={{ margin: 0, fontSize: 13 }}>{doctor}</p>
    </div>
  );
}
