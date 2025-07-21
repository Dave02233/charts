import { Chart as ChartJS, PointElement, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(PointElement, LinearScale, Title, Tooltip, Legend);

export default function ScatterChart({ rawData }) {
  const data = {
    datasets: [
      {
        label: 'kW',
        data: [
          { x: rawData[0].value, y: Math.random() * 50 },
          { x: rawData[1].value, y: Math.random() * 50 },
          { x: rawData[2].value, y: Math.random() * 50 },
          { x: rawData[3].value, y: Math.random() * 50 },
          { x: rawData[4].value, y: Math.random() * 50 },
          { x: rawData[5].value, y: Math.random() * 50 },
        ],
        backgroundColor: 'rgb(255, 99, 132)'
      },
    ],
  };
  const options = { responsive: true };
  return <Chart type="scatter" data={data} options={options} />;
}
