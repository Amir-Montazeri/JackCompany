interface CollapsableGroupsProps {
  subgroups: Array<HomeNavProps>;
}
interface LinkableGroupsProps {
  grouphref: string;
}
type GroupSortsProps = CollapsableGroupsProps | LinkableGroupsProps;
export type HomeNavProps = GroupSortsProps & {
  groupTitle: string;
};
