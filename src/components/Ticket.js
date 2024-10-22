// src/components/Ticket.js
import React from "react";

function Ticket({ ticket }) {
  return (
    <div className="ticket">
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <span className={`priority priority-${ticket.priority}`}>
        {priorityLabel(ticket.priority)}
      </span>
    </div>
  );
}

function priorityLabel(priority) {
  switch (priority) {
    case 4:
      return "Urgent";
    case 3:
      return "High";
    case 2:
      return "Medium";
    case 1:
      return "Low";
    default:
      return "No Priority";
  }
}

export default Ticket;
