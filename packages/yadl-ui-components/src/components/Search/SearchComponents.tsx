import { memo } from "react";
import SearchBoxes from "./SearchBoxes"


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
          <SearchBoxes />
        </div>
      </div>
    </>
  );
};

const Memo = memo(SearchComponents);
export default Memo;
