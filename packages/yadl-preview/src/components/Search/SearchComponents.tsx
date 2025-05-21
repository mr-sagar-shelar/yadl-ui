import { memo } from "react";
import SearchAwsIcons from "./SearchAwsIcons"
import SearchAzureIcons from "./SearchAzureIcons"
import SearchGcpIcons from "./SearchGcpIcons"
import SearchSkillIcons from "./SearchSkillIcons"
import SearchThemeisleIcons from "./SearchThemeisleIcons"
import SearchUndrawIcons from "./SearchUndrawIcons"
import SearchTextComponents from "./SearchTextComponents"
import SearchBoxes from "./SearchBoxes"
import SearchAvatars from "./SearchAvatars"

const SearchComponents = () => {
  return (
    <>
      <div className="tabs tabs-box p-5 h-full overflow-hidden pb-15">
        <input
          type="radio"
          name="searchIconTabs"
          className="tab"
          aria-label="Skill Icons"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 overflow-auto">
          <SearchSkillIcons />
        </div>

        <input
          type="radio"
          name="searchIconTabs"
          className="tab"
          aria-label="GCP"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 overflow-auto">
          <SearchGcpIcons />
        </div>

        <input
          type="radio"
          name="searchIconTabs"
          className="tab"
          aria-label="AWS"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 overflow-auto">
          <SearchAwsIcons />
        </div>

        <input
          type="radio"
          name="searchIconTabs"
          className="tab"
          aria-label="Azure"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 overflow-auto">
          <SearchAzureIcons />
        </div>

        <input
          type="radio"
          name="searchIconTabs"
          className="tab"
          aria-label="Themeisle"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 overflow-auto">
          <SearchThemeisleIcons />
        </div>

        <input
          type="radio"
          name="searchIconTabs"
          className="tab"
          aria-label="Undraw"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 overflow-auto">
          <SearchUndrawIcons />
        </div>
        <input
          type="radio"
          name="searchIconTabs"
          className="tab"
          aria-label="Text"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 overflow-auto">
          <SearchTextComponents />
        </div>

        <input
          type="radio"
          name="searchIconTabs"
          className="tab"
          aria-label="Boxes"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 overflow-auto">
          <SearchBoxes />
        </div>

        <input
          type="radio"
          name="searchIconTabs"
          className="tab"
          aria-label="Avatars"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 overflow-auto">
          <SearchAvatars />
        </div>
      </div>
    </>
  );
};

const Memo = memo(SearchComponents);
export default Memo;
