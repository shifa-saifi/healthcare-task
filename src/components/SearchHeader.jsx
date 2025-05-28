 
import { Search, Bell } from "lucide-react";

export default function SearchHeader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          gap: 12,
          background: "#F3F5FA",
          padding: "10px 16px",
          borderRadius: 16
        }}
      >
        <Search size={18} strokeWidth={1.8} color="#64748b" />
        <input
          placeholder="Search"
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            fontSize: 14
          }}
        />
      </div>

      <button
        style={{
          width: 40,
          height: 40,
          borderRadius: 12,
          background: "#F3F5FA",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          position: "relative"
        }}
      >
        <Bell size={18} strokeWidth={1.8} color="#111730" />
        <span
          style={{
            position: "absolute",
            top: 6,
            right: 6,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#FF3B30"
          }}
        />
      </button>
    </div>
  );
}
