'use client';

import { GoBell } from 'react-icons/go';
import { RiTeamLine } from 'react-icons/ri';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { SlCalender } from 'react-icons/sl';

import { TabWrapperRenderer } from '@/features';

function Sidebar() {
  return (
    <section className="bg-light-gray h-18 sm:h-screen w-screen sm:w-18 flex items-center sm:block overflow-x-hidden fixed bottom-0 sm:top-0 left-0 z-20">
      <TabWrapperRenderer
        maxTabInRow={5}
        tabs={[
          {
            label: 'activity',
            Icon: GoBell,
            pathname: '/activity',
            isActive: false,
          },
          {
            label: 'chat',
            Icon: BiMessageRoundedDetail,
            pathname: '/chat',
            isActive: false,
          },
          {
            label: 'teams',
            Icon: RiTeamLine,
            pathname: '/teams',
            isActive: false,
          },
          {
            label: 'calender',
            Icon: SlCalender,
            pathname: '/calender',
            isActive: false,
          },
          {
            label: 'calls',
            Icon: RiTeamLine,
            pathname: '/calls',
            isActive: true,
          },
        ]}
      />
    </section>
  );
}

export default Sidebar;
