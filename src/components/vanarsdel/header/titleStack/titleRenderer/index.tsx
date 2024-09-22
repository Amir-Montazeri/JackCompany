'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

import { Button } from '@/components/ui/button';
import { TitlePropertiesTypes } from './typings';

interface TRProps {
  titles: NonEmptyArray<TitlePropertiesTypes>;
}

function TitleRenderer({ titles }: TRProps) {
  const searchParams = useSearchParams(),
    activeTab = searchParams.get('active');
  const pathname = usePathname();

  const hrefGenerator = (tabId: TitlePropertiesTypes['tabId']) => {
    return pathname + '?active=' + tabId;
  };

  const tabIsActive = (tabId: TitlePropertiesTypes['tabId']) => {
    return tabId === activeTab;
  };

  return titles.map(({ title, tabId }, _i) => (
    <li
      className={clsx('text-sm h-full flex items-center capitalize', {
        'active-tab': tabIsActive(tabId),
      })}
      key={_i}
    >
      <Button asChild variant={'ghost'} className="h-full rounded-none">
        <Link
          href={hrefGenerator(tabId)}
          className={clsx('!px-1', {
            '!text-active-black !font-semibold': tabIsActive(tabId),
            '!text-inactive !font-normal': !tabIsActive(tabId),
          })}
        >
          {title}
        </Link>
      </Button>
    </li>
  ));
}

export default TitleRenderer;
