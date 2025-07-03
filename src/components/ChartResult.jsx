// frontend/src/components/ChartResult.jsx
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

function ChartResult({ breakdown }) {
  const data = {
    labels: Object.keys(breakdown),
    datasets: [{
      label: 'Severity Score',
      data: Object.values(breakdown),
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 2,
    }]
  };

  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded-lg shadow">
      <Radar data={data} />
    </div>
  );
}

export default ChartResult;
