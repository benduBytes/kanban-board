// src/components/KanbanBoard.js
import React from "react";
import Column from "./Column";

function KanbanBoard({ tickets, grouping, sorting }) {
  const groupedTickets = groupTickets(tickets, grouping);
  const sortedTickets = sortTickets(groupedTickets, sorting);

  return (
    <div className="kanban-board">
      {Object.keys(sortedTickets).map((key) => (
        <Column key={key} title={key} tickets={sortedTickets[key]} />
      ))}
    </div>
  );
}

function groupTickets(tickets, grouping) {
  if (!Array.isArray(tickets)) {
    return {};  // If tickets is not an array, return an empty object
  }

  return tickets.reduce((acc, ticket) => {
    const groupBy = ticket[grouping];
    if (!acc[groupBy]) acc[groupBy] = [];
    acc[groupBy].push(ticket);
    return acc;
  }, {});
}


function sortTickets(tickets, sorting) {
  return Object.keys(tickets).reduce((acc, key) => {
    acc[key] = [...tickets[key]].sort((a, b) => {
      if (sorting === "priority") {
        return b.priority - a.priority;
      }
      return a.title.localeCompare(b.title);
    });
    return acc;
  }, {});
}

export default KanbanBoard;
