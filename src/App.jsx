
import { useState } from "react";
import PatientForm from "./components/PatientForm";
import "./App.css";
import "./components/css/PatientsList.css";

function App() {

  const [patients, setPatients] = useState([]);

  function addPatient(patient) {
    setPatients([...patients, patient]);
  }

  function deletePatient(index) {
    setPatients(
      patients.filter((patient, i) => i !== index)
    );
  }

  return (
    <div className="app-container">

      <h1 className="app-title">
        Hospital Patient Manager
      </h1>

      <PatientForm addPatient={addPatient} />

      <div className="patients-container">

        <h2>Patients</h2>

        {patients.length === 0 ? (
          <p>No patients yet.</p>
        ) : (

          patients.map((patient, index) => {
            return (
              <div className="patient-card" key={index}>

                <strong>
                  {index + 1}. {patient.name}
                </strong>

                <span>Age: {patient.age}</span>

                <span>
                  Department: {patient.department}
                </span>

                <button
                  className="delete-btn"
                  onClick={() => deletePatient(index)}
                >
                  Delete
                </button>

              </div>
            );
          })

        )}

      </div>

    </div>
  );
}

export default App;
