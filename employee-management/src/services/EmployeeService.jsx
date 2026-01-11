const BASE_URL = "http://localhost:5000/employees";

export const getEmployees = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addEmployee = async (employee) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });

  return res.json(); // 🔥 IMPORTANT
};

export const updateEmployee = async (employee) => {
  await fetch(`${BASE_URL}/${employee.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
};

export const deleteEmployee = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};
