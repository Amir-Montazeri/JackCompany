import ReactApexChart from 'react-apexcharts';

import { SemiCircleGaugeChartProps } from '../typings';

function SemiCircleGaugeChart({
  type,
  series,
  ...options
}: SemiCircleGaugeChartProps) {
  return (
    <ReactApexChart
      options={options}
      series={series}
      type="radialBar"
      height={options.chart?.height}
      width={options.chart?.width}
    />
  );
}

export default SemiCircleGaugeChart;
