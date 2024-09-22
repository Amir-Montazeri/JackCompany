import { ChartsWithCardProps } from '@/features/charts/chart';

export const splineAreaChartData: ChartsWithCardProps = {
  card: {
    title: 'Card title',
    description: 'Description',
    footerLabel: 'view details',
    className: {
      contentCard: {
        card: '!px-0',
        header: '!px-3',
      },
    },
    contentTabs: {
      show: true,
      tabs: [
        { title: 'tab 1', tabId: 'tab1' },
        { title: 'tab 2', tabId: 'tab2' },
        { title: 'tab 3', tabId: 'tab3' },
      ],
      activeTabId: 'tab1',
    },
  },
  type: 'splineArea',
  series: [
    {
      name: 'Line 1',
      data: [60000, 93000, 82000, 20000, 81000, 10000],
    },
    {
      name: 'Line 2',
      data: [50000, 58000, 40000, 49000, 53000, 62000],
    },
  ],
  chart: {
    height: 250,
    width: 430,
    toolbar: { show: false },
  },
  colors: ['#637CEF', '#00B7C3'],
  legend: {
    show: true,
    position: 'bottom',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 380,
        },
      },
    },
  ],
  xaxis: {
    title: {
      text: 'X-axis title',
      style: { color: '#424242', fontSize: '10px', fontWeight: 600 },
    },
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  },
  yaxis: {
    title: {
      text: 'Y-axis title',
      style: { color: '#424242', fontSize: '10px', fontWeight: 600 },
    },
    labels: {
      formatter(val) {
        let result = (val / 1000).toString();
        result = result + 'K';
        return result;
      },
    },
  },
};
