import { FaEdit, FaTrash, FaPrint } from "react-icons/fa";

const EmployeeCard = ({ emp, onEdit, onDelete, onToggle }) => {
  return (
    <tr>
      <td>{emp.id}</td>

      <td>
        <img
          src={emp.image}
          alt="profile"
          width="40"
          style={{ borderRadius: "50%" }}
        />
      </td>

      <td>{emp.name}</td>
      <td>{emp.gender}</td>
      <td>{emp.dob}</td>
      <td>{emp.state}</td>

      <td>
        <div className="cell-center">
          <input
            type="checkbox"
            checked={emp.active}
            onChange={() => onToggle(emp)}
          />
        </div>
      </td>

      <td>
        <div className="cell-center actions">
          <button
            className="icon-btn edit"
            title="Edit"
            onClick={() => onEdit(emp)}
          >
            <FaEdit />
          </button>

          <button
            className="icon-btn delete"
            title="Delete"
            onClick={() => onDelete(emp.id)}
          >
            <FaTrash />
          </button>

          <button
            className="icon-btn print"
            title="Print"
            onClick={() => window.print()}
          >
            <FaPrint />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EmployeeCard;
