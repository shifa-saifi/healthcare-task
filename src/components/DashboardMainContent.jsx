"use client";
 
import CalendarHeader from "./CalendarHeader";
import CalendarTimeline from "./CalendarTimeline";
import AppointmentCard from "./AppointmentCard";
import UpcomingSchedule from "./UpcomingSchedule";


const panelStyle = {
  flex: 1,
  padding: 32,
  display: "flex",
  flexDirection: "column",
  gap: 32,
  background: "#F9FAFE",
  borderRadius: "0 32px 32px 0"
};


export default function DashboardMain() {
  return (
    <section style={panelStyle}>
      <CalendarHeader />

      <CalendarTimeline />

      <div style={{ display: "flex", gap: 24 }}>
        <div style={{width: "40%", display: "flex", flexWrap: "wrap", gap: 24}}>


        <AppointmentCard
          title="Dentist"
          time="09:00-11:00"
          doctor="Dr. Cameron Williamson"
          bg="linear-gradient(135deg, #0D1B94 0%, #1C2DBB 100%)"
          icon="🦷"
          dark
        />
        </div>

        <AppointmentCard
          title="Physiotherapy Appointment"
          time="11:00-12:00"
          doctor="Dr. Kevin Djones"
          bg="#D3D9FB"
          icon="💪"
        />
      </div>

      <UpcomingSchedule />
    </section>
  );
}
