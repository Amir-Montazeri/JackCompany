import { ChartsWithCardProps } from '@/features/charts/chart';

export const donutChartData: ChartsWithCardProps = {
  card: {
    title: 'Card title',
    description: 'Description',
    footerLabel: 'view details',
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
  type: 'donut',
  series: [400, 160, 160, 80, 200],
  dataLabels: {
    enabled: false,
  },
  chart: {
    width: 350,
    height: 295,
  },
  colors: ['#A6E9ED', '#00666D', '#005B70', '#00B7C3', '#F5F5F5'],
  plotOptions: {
    pie: {
      donut: {
        size: '70px',
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true,
          },
        },
      },
    },
  },
  legend: {
    show: false,
  },
};
