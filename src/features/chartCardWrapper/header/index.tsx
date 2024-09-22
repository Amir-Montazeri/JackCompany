import { FiMoreHorizontal } from 'react-icons/fi';

import { Button } from '@/components/ui/button';
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import clsx from 'clsx';

export interface HeadersProps {
  title: string;
  description: string;
  className?: { card?: string };
}

function Header({ title, description, className }: HeadersProps) {
  return (
    <CardHeader
      className={clsx('p-4 flex justify-between flex-row', className?.card)}
    >
      <div>
        <CardTitle className="text-sm text-active-black font-bold capitalize">
          {title}
        </CardTitle>
        <CardDescription className="text-xs text-inactive font-light">
          {description}
        </CardDescription>
      </div>
      <div>
        <Button variant={'ghost'} size={'icon'}>
          <FiMoreHorizontal />
        </Button>
      </div>
    </CardHeader>
  );
}

export default Header;
