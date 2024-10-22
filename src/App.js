// src/App.js
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import KanbanBoard from "./components/KanbanBoard";
import "./styles/styles.css";

function App() {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState("status");
  const [sorting, setSorting] = useState("priority");

  // Fetching data from API
  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Check the structure of the data
        setTickets(data.tickets);
      })
      .catch((err) => console.error("Error fetching tickets", err));
  }, []);
  

  // Saving grouping and sorting state in localStorage
  useEffect(() => {
    localStorage.setItem("grouping", grouping);
    localStorage.setItem("sorting", sorting);
  }, [grouping, sorting]);

  return (
    <div className="App">
      <Header
        grouping={grouping}
        setGrouping={setGrouping}
        sorting={sorting}
        setSorting={setSorting}
      />
      <KanbanBoard tickets={tickets} grouping={grouping} sorting={sorting} />
    </div>
  );
}

export default App;
