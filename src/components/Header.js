// src/components/Header.js
import React from "react";

function Header({ grouping, setGrouping, sorting, setSorting }) {
  return (
    <div className="header">
      <div className="grouping">
        <label>Group by:</label>
        <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className="sorting">
        <label>Sort by:</label>
        <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
