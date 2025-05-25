'use client';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { useStore } from '../../store/useStore';

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function AnalyticsPage() {
  const { users } = useStore();
  const departments = ['HR', 'Engineering', 'Sales', 'Marketing'];
  const data = {
    labels: departments,
    datasets: [{
      label: 'Avg Rating',
      data: departments.map(dep => {
        const depUsers = users.filter(u => u.department === dep);
        return depUsers.length
          ? (depUsers.reduce((a, b) => a + b.performance, 0) / depUsers.length).toFixed(2)
          : 0;
      }),
      backgroundColor: 'rgba(59,130,246,0.5)'
    }]
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Analytics</h1>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <Bar data={data} />
      </div>
    </div>
  );
}

