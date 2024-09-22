import Link from 'next/link';

import { TabCardConditionals } from '../../typings';

interface LTRProps {
  children: React.ReactNode;
}

function LinkTagsRenderer({
  children,
  ...props
}: LTRProps & TabCardConditionals) {
  if ('pathname' in props)
    return (
      <Link
        href={props.pathname}
        className="flex flex-col items-center justify-center text-xs font-medium capitalize"
      >
        {children}
      </Link>
    );
  else if ('onClick' in props)
    return (
      <div
        className="h-full w-full flex justify-center items-center"
        onClick={props.onClick}
      >
        {children}
      </div>
    );
}

export default LinkTagsRenderer;
