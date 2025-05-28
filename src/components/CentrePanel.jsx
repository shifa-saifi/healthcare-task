import SearchHeader from "./SearchHeader";
import AnatomySection from "./AnatomySection";
import HealthIndicatorCard from "./HealthIndicatorCard";
import ActivitySection from "./ActivitySection";

export default function CentrePanel() {
  return (
    <section
      style={{
        flex: 1,
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 32,
        background: "#FFFFFF"
      }}
    >
      <SearchHeader />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h2 style={{ margin: 0, fontSize: 26, fontWeight: 700 }}>Dashboard</h2>

        <button
          style={{
            background: "transparent",
            border: "none",
            fontWeight: 600,
            fontSize: 14,
            color: "#64748b",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 4
          }}
        >
          This Week ▼
        </button>
      </div>

      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        <AnatomySection />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            flex: "0 0 220px",
            position: "relative"
          }}
        >
          <HealthIndicatorCard
            title="Lungs"
            date="26 Okt 2021"
            progress={80}
            color="#C0392B"
            icon="🫁"
          />
          <HealthIndicatorCard
            title="Teeth"
            date="26 Okt 2021"
            progress={95}
            color="#1ABC9C"
            icon="🦷"
          />
          <HealthIndicatorCard
            title="Bone"
            date="26 Okt 2021"
            progress={60}
            color="#E74C3C"
            icon="🦴"
          />
          <span
            style={{
              position: "absolute",
              right: -20,
              top: "70%",
              transform: "translateY(-50%)",
              color: "#64748b",
              opacity: 0.5,
              whiteSpace: "nowrap",
              fontSize: 14,
              pointerEvents: "none"
            }}
          >
            Details
          </span>
        </div>
      </div>

      <ActivitySection />
    </section>
  );
}
