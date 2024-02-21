import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const BarCharts = () => {
  return (
    <div>
      <h2>Bar Chart Example</h2>
      <BarChart
      xAxis={[{ scaleType: 'band', data: ['Staff Rep', 'Expert Rep', 'Student Rep'] }]}
      series={[{ data: [19,6,7] }, { data: [0,0,0] }, { data: [0,0,0] }]}
      width={500}
      height={300}
    />
    </div>
  );
};
export default BarCharts;
