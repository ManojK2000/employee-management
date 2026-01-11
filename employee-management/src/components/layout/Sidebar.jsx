import React from "react";
import { FaBars, FaAngleLeft, FaUsers } from "react-icons/fa";

export default function Sidebar({ isOpen, onToggle }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button
        className="sidebar-toggle-btn"
        onClick={onToggle}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <FaAngleLeft /> : <FaBars />}
      </button>

      <div className="sidebar-content">
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="/dashboard" className="sidebar-link">
                <FaUsers className="sidebar-icon" />
                <span>Employees</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
