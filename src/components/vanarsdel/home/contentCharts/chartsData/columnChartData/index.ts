import { ChartsWithCardProps } from '@/features/charts/chart';

export const columnChartData: ChartsWithCardProps = {
  card: {
    title: 'Card title',
    description: 'Description',
    footerLabel: 'view details',
    contentTabs: {
      show: true,
      activeTabId: '1st/tab',
      tabs: [
        {
          title: 'First tab',
          tabId: '1st/tab',
        },
        {
          title: 'Second tab',
          tabId: '2nd/tab',
        },
        {
          title: 'Third tab',
          tabId: '3rd/tab',
        },
      ],
    },
  },
  type: 'column',
  series: [
    {
      name: 'Colors Number',
      data: [44, 55, 57, 56, 61, 58],
    },
    {
      name: 'Revenue',
      data: [76, 85, 98, 98, 87, 40],
    },
    {
      name: 'Free Cash Flow',
      data: [30, 30, 30, 30, 30, 30],
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '90%',
    },
  },
  chart: {
    height: 240,
    width: 350,
    toolbar: { show: false },
  },
  colors: ['#93C5FD', '#1D4ED8', '#888888'],
  legend: { show: false },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 1,
    colors: ['transparent'],
  },
  fill: {
    opacity: 1,
  },
  grid: {
    show: true,
    borderColor: '#EAEAEA',
  },
  yaxis: {
    stepSize: 10,
  },
  xaxis: {
    categories: ['XS', 'S', 'M', 'L', 'XL', 'XXl'],
  },
};
