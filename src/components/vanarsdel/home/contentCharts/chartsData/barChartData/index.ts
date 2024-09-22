import { ChartsWithCardProps } from '@/features/charts/chart';

export const barChartData: ChartsWithCardProps = {
  card: {
    title: 'Card title',
    description: 'Description',
    footerLabel: 'view details',
    className: {
      contentCard: {
        card: 'px-0',
      },
    },
  },
  type: 'bar',
  series: [{ data: [12000, 2000, 12012, 30303, 90000, 30000] }],
  colors: ['#00B7C3'],
  yaxis: {
    axisBorder: { show: false },
    tickAmount: 6,
    title: {
      text: 'Y-axis title',
      style: { color: '#424242', fontSize: '10px', fontWeight: 600 },
    },
    labels: {
      formatter(val) {
        if (val === 0) return (0).toString();
        let result = (val / 1000).toString();
        result = result + 'K';
        return result;
      },
    },
  },
  chart: {
    height: 262,
    width: 420,
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      columnWidth: '70%',
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
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
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    title: {
      text: 'X-axis title',
      style: { color: '#424242', fontSize: '10px', fontWeight: 600 },
    },
  },
};
