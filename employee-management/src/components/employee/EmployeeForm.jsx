import { useState, useEffect } from "react";
import { INDIAN_STATES, STATUS_OPTIONS, GENDERS } from "../../utils/constants";

const EmployeeForm = ({ selected, onSave, onCancel }) => {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    dob: "",
    state: "",
    active: true,
    image: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selected) {
      setForm({ ...selected });
    }
  }, [selected]);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.gender) newErrors.gender = "Gender is required";
    if (!form.dob) newErrors.dob = "Date of Birth is required";
    if (!form.state) newErrors.state = "State is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) setForm({ ...form, image: URL.createObjectURL(file) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onSave(form);
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h3>{selected ? "Edit Employee" : "Add Employee"}</h3>

      {/* NAME */}
      <input
        className={errors.name ? "error-input" : ""}
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      {errors.name && <p className="error-text">{errors.name}</p>}

      {/* GENDER */}
      <select
        className={errors.gender ? "error-input" : ""}
        value={form.gender}
        onChange={(e) => setForm({ ...form, gender: e.target.value })}
      >
        <option value="">Select Gender</option>
        {GENDERS.map((gender) => (
          <option key={gender} value={gender}>
            {gender}
          </option>
        ))}
      </select>
      {errors.gender && <p className="error-text">{errors.gender}</p>}

      {/* DOB */}
      <input
        className={errors.dob ? "error-input" : ""}
        type="date"
        value={form.dob}
        onChange={(e) => setForm({ ...form, dob: e.target.value })}
      />
      {errors.dob && <p className="error-text">{errors.dob}</p>}

      {/* STATE */}
      <select
        className={errors.state ? "error-input" : ""}
        value={form.state}
        onChange={(e) => setForm({ ...form, state: e.target.value })}
      >
        <option value="">Select State</option>
        {INDIAN_STATES.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
      {errors.state && <p className="error-text">{errors.state}</p>}

      {/* STATUS */}
      <select
        value={form.active ? "active" : "inactive"}
        onChange={(e) =>
          setForm({ ...form, active: e.target.value === "active" })
        }
      >
        {STATUS_OPTIONS.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      {/* IMAGE */}
      <input type="file" onChange={handleImage} />

      {form.image && (
        <img src={form.image} alt="preview" className="preview-img" />
      )}

      <div className="form-actions">
        <button type="submit" className="btn-primary">
          Save
        </button>
        <button type="button" className="btn-secondary" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
