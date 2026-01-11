import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({ employees, isLoading, onEdit, onDelete, onToggle }) => {
  if (isLoading) return <p>Loading employees...</p>;

  if (!employees.length) {
    return <p style={{ textAlign: "center" }}>No employees found</p>;
  }

  return (
    <table width="100%" cellPadding="10">
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>State</th>
          <th>Active</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <EmployeeCard
            key={emp.id}
            emp={emp}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
