import clsx from 'clsx';

import { Button } from '@/components/ui/button';
import { ContentTabsProps } from '../typings';

interface CTRProps extends Omit<ContentTabsProps, 'show'> {}

function ContentTabsRenderer({ tabs, activeTabId }: CTRProps) {
  return tabs.map((tab) => {
    const tabIsActive = tab.tabId === activeTabId;

    return (
      <li key={tab.tabId}>
        <Button
          variant={'ghost'}
          className={clsx('capitalize px-1 py-0 mx-1', {
            'text-active-black text-sm font-semibold active-content-tab':
              tabIsActive,
            'text-inactive font-light': !tabIsActive,
          })}
        >
          {tab.title}
        </Button>
      </li>
    );
  });
}

export default ContentTabsRenderer;
