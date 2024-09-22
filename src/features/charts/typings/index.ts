type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export interface BarChartProps
  extends WithRequired<ApexCharts.ApexOptions, 'series'> {
  type: 'bar';
}

export interface ColumnChartProps
  extends WithRequired<ApexCharts.ApexOptions, 'series'> {
  type: 'column';
}

export interface DonutChartProps
  extends WithRequired<ApexCharts.ApexOptions, 'series'> {
  type: 'donut';
}

export interface RadialBarChartProps
  extends WithRequired<ApexCharts.ApexOptions, 'series'> {
  type: 'radialBar';
}

export interface SemiCircleGaugeChartProps
  extends WithRequired<ApexCharts.ApexOptions, 'series'> {
  type: 'semiCircleGauge';
}

export interface SplineAreaChartProps
  extends WithRequired<ApexCharts.ApexOptions, 'series'> {
  type: 'splineArea';
}

export type ChartsTypes =
  | BarChartProps
  | ColumnChartProps
  | DonutChartProps
  | RadialBarChartProps
  | SemiCircleGaugeChartProps
  | SplineAreaChartProps;
