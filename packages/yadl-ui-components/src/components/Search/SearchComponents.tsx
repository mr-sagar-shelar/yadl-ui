import { memo } from "react";
import SearchBoxes from "./SearchBoxes"


const SearchComponents = () => {
  return (
    <>
      <div className="w-full px-5 h-full overflow-hidden pb-15">
        <SearchBoxes />
      </div>
    </>
  );
};

const Memo = memo(SearchComponents);
export default Memo;
