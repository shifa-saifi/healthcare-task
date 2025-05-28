export default function AnatomySection() {
  return (
    <div
      style={{
        flex: "1 1 300px",
        background: "#F3F5FA",
        borderRadius: 24,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 24
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 18,
          right: 18,
          fontSize: 18,
          cursor: "pointer"
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="9" cy="9" r="7" stroke="#1C2DBB" strokeWidth="2"/>
          <line x1="14.1213" y1="14.1213" x2="18" y2="18" stroke="#1C2DBB" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </span>

      <img
        src="https://img.freepik.com/free-photo/human-body-frontal_1048-5345.jpg?semt=ais_hybrid&w=740" 
        alt="Human anatomy"
        style={{ maxHeight: 600, objectFit: "contain" }}
      />

      <span
        style={{
          position: "absolute",
          top: "25%",
          right: "-18px",
          transform: "translateY(-50%)",
          background: "#1C2DBB",
          color: "#ffffff",
          padding: "6px 14px",
          fontSize: 12,
          borderRadius: 50,
          display: "flex",
          alignItems: "center",
          gap: 6
        }}
      >
        ❤️ Healthy Heart
      </span>

      <span
        style={{
          position: "absolute",
          left: "-18px",
          top: "62%",
          transform: "translateY(-50%)",
          background: "#00c39a",
          color: "#ffffff",
          padding: "6px 14px",
          fontSize: 12,
          borderRadius: 50,
          display: "flex",
          alignItems: "center",
          gap: 6
        }}
      >
        🦵 Healthy Leg
      </span>

   
    </div>
  );
}
