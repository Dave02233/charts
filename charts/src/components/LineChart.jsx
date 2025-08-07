import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

export default function LineChart({ rawData }) {
  const labels = ['Gen', 'Feb', 'Mar'];

  const data = {
    labels,
    datasets: [
      {
        label: 'kW - Scala Primaria',
        data: rawData.slice(0, 3).map(item => item.value),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        yAxisID: 'y',
        fill: true,
      },
      {
        label: 'kW - Scala Secondaria',
        data: rawData.slice(3, 6).map(item => item.value + 2000),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y1',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
      },
    },
  };

  return <Chart type="line" data={data} options={options} />;
}
