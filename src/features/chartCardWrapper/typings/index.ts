interface ContentTabProps {
  title: string;
  tabId: string;
}

export interface ContentTabsProps {
  show: boolean;
  tabs: ContentTabProps[];
  onClick?: (tabId: ContentTabProps['tabId']) => void;
  activeTabId: ContentTabProps['tabId'];
}
