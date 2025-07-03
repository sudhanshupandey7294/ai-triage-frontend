// frontend/src/components/PatientCard.jsx
function PatientCard({ patient }) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-md">
      <h3 className="text-lg font-semibold">{patient.name} ({patient.age} yrs)</h3>
      <p className="text-sm text-gray-600">Gender: {patient.gender}</p>
      <p className="mt-2"><strong>Symptoms:</strong> {patient.symptoms.join(', ')}</p>
      <p><strong>Urgency:</strong> <span className="font-bold text-red-500">{patient.urgencyScore.level}</span></p>
    </div>
  );
}

export default PatientCard;
