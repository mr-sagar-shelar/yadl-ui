import { memo } from "react";
import {
  SearchSkillIcons,
  SearchGCPIcons,
  SearchAWSIcons,
  SearchAzureIcons,
  SearchThemeIsleIcons,
  SearchUndrawIcons,
} from "./index";

const SearchIcons = () => {
  return (
    <>
      <div className="tabs tabs-box p-5 w-100 h-full overflow-auto">
        <input
          type="radio"
          name="searchIconTabs"
          className="tab"
          aria-label="Skill Icons"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <SearchSkillIcons />
        </div>
        <input
          type="radio"
          name="searchIconTabs"
          className="tab"
          aria-label="GCP"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <SearchGCPIcons />
        </div>

        <input
          type="radio"
          name="searchIconTabs"
          className="tab"
          aria-label="AWS"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <SearchAWSIcons />
        </div>

        <input
          type="radio"
          name="searchIconTabs"
          className="tab"
          aria-label="Azure"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <SearchAzureIcons />
        </div>
        <input
          type="radio"
          name="searchIconTabs"
          className="tab"
          aria-label="Themeisle"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <SearchThemeIsleIcons />
        </div>
        <input
          type="radio"
          name="searchIconTabs"
          className="tab"
          aria-label="Undraw"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <SearchUndrawIcons />
        </div>
      </div>
    </>
  );
};

const Memo = memo(SearchIcons);
export default Memo;
