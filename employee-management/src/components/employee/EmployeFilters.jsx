import { FaSearch, FaVenusMars, FaToggleOn } from "react-icons/fa";

const EmployeeFilters = ({
  search,
  setSearch,
  gender,
  setGender,
  status,
  setStatus,
}) => {
  const handleReset = () => {
    setSearch("");
    setGender("");
    setStatus("");
  };

  return (
    <div className="employee-filters">
      {/* Search */}
      <div className="input-group">
        <FaSearch className="input-icon" />
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Gender */}
      <div className="input-group">
        <FaVenusMars className="input-icon" />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      {/* Status */}
      <div className="input-group">
        <FaToggleOn className="input-icon" />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="input-group reset-group">
        <input
          type="button"
          value="Reset"
          className="reset-btn"
          onClick={handleReset}
        />
      </div>
    </div>
  );
};

export default EmployeeFilters;
