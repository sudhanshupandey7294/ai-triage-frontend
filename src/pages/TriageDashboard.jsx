// frontend/src/pages/TriageDashboard.jsx
import { useState } from "react";
import SymptomForm from "../components/SymptomForm";
import UrgencyScore from "../components/UrgencyScore";
import ChartResult from "../components/ChartResult";
import PatientCard from "../components/PatientCard";
import { useAuth } from "../context/AuthContext";

function TriageDashboard() {
  const [result, setResult] = useState(null);
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-blue-700">🩺 AI Triage System</h1>
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Logout
          </button>
        </div>

        <SymptomForm onResult={setResult} />

        {result && (
          <div className="mt-8 space-y-6">
            <UrgencyScore level={result.urgencyScore.level} />
            <ChartResult breakdown={result.urgencyScore.scoreBreakdown} />
            <PatientCard patient={result} />
          </div>
        )}
      </div>
    </div>
  );
}

export default TriageDashboard;
