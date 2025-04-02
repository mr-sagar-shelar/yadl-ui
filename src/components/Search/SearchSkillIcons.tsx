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
    const listItems = Object.values(IconNames).map((iconName) => {
      // @ts-ignore
      let Icon = ICONS[iconName];

      if (Icon) {
        // @ts-ignore
        return (
          <div key={iconName}>{Icon && <Icon width={100} height={100} />}</div>
        );
      }
      return null;
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
