import ReactApexChart from 'react-apexcharts';
import { DonutChartProps } from '../typings';

function DonutChart({ type, series, ...props }: DonutChartProps) {
  return (
    <ReactApexChart
      options={props}
      series={series}
      type={type}
      width={props.chart?.width}
      height={props.chart?.height}
    />
  );
}

export default DonutChart;
