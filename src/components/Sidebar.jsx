import { Settings } from "lucide-react";
import {navLinks} from "../data/navLinks";
import { COLORS } from "../data/colours";

export default function Sidebar({ active = "Dashboard" }) {

  const renderSection = (title, links) => (
    <>
      <span
        style={{
          fontSize: 12,
          fontWeight: 600,
          color: COLORS.textLight,
          textTransform: "uppercase",
          letterSpacing: 0.4,
          margin: "24px 0 8px"
        }}
      >
        {title}
      </span>

      {links.map(({ label, Icon }) => {
        const isActive = label === active;
        return (
          <button
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              width: "100%",
              border: 0,
              outline: 0,
              background: isActive ? COLORS.blue50 : "transparent",
              color: isActive ? COLORS.blue600 : COLORS.textDark,
              fontSize: 15,
              fontWeight: 500,
              padding: "10px 14px",
              borderRadius: 12,
              cursor: "pointer",
              transition: "background 120ms"
            }}
          >
            <Icon size={20} strokeWidth={1.8} />
            <span style={{ fontWeight: 600 }}>{label}</span>
          </button>
        );
      })}
    </>
  );

  return (
    <aside
      style={{
        width: 240,
        minHeight: "100dvh",
        background: "#ffffff",
        borderRight: "1px solid #e5e7eb",
        borderRadius: "30px 0 0 30px",
        boxShadow: "0 0 8px rgba(0,0,0,0.03)",
        padding: 24,
        display: "flex",
        flexDirection: "column"
      }}
    >
      <span style={{ marginBottom: 24, userSelect: "none" }}>
        <span
          style={{
            color: COLORS.brandGreen,
            fontWeight: 700,
            fontSize: 28
          }}
        >
          Health
        </span>
        <span
          style={{
            color: COLORS.brandNavy,
            fontWeight: 700,
            fontSize: 28
          }}
        >
          care.
        </span>
      </span>

      {renderSection("General", navLinks.general)}
      {renderSection("Tools", navLinks.tools)}

      <div style={{ marginTop: "auto" }}>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            width: "100%",
            border: 0,
            outline: 0,
            background: "transparent",
            color: COLORS.textDark,
            fontSize: 15,
            fontWeight: 500,
            padding: "10px 14px",
            borderRadius: 12,
            cursor: "pointer"
          }}
        >
          <Settings size={20} strokeWidth={1.8} />
          <span style={{ fontWeight: 600 }}>Setting</span>
        </button>
      </div>
    </aside>
  );
}
