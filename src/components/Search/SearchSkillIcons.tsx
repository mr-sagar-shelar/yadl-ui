import { SkillIconNames } from "@utils";
import { useMemo } from "react";
import * as ICONS from "../../index";
import { memo } from "react";

const SearchSkillIcons = () => {
  console.log(Object.keys(SkillIconNames).length);
  const AllIcons = useMemo(() => {
    const listItems = Object.values(SkillIconNames).map((iconName) => {
      // @ts-ignore
      let Icon = ICONS[iconName];

      if (Icon) {
        // @ts-ignore
        return (
          <div key={iconName}>{Icon && <Icon width={60} height={60} />}</div>
        );
      }
      return null;
    });
    return listItems;
  }, []);
  return (
    <>
      <div className="p-10 grid grid-cols-5 gap-6 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-12 2xl:grid-cols-14 overflow-auto w-full h-full">
        {AllIcons}
      </div>
    </>
  );
};

const Memo = memo(SearchSkillIcons);
export default Memo;
