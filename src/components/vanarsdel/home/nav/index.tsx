import clsx from 'clsx';
import { IoIosArrowDown } from 'react-icons/io';

import { Button } from '@/components/ui/button';
import { HomeNavProps } from './typings';

interface HNProps {
  groups: Array<HomeNavProps>;
}

function HomeNav({ groups }: HNProps) {
  const subgroup = (props: HomeNavProps) => {
    if ('subgroups' in props) {
      return <HomeNav groups={props.subgroups} />;
    }
  };

  return groups.map((group, _i) => {
    const hasSubGroup = 'subgroups' in group;

    return (
      <ul key={_i} className="text-collapsable-label pl-6">
        <Button variant={'link'} className="p-0">
          <li className="flex items-center cursor-pointer">
            {hasSubGroup && <IoIosArrowDown className="mr-1" size={'15px'} />}
            <p className={clsx({ 'pl-5': !hasSubGroup })}>{group.groupTitle}</p>
          </li>
        </Button>
        {hasSubGroup && subgroup(group)}
      </ul>
    );
  });
}

export default HomeNav;
