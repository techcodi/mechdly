import React from "react";

import { BiCalendarEvent } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PaymentIcon from "@mui/icons-material/Payment";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";

const services = [
  {
    id: 0,
    icon: <BiCalendarEvent />,
    name: "Scheduling",
    detail:
      "  Let your clients choose the most efficient time to meet with you and fix their car issues.",
  },
  {
    id: 1,
    icon: <PaymentIcon />,
    name: "Payment gateway",
    detail: "An efficient payment system worthy of your services.",
  },
  {
    id: 2,
    icon: <EventNoteOutlinedIcon />,
    name: "Generalize invoice",
    detail: "Get your receipts and invoices for payment proof.",
  },
  {
    id: 3,
    icon: <NotificationsNoneOutlinedIcon />,
    name: "Send SMS",
    detail:
      "Stay on the loop with all your business activities with our SMS notifications.",
  },
  {
    id: 4,
    icon: <FaRegEnvelope />,
    name: "Send Reminders",
    detail:
      "Let’s remind you and your clients about the upcoming meetings before time.",
  },
];

const Services = () => {
  return (
    <section className="services">
      <h3>SERVICES WE OFFER</h3>
      <div className="s-container">
        {services.map((service) => (
          <div className="s-box s-b-push">
            <div classNAme="s-box0">
              <span>{service.icon}</span>
              <h4>{service.name}</h4>
              <p>{service.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <span className="blur"></span>
    </section>
  );
};

export default Services;
