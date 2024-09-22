import ReactApexChart from 'react-apexcharts';

import { RadialBarChartProps } from '../typings';

function RadialBarChart({ type, series, ...options }: RadialBarChartProps) {
  return (
    <ReactApexChart
      options={options}
      series={series}
      type={type}
      height={options.chart?.height}
      width={options.chart?.width}
    />
  );
}

export default RadialBarChart;
