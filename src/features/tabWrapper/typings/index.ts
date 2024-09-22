import { IconType } from 'react-icons';

interface TabCardLink {
  pathname: string;
}
interface TabCardClickable {
  onClick: () => void;
}
export type TabCardConditionals = TabCardClickable | TabCardLink;

export type TabCardPropsTypes = {
  Icon: IconType;
  label?: string;
  defaultClassNames?: string;
  activatedClassNames?: string;
  isActive: boolean;
} & TabCardConditionals;
