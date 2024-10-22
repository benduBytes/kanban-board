// src/components/Column.js
import React from "react";
import Ticket from "./Ticket";

function Column({ title, tickets }) {
  return (
    <div className="column">
      <h2>{title}</h2>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default Column;
