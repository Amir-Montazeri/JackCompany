import React from 'react';
import clsx from 'clsx';

import { Button } from '@/components/ui/button';
import { TabCardPropsTypes } from '../typings';
import LinkTagsRenderer from './linkTagsRenderer';

function TabWrapperCard({
  label,
  Icon,
  isActive,
  ...props
}: TabCardPropsTypes) {
  return (
    <Button
      variant={'ghost'}
      size={'sm'}
      className={clsx('w-full h-16', {
        'text-inactive': !isActive,
        'text-active': isActive,
      })}
    >
      <LinkTagsRenderer {...props}>
        <Icon size={'27px'} strokeWidth={'0'} />
        {label && <p className="mt-1">{label}</p>}
      </LinkTagsRenderer>
    </Button>
  );
}

export default TabWrapperCard;
