
import { DAYS } from "../data/calender";
const COL_WIDTH = 72;

export default function CalendarTimeline() {
  return (
    <div style={{ overflowX: "auto" }}>
      <div style={{ display: "flex", gap: 8, minWidth: 7 * COL_WIDTH }}>
        {DAYS.map((d) => (
          <div
            key={d.num}
            style={{
              width: COL_WIDTH,
              textAlign: "center",
              padding: 8,
              borderRadius: 16,
              background: d.active ? "#EEF3FF" : "transparent"
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: 13,
                color: "#68737d",
                marginBottom: 4
              }}
            >
              {d.label}
            </span>
            <span
              style={{
                display: "block",
                fontWeight: 700,
                fontSize: 16,
                color: d.dim ? "#9ca3af" : "#0f172a",
                marginBottom: 12
              }}
            >
              {d.num}
            </span>

            {d.slots.map((t) => (
              <div
                key={t}
                style={{
                  margin: "4px auto",
                  width: "100%",
                  background:
                    d.active && t === "09:00" ? "#0D1B94" : "#E2E8F0",
                  color: d.active && t === "09:00" ? "#ffffff" : "#334155",
                  borderRadius: 10,
                  fontSize: 12,
                  fontWeight: 600,
                  padding: "2px 0"
                }}
              >
                {t}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
