import { ArrowLeft, ArrowRight, Plus } from "lucide-react";

import { COLORS } from "../data/colours";

export default function CalendarHeader() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end",gap: 16 }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 16 }}>
          <span
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              background: COLORS.turquoise,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22
            }}
          >
            🧑‍⚕️
          </span>
        </div>
        <button
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: COLORS.navy,
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer"
          }}
        >
          <Plus size={18} color="#ffffff" />
        </button>
      </div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
    
        <h2
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: COLORS.navy,
            margin: 0
          }}
        >
          October 2021
        </h2>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              background: COLORS.navy,
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer"
            }}
          >
            <ArrowLeft size={18} color="#ffffff" />
          </button>
          <button
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              background: COLORS.navy,
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer"
            }}
          >
            <ArrowRight size={18} color="#ffffff" />
          </button>
        </div>
      </header>
    </>
  );
}
