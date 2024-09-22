import ReactApexChart from 'react-apexcharts';

import { BarChartProps } from '../typings';

function BarChart({ type, series, ...props }: BarChartProps) {
  const options: ApexCharts.ApexOptions = {
    chart: {
      height: props.chart?.height || 280,
      type,
    },
    ...props,
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type={type}
      height={props.chart?.height}
      width={props.chart?.width}
    />
  );
}

export default BarChart;
