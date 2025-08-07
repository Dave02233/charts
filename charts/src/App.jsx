import HistoryChart from './components/Chart';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import RadarChart from './components/RadarChart';
import PolarAreaChart from './components/PolarAreaChart';
import DoughnutChart from './components/DoughnutChart';
import ScatterChart from './components/ScatterChart';
import { useState, useEffect } from 'react';

function createSample () {
  return [
  { ts: '2025-01-01 08:00', value: Math.floor(Math.random() * 100 + 20) },
  { ts: '2025-01-01 14:00', value: Math.floor(Math.random() * 100 + 20) },
  { ts: '2025-01-01 20:00', value: Math.floor(Math.random() * 100 + 20) },
  { ts: '2025-01-02 08:00', value: Math.floor(Math.random() * 100 + 20) },
  { ts: '2025-01-02 14:00', value: Math.floor(Math.random() * 100 + 20) },
  { ts: '2025-01-02 20:00', value: Math.floor(Math.random() * 100 + 20) },
  { ts: '2025-01-03 08:00', value: Math.floor(Math.random() * 100 + 20) },
];
}

export default function Dashboard() {

  const [samples, setSamples] = useState(createSample())

  useEffect( _ => {
    let intervalOp = setInterval(_ => {
      setSamples(createSample());
      console.log(samples)
    }, 4000)

  }, [])

  return (
    <div className="dashboard-container">
      <div className="dashboard-title">Dashboard Grafici</div>
      <div className="charts-grid">
        <div className="chart-card">
          <h2>History Chart</h2>
          <HistoryChart rawData={samples} />
        </div>
        <div className="chart-card">
          <h2>Line Chart</h2>
          <LineChart rawData={samples}/>
        </div>
        <div className="chart-card">
          <h2>Bar Chart</h2>
          <BarChart  rawData={samples}/>
        </div>
        <div className="chart-card">
          <h2>Pie Chart</h2>
          <PieChart  rawData={samples}/>
        </div>
        <div className="chart-card">
          <h2>Radar Chart</h2>
          <RadarChart  rawData={samples}/>
        </div>
        <div className="chart-card">
          <h2>Polar Area Chart</h2>
          <PolarAreaChart  rawData={samples}/>
        </div>
        <div className="chart-card">
          <h2>Doughnut Chart</h2>
          <DoughnutChart  rawData={samples}/>
        </div>
        <div className="chart-card">
          <h2>Scatter Chart</h2>
          <ScatterChart  rawData={samples}/>
        </div>
      </div>
    </div>
  );
}
