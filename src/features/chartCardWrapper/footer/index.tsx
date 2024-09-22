import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';
import clsx from 'clsx';

export interface FooterProps {
  label: string;
  className?: {
    card?: string;
  };
}

function Footer({ label, className }: FooterProps) {
  return (
    <CardFooter className={clsx('p-1', className?.card)}>
      <Button variant={'link'} className="text-theme-purple">
        {label}
      </Button>
    </CardFooter>
  );
}

export default Footer;
