import { GCPIcons } from "@utils";
import { useMemo, useState } from "react";
import * as ICONS from "../../index";
import { memo } from "react";

const SearchGCP = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const GCPIconsComponent = useMemo(() => {
    const listItems = Object.values(GCPIcons)
      .filter((iconDetails) => {
        if (searchInput == "") {
          return true;
        }
        return iconDetails.name
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      })
      .map((iconDetails) => {
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
  }, [searchInput]);
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
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setSearchInput(event.target.value);
              }}
            />
          </label>
        </div>
        <div className="grid grid-cols-5 gap-6 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-12 2xl:grid-cols-14 overflow-auto w-full h-full">
          {GCPIconsComponent}
        </div>
      </div>
    </>
  );
};

const Memo = memo(SearchGCP);
export default Memo;
