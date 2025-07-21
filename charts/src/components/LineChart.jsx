import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

export default function LineChart({ rawData }) {

  

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'kW',
        data: [rawData[0].value, rawData[1].value, rawData[2].value, rawData[3].value, rawData[4].value, rawData[5].value],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };
  const options = { responsive: true };
  return <Chart type="line" data={data} options={options} />;
}
