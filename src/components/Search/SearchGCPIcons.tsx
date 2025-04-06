import { GCPIcons } from "@utils";
import { useMemo, useState } from "react";
import * as ICONS from "../../index";
import { memo } from "react";
import { DragDropProps, useDnD } from "../Preview/DnDContext";

const SearchGCPIcons = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [_, setType] = useDnD();
  const onDragStart = (event: any, nodePayload: DragDropProps) => {
    if (setType) {
      setType(nodePayload);
    }
    event.dataTransfer.effectAllowed = "move";
  };

  const IconsComponent = useMemo(() => {
    const listItems = Object.entries(GCPIcons)
      .filter((icons) => {
        if (searchInput == "") {
          return true;
        }
        return icons[1].name.toLowerCase().includes(searchInput.toLowerCase());
      })
      .map((icons) => {
        const [key, iconDetails] = icons;
        // @ts-ignore
        let Icon = ICONS[iconDetails.icon];

        if (Icon) {
          // @ts-ignore
          return (
            <div
              key={key}
              className="dndnode m-2"
              onDragStart={(event) =>
                onDragStart(event, {
                  type: "icon",
                  data: {
                    icon: `${key}`,
                    category: "gcp",
                  },
                })
              }
              draggable
              title={iconDetails.name}
            >
              {Icon && <Icon width={50} height={50} />}
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
        {/* <div className="grid grid-cols-5 gap-6 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-12 2xl:grid-cols-14 overflow-auto w-full h-full"> */}
        <div className="grid grid-cols-3 overflow-auto w-full h-full">
          {IconsComponent}
        </div>
      </div>
    </>
  );
};

const Memo = memo(SearchGCPIcons);
export default Memo;
