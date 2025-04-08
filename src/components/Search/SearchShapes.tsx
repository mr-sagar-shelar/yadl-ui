import { memo } from "react";

const SearchShapes = () => {
  
  return (
    <>
      <div>
        <div className="px-10 py-5 ">
          <label className="input w-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search Icon"
            />
          </label>
        </div>
        <div className="grid grid-cols-3 overflow-auto w-full h-full">
          Search Shapes Components
        </div>
      </div>
    </>
  );
};

const Memo = memo(SearchShapes);
export default Memo;
