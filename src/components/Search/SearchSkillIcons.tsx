import { IconNames } from "@utils";
import { useMemo } from "react";
import * as ICONS from "../../index";

export type SearchSkillIconsProps = {
  width?: number;
  height?: number;
};

const SearchSkillIcons = (props: SearchSkillIconsProps) => {
  console.log(Object.keys(IconNames).length);
  const AllIcons = useMemo(() => {
    const listItems = Object.keys(IconNames).map((iconName) => {
      const iconNamePresent: boolean = IconNames[iconName] != undefined;
      let Icon = null;

      if (iconNamePresent) {
        // @ts-ignore
        Icon = ICONS[IconNames[iconName]] ?? null;
      }
      return (
        <div key={iconName}>{Icon && <Icon width={100} height={100} />}</div>
      );
    });
    return listItems;
  }, []);
  return (
    <>
      <div className="grid xs:grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 overflow-auto">
        {AllIcons}
      </div>
    </>
  );
};

export default SearchSkillIcons;
