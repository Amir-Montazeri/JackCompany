import HomeContentCharts from './contentCharts';
import HomeNav from './nav';
import { navGroups } from './nav/groups';

function VanArsdelHome() {
  return (
    <div className="relative flex min-h-screen">
      <div className="min-h-screen w-52 border-r-2 border-light-gray overflow-x-auto">
        <HomeNav groups={navGroups} />
      </div>
      <div className="w-full flex flex-wrap gap-2 p-5">
        <HomeContentCharts />
      </div>
    </div>
  );
}

export default VanArsdelHome;
