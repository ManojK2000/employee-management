import React, { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa";

import Header from "../../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import EmployeeList from "../components/employee/EmployeeList";
import EmployeeForm from "../components/employee/EmployeeForm";
import EmployeeFilters from "../components/employee/EmployeFilters";
import ConfirmModal from "../components/common/ConfirmModal";

import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../services/EmployeeService";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const fetchEmployees = async () => {
    setLoading(true);
    const data = await getEmployees();
    setEmployees(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const totalEmployees = employees.length;
  const activeCount = employees.filter((e) => e.active).length;
  const inactiveCount = employees.filter((e) => !e.active).length;

  const filteredEmployees = employees.filter((e) => {
    if (!e?.name) return false;
    return (
      e.name.toLowerCase().includes(search.toLowerCase()) &&
      (!gender || e.gender === gender) &&
      (!status || (status === "active" ? e.active : !e.active))
    );
  });

  const handleAddEmployee = () => {
    setSelected(null);
    setShowForm(true);
  };

  const handleEdit = (emp) => {
    setSelected(emp);
    setShowForm(true);
  };

  const handleSave = async (emp) => {
    emp.id ? await updateEmployee(emp) : await addEmployee(emp);
    await fetchEmployees();
    setShowForm(false);
    setSelected(null);
  };

  const handleToggle = async (emp) => {
    await updateEmployee({ ...emp, active: !emp.active });
    await fetchEmployees();
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const confirmDelete = async () => {
    await deleteEmployee(deleteId);
    await fetchEmployees();
    setShowConfirm(false);
    setDeleteId(null);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setDeleteId(null);
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
          <p>Total: {totalEmployees}</p>
          <p>Active: {activeCount}</p>
          <p>Inactive: {inactiveCount}</p>
        </div>

        <div className="filters-bar">
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

          <div
            className="input-group add-employee-btn"
            onClick={handleAddEmployee}
          >
            <FaUserPlus className="add-icon" />
            <span>Add Employee</span>
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
          onDelete={handleDeleteClick}
          onToggle={handleToggle}
        />
      </main>

      {showConfirm && (
        <ConfirmModal
          title="Delete Employee"
          message="Are you sure you want to delete this employee?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </>
  );
}
