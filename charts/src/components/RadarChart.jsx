import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function RadarChart({ rawData }) {
  const data = {
    labels: ['A', 'B', 'C', 'D', 'E', 'F'],
    datasets: [
      {
        label: 'kW',
        data: [rawData[0].value, rawData[1].value, rawData[2].value, rawData[3].value, rawData[4].value, rawData[5].value],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 0.5)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
      },
    ],
  };
  const options = { responsive: true };
  return <Chart type="radar" data={data} options={options} />;
}
