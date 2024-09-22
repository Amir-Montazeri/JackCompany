import { HomeNavProps } from '../typings';

export const navGroups: HomeNavProps[] = [
  {
    groupTitle: 'Group title',
    subgroups: [
      {
        groupTitle: 'Option',
        subgroups: [],
      },
      {
        groupTitle: 'Option',
        subgroups: [
          {
            groupTitle: 'Item',
            subgroups: [],
          },
          {
            groupTitle: 'Item',
            subgroups: [],
          },
          {
            groupTitle: 'Item',
            subgroups: [],
          },
          {
            groupTitle: 'Item',
            grouphref: '/',
          },
          {
            groupTitle: 'Item',
            subgroups: [],
          },
        ],
      },
    ],
  },
];
