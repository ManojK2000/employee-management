import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import React, { useEffect, useState } from "react";
import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../services/EmployeeService";

import EmployeeList from "../components/employee/EmployeeList";
import EmployeeForm from "../components/employee/EmployeeForm";
import EmployeeFilters from "../components/employee/EmployeFilters";
export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const totalEmployees = employees.length;

  const activeCount = employees.filter((e) => e && e.active === true).length;

  const inactiveCount = employees.filter((e) => e && e.active === false).length;

  useEffect(() => {
    getEmployees().then((data) => {
      setEmployees(data);
      setLoading(false);
    });
  }, []);

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    await fetchEmployees();
  };

  const handleEdit = (emp) => {
    setSelected(emp);
    setShowForm(true);
  };

  const handleAddEmployee = () => {
    setSelected(null);
    setShowForm(true);
  };
  const filteredEmployees = employees.filter((e) => {
    if (!e || !e.name) return false; // 🔥 safety guard

    return (
      e.name.toLowerCase().includes(search.toLowerCase()) &&
      (!gender || e.gender === gender) &&
      (!status || (status === "active" ? e.active : !e.active))
    );
  });

  const fetchEmployees = async () => {
    setLoading(true);
    const data = await getEmployees();
    setEmployees(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleToggle = async (emp) => {
    await updateEmployee({ ...emp, active: !emp.active });
    await fetchEmployees();
  };

  const handleSave = async (emp) => {
    if (emp.id) {
      await updateEmployee(emp);
    } else {
      await addEmployee(emp);
    }

    await fetchEmployees(); // 🔥 refresh list

    setShowForm(false);
    setSelected(null);
  };

  return (
    <>
      <Header />
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <main className={`main-content ${isSidebarOpen ? "open" : "closed"}`}>
        <h2>Employee Dashboard</h2>
        <div className="empstatus">
          <p>Total Employees: {totalEmployees}</p>
          <p>Active Employees: {activeCount}</p>
          <p>Inactive Employees: {inactiveCount}</p>
        </div>

        <div className="filters-bar">
          {/* LEFT SIDE FILTERS */}
          <div className="filters-left">
            <EmployeeFilters
              search={search}
              setSearch={setSearch}
              gender={gender}
              setGender={setGender}
              status={status}
              setStatus={setStatus}
            />
          </div>

          {/* RIGHT SIDE BUTTON */}
          <div
            className="input-group add-employee-btn"
            onClick={handleAddEmployee}
          >
            Add Employee
          </div>
        </div>

        {showForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <EmployeeForm
                selected={selected}
                onSave={handleSave}
                onCancel={() => setShowForm(false)}
              />
            </div>
          </div>
        )}

        <EmployeeList
          employees={filteredEmployees}
          isLoading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      </main>
    </>
  );
}
