'use client';

import { useState } from 'react';
import { IoIosMore } from 'react-icons/io';

import TabWrapperCard from '../card';
import { TabCardConditionals, TabCardPropsTypes } from '../typings';

interface TWRProps {
  tabs: NonEmptyArray<TabCardPropsTypes>;
  maxTabInRow?: number;
}

function TabWrapperRenderer({ tabs, maxTabInRow = 5 }: TWRProps) {
  const [renderingTabs, setRenderingTabs] = useState<TabCardPropsTypes[]>(() =>
    tabs.slice(0, Math.min(tabs.length, maxTabInRow))
  );

  // useEffect(() => {
  // const indexOfActiveTab = tabs.findIndex((tab) => tab.isActive === true);
  // if (indexOfActiveTab > renderedTabs.length) {
  //   setRenderingTabs((prevState) => {
  // return prevState.splice(
  //   renderingTabs.length,
  //   1,
  //   tabs[indexOfActiveTab]
  // );
  // return prevState;
  // });
  // }
  // TODO: hame ro bebar to ye function ke tabs.slice anjam mide va hamzaman check kone in tab active ee to list hast ya na!
  // }, []);

  const onMoreButtonClicked = () => {
    setRenderingTabs((prevState) => {
      if (prevState.length < tabs.length) {
        return tabs;
      }
      return tabs.slice(0, Math.min(tabs.length, maxTabInRow));
    });
  };

  const renderedTabs = renderingTabs.map((tab, _i) => {
    const conditionalProperties = (): TabCardConditionals => {
      if ('pathname' in tab) {
        return { pathname: tab.pathname };
      } else if ('onClick' in tab) {
        return { onClick: tab.onClick };
      }
      throw new Error('Invalid tab property!');
    };

    return (
      <TabWrapperCard
        key={_i}
        label={tab.label}
        Icon={tab.Icon}
        isActive={tab.isActive}
        {...conditionalProperties()}
      />
    );
  });
  return (
    <>
      {renderedTabs}
      {renderingTabs.length < tabs.length && (
        <TabWrapperCard
          Icon={IoIosMore}
          isActive={false}
          onClick={onMoreButtonClicked}
        />
      )}
    </>
  );
}

export default TabWrapperRenderer;
