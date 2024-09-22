import Image from 'next/image';

import vanarsdelLogo from '@assets/logo.png';

import TitleRenderer from './titleRenderer';

function TitleStack() {
  return (
    <div className="h-full w-1/2 flex items-center">
      <div className="pr-4">
        <Image
          src={vanarsdelLogo.src}
          width={40}
          height={30}
          alt="Van Arsdel"
        />
      </div>
      <ul className="h-full flex items-center">
        <TitleRenderer
          titles={[
            { title: 'home', tabId: 'home' },
            { title: 'timeline', tabId: 'timeline' },
          ]}
        />
      </ul>
    </div>
  );
}

export default TitleStack;
