import { memo } from "react";
import { SearchAwsIcons } from "yadl-aws-icons";
import { SearchAzureIcons } from "yadl-azure-icons";
import { SearchGcpIcons } from "yadl-gcp-icons";
import { SearchSkillIcons } from "yadl-skill-icons";
// import { SearchGcpIcons } from "yadl-themeisle-icons";
// import {
//   SearchSkillIcons,
//   SearchGCPIcons,
//   SearchAWSIcons,
//   SearchAzureIcons,
//   SearchThemeIsleIcons,
//   SearchUndrawIcons,
//   SearchBoxes,
//   SearchTextComponents,
//   SearchShapes,
// } from "./index";

const SearchComponents = () => {
  return (
    <>
      <div className="tabs tabs-box p-5 w-100 h-full">
        <input
          type="radio"
          name="searchIconTabs"
          className="tab"
          aria-label="Skill Icons"
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

        {/* <input
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
        </div> */}
      </div>
    </>
  );
};

const Memo = memo(SearchComponents);
export default Memo;
