import React from "react";

export default function Sidebar({ isOpen, onToggle }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      
      {/* TOGGLE BUTTON */}
      <button className="sidebar-toggle-btn" onClick={onToggle}>
        ☰
      </button>

      <div className="sidebar-content">
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="/employees">Employees</a>
            </li>
          </ul>
        </nav>
      </div>

    </aside>
  );
}
