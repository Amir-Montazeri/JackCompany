'use client';

import { Chart } from '@/features';
import { ChartsWithCardProps } from '@/features/charts/chart';
import {
  barChartData,
  columnChartData,
  donutChartData,
  radialBarChartData,
  semiCircleGaugeChartData,
  splineAreaChartData,
} from './chartsData';

function HomeContentCharts() {
  const charts: ChartsWithCardProps[] = [
    semiCircleGaugeChartData,
    barChartData,
    splineAreaChartData,
    radialBarChartData,
    donutChartData,
    columnChartData,
  ];

  return <Chart charts={charts} />;
}

export default HomeContentCharts;
