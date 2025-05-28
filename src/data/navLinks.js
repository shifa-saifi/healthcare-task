import {
  LayoutDashboard,
  History,
  Calendar,
  CalendarCheck,
  BarChart2,
  MessageCircle,
  PhoneCall,
} from "lucide-react";

export const navLinks = {
  general: [
    { label: "Dashboard", Icon: LayoutDashboard },
    { label: "History", Icon: History },
    { label: "Calendar", Icon: Calendar },
    { label: "Appointments", Icon: CalendarCheck },
    { label: "Statistics", Icon: BarChart2 }
  ],
  tools: [
    { label: "Chat", Icon: MessageCircle },
    { label: "Support", Icon: PhoneCall }
  ]
};
