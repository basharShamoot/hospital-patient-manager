
import { useState } from "react";
import "./css/PatientForm.css";
function PatientForm({ addPatient }) {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const patient = {
      name: name,
      age: age,
      department: department
    };

    addPatient(patient);

    setName("");
    setAge("");
    setDepartment("");

  }

  
return (
  <form className="patient-form" onSubmit={handleSubmit}>

    <input
      type="text"
      placeholder="Patient Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <input
      type="number"
      placeholder="Age"
      value={age}
      onChange={(e) => setAge(e.target.value)}
    />

    <input
      type="text"
      placeholder="Department"
      value={department}
      onChange={(e) => setDepartment(e.target.value)}
    />

    <button type="submit">
      Add Patient
    </button>

  </form>
);
}

export default PatientForm;
