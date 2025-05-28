import UpcomingCard from "./UpcomingCard";

export default function UpcomingSchedule() {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>
        The Upcoming Schedule
      </h3>

      <div>
        <p style={{ margin: "0 0 12px 0", color: "#64748b", fontWeight: 600 }}>
          On Thursday
        </p>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <UpcomingCard
            title="Health checkup complete"
            time="11:00 AM"
            icon="💉"
          />
                  <div style={{width: "40%", display: "flex", flexWrap: "wrap", gap: 24}}>

          <UpcomingCard title="Ophthalmologist" time="14:00 PM" icon="👁️" />
          </div>
        </div>
      </div>

      <div>
        <p style={{ margin: "0 0 12px 0", color: "#64748b", fontWeight: 600 }}>
          On Saturday
        </p>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", }}>
          <UpcomingCard title="Cardiologist" time="12:00 AM" icon="❤️" />
          <UpcomingCard title="Neurologist" time="16:00 PM" icon="🧑‍⚕️" />
        </div>
      </div>
    </section>
  );
}
