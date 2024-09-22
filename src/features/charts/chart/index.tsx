import { ChartCardWrapper } from '@/features';
import { ChartsTypes } from '../typings';
import ChartRenderer from './chartRenderer';
import { CCProps } from '@/features/chartCardWrapper';

export type ChartsWithCardProps = ChartsTypes & {
  // TODO: it should be more general! we would get the type of CardWrapper automatically
  card: Omit<CCProps, 'children'>;
};

// type ChartProps<T extends React.ReactNode> = ChartsTypes & {
//   CardWrapper: T;
//   cardWrapperProps?: T;
// };

const Chart = ({ charts }: { charts: ChartsWithCardProps[] }) => {
  const renderedCharts = charts.map(({ card, ...chart }, _i) => (
    <ChartCardWrapper
      key={_i}
      // className={{ contentCard: 'px-0' }}
      {...card}
    >
      <ChartRenderer {...chart} />
    </ChartCardWrapper>
  ));

  return renderedCharts;
};

export default Chart;
