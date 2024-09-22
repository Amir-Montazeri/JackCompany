import BarChart from '../../barChart';
import ColumnChart from '../../columnChart';
import DonutChart from '../../donutChart';
import RadialBarChart from '../../radialBarChart';
import SemiCircleGaugeChart from '../../semiCircleGaugeChart';
import SplineAreaChart from '../../splineAreaChart';
import { ChartsTypes } from '../../typings';

function ChartRenderer({ type, series, ...options }: ChartsTypes) {
  switch (type) {
    case 'bar':
      return <BarChart type="bar" series={series} {...options} />;
    case 'column':
      return <ColumnChart type="column" series={series} {...options} />;
    case 'donut':
      return <DonutChart type="donut" series={series} {...options} />;
    case 'radialBar':
      return <RadialBarChart type="radialBar" series={series} {...options} />;
    case 'semiCircleGauge':
      return (
        <SemiCircleGaugeChart
          type="semiCircleGauge"
          series={series}
          {...options}
        />
      );
    case 'splineArea':
      return <SplineAreaChart type="splineArea" series={series} {...options} />;
    default:
      throw new Error('Invalid chart type!');
  }
}

export default ChartRenderer;
