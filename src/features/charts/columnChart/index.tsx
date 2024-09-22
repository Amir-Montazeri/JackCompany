import ReactApexChart from 'react-apexcharts';

import { ColumnChartProps } from '../typings';

function ColumnChart({ type, series, ...props }: ColumnChartProps) {
  return (
    <ReactApexChart
      options={{
        chart: {
          type: 'bar',
          height: props.chart?.height || 280,
        },
        ...props,
      }}
      series={series}
      type="bar"
      height={props.chart?.height}
      width={props.chart?.width}
    />
  );
}

export default ColumnChart;
