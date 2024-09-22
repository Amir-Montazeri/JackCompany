import { ChartsWithCardProps } from '@/features/charts/chart';

export const semiCircleGaugeChartData: ChartsWithCardProps = {
  card: {
    title: 'Card title',
    description: 'Description',
    footerLabel: 'view details',
    className: {
      contentCard: {
        card: 'mb-6',
        header: 'mt-2 mb-10',
      },
    },
    contentTabs: {
      show: true,
      activeTabId: '7/days',
      tabs: [
        {
          title: '7 days',
          tabId: '7/days',
        },
        {
          title: '30 days',
          tabId: '30/days',
        },
        {
          title: '60 days',
          tabId: '60/days',
        },
      ],
    },
  },
  type: 'semiCircleGauge',
  series: [72],
  colors: ['#00B7C3', '#D1D1D1'],
  chart: {
    type: 'radialBar',
    offsetY: -20,
    height: 450,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: '#D1D1D1',
        strokeWidth: '96%',
        margin: 5,
        dropShadow: {
          enabled: false,
        },
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          offsetY: -2,
          fontSize: '32px',
        },
      },
    },
  },
  grid: {
    padding: {
      top: -40,
    },
  },
  legend: {
    show: true,
    position: 'bottom',
  },
  labels: ['Label 1', 'Label 2'],
};
