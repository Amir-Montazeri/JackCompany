import clsx from 'clsx';

import { Card, CardContent } from '@/components/ui/card';
import Header, { HeadersProps } from './header';
import Footer, { FooterProps } from './footer';
import { ContentTabsProps } from './typings';
import ContentTabsRenderer from './contentTabsRenderer';

export interface CCProps {
  children: React.ReactNode;
  title: string;
  description: string;
  footerLabel?: string;
  contentTabs?: ContentTabsProps;
  className?: {
    card?: string;
    header?: HeadersProps['className'];
    contentCard?: {
      card?: string;
      header?: string;
    };
    footer?: FooterProps['className'];
  };
}

function ChartCard({
  children,
  title,
  description,
  footerLabel,
  contentTabs,
  className,
}: CCProps) {
  return (
    <Card className={clsx('w-fit h-fit', className?.card)}>
      <Header
        title={title}
        description={description}
        className={className?.header}
      />
      <CardContent
        className={clsx('p-5 pb-2', className?.contentCard?.card, {
          '!pt-0': contentTabs?.show,
        })}
      >
        {contentTabs?.show && (
          <ul className={clsx('flex', className?.contentCard?.header, {})}>
            <ContentTabsRenderer
              tabs={contentTabs.tabs}
              activeTabId={contentTabs.activeTabId}
              onClick={contentTabs.onClick}
            />
          </ul>
        )}
        {children}
      </CardContent>
      {footerLabel && (
        <Footer label={footerLabel} className={className?.footer} />
      )}
    </Card>
  );
}

export default ChartCard;
