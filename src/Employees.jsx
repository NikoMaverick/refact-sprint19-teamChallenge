
const Employees = ({ employees }) => {
  // Verifica si la prop employees es undefined o está vacía
  if (!employees || employees.length === 0) {
    return <p>No hay empleados disponibles.</p>;
  }

  return (
    <div>
      <h2>Lista de Empleados</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee.name} {employee.lastName} - Edad: {employee.age}
            <p>Hobbies: {employee.hobbies.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;