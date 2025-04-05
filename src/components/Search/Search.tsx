import { SkillIcons } from "@utils";
import { useMemo, useState } from "react";
import * as ICONS from "../../index";
import { memo } from "react";
import SearchGCP from "./SearchGCP";

const SearchSkillIcons = () => {
  const [searchGcpIcon, setSearchGcpIcon] = useState<string>("");
  const SkillIconsComponent = useMemo(() => {
    const listItems = Object.values(SkillIcons).map((iconDetails) => {
      // @ts-ignore
      let Icon = ICONS[iconDetails.icon];

      if (Icon) {
        // @ts-ignore
        return (
          <div key={iconDetails.icon}>
            {Icon && <Icon width={60} height={60} />}
            {iconDetails.name}
          </div>
        );
      }
      return null;
    });
    return listItems;
  }, []);

  return (
    <>
      <div className="tabs tabs-box p-5  w-full h-full">
        <input
          type="radio"
          name="searchIconTabs"
          className="tab"
          aria-label="Skill Icons"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="grid grid-cols-5 gap-6 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-12 2xl:grid-cols-14 overflow-auto w-full h-full">
            Skill Icons
          </div>
        </div>
        <input
          type="radio"
          name="searchIconTabs"
          className="tab"
          aria-label="GCP"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <SearchGCP />
        </div>

        <input
          type="radio"
          name="searchIconTabs"
          className="tab"
          aria-label="AWS"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="grid grid-cols-5 gap-6 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-12 2xl:grid-cols-14 overflow-auto w-full h-full">
            AWS
          </div>
        </div>

        <input
          type="radio"
          name="searchIconTabs"
          className="tab"
          aria-label="Azure"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="grid grid-cols-5 gap-6 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-12 2xl:grid-cols-14 overflow-auto w-full h-full">
            Azure
          </div>
        </div>
        <input
          type="radio"
          name="searchIconTabs"
          className="tab"
          aria-label="Themeisle"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 overflow-auto w-full h-full">
            ThemeIsle
          </div>
        </div>
        <input
          type="radio"
          name="searchIconTabs"
          className="tab"
          aria-label="Undraw"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-auto w-full h-full">
            Undraw
          </div>
        </div>
      </div>
    </>
  );
};

const Memo = memo(SearchSkillIcons);
export default Memo;
