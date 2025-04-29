import { memo } from "react";
import { SearchAwsIcons } from "yadl-aws-icons";
import { SearchAzureIcons } from "yadl-azure-icons";
import { SearchGcpIcons } from "yadl-gcp-icons";
import { SearchSkillIcons } from "yadl-skill-icons";
import { SearchThemeisleIcons } from "yadl-themeisle-icons";
import { SearchUndrawIcons } from "yadl-undraw-icons";
import { SearchTextComponents } from "yadl-ui-components";

// import {
//   SearchBoxes,
//   SearchShapes,
// } from "./index";

const SearchComponents = () => {
  return (
    <>
      <div className="tabs tabs-box p-5 h-full">
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
      </div>
    </>
  );
};

const Memo = memo(SearchComponents);
export default Memo;
