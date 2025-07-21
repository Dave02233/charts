// src/components/HistoryChart.jsx
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  TimeScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
  Title
} from 'chart.js';
import 'chartjs-adapter-date-fns';          // <‑‑ adattatore data‑fns

// Registra solo ciò che ti serve: tieni leggero il bundle
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  TimeScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
  Title
);

export default function HistoryChart({ rawData }) {
  /* 
   * rawData dovrebbe essere un array di oggetti così:
   * [{ ts: '2025-01-01', value: 123 }, { ts: '2025-01-02', value: 150 }, ...]
   * Se non lo hai ancora, puoi simularlo.
   */

  const data = {
    labels: rawData.map(pt => pt.ts),          // array di date ISO‑8601
    datasets: [
    {
        label: 'Produzione (kWh) 1',
        data: rawData.map(pt => pt.value),
        fill: true,
        borderWidth: 2,
        tension: 0.3,                          // linee leggermente smussate
        borderColor: 'rgb(34, 123, 200)',
        backgroundColor: 'rgba(34, 123, 200, 0.3)', // trasparente
        pointBackgroundColor: 'rgba(34, 200, 172, 1)',
        
    },
    {
        label: 'Produzione (kWh) Impianto 2',
        data: rawData.map(pt => pt.value + Math.random() * 100),
        fill: true,
        borderWidth: 2,
        tension: 0.3,                          // linee leggermente smussate
        borderColor: 'rgba(223, 54, 54, 1)',
        backgroundColor: 'rgba(230, 28, 28, 0.24)', // trasparente
        pointBackgroundColor: 'rgba(228, 128, 128, 1)',
        
    }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,               // occuperà tutto il contenitore
    plugins: {
      legend: { position: 'top' },
      title:  { display: true, text: 'Storico Consumi' },
      tooltip:{ mode: 'index', intersect: false }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    scales: {
      x: {
        type: 'time',                         // scala temporale
        time: { unit: 'day', tooltipFormat: 'PPP' },
        title: { display: true, text: 'Data' }
      },
      y: {
        beginAtZero: true,
        title: { display: true, text: 'kWh' }
      }
    }
  };

  return (
    <div style={{ height: 400 }}>
      <Line data={data} options={options} />
    </div>
  );
}
