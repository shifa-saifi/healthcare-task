const DATA = [
  [40, 60, 35],
  [80, 55, 25],
  [50, 40, 28],
  [65, 45, 20],
  [30, 70, 50],
  [40, 55, 25],
  [50, 30, 15]
];

const COLORS = ["#00c39a", "#1C2DBB", "#8392FF"]; 

export default function ActivitySection() {
  return (
    <div
      style={{
        background: "#F3F5FA",
        borderRadius: 24,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 24
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end"
        }}
      >
        <h4 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Activity</h4>
        <span style={{ fontSize: 12, color: "#64748b" }}>
          3 appointment on this week
        </span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          height: 140
        }}
      >
        {DATA.map((day, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              gap: 4
            }}
          >
            {day.map((h, i) => (
              <div
                key={i}
                style={{
                  width: 12,
                  height: h,
                  background: COLORS[i],
                  borderRadius: 4
                }}
              />
            ))}
            <span
              style={{
                fontSize: 11,
                color: "#64748b",
                marginTop: 4,
                textAlign: "center"
              }}
            >
              {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"][idx]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
