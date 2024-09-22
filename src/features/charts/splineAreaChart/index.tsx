import ReactApexChart from 'react-apexcharts';

import { SplineAreaChartProps } from '../typings';

function SplineAreaChart({ type, series, ...options }: SplineAreaChartProps) {
  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={options.chart?.height}
      width={options.chart?.width}
    />
  );
}

export default SplineAreaChart;
