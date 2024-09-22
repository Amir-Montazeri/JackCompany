import { ChartsWithCardProps } from '@/features/charts/chart';

export const radialBarChartData: ChartsWithCardProps = {
  card: {
    title: 'Card title',
    description: 'Description',
    footerLabel: 'view details',
  },
  type: 'radialBar',
  series: [44, 55, 67, 83, 22, 45, 90, 67],
  chart: {
    width: 370,
    height: 310,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      inverseOrder: false,
      offsetY: 0,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: '5%',
        background: 'transparent',
        image: undefined,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          show: false,
        },
      },
      barLabels: {
        enabled: true,
        useSeriesColors: true,
        offsetX: -8,
        fontSize: '12px',
        fontWeight: 500,
        formatter: function (seriesName) {
          return seriesName;
          // +
          // ':  ' +
          // opts.w.globals.series[opts.seriesIndex]
        },
      },
    },
  },
  colors: [
    '#BFDBFE',
    '#1E3A8A',
    '#1D4ED8',
    '#60A5FA',
    '#AAAAAA',
    '#3B82F6',
    '#2563EB',
    '#555555',
  ],
  labels: ['30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%'],
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          show: false,
        },
      },
    },
  ],
};
