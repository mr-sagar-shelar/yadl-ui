import { BoxNames } from "@utils";
import { useMemo, useState } from "react";
import * as ICONS from "../../index";
import { memo } from "react";
import { DragDropProps, useDnD } from "../Preview/DnDContext";

const SearchBoxes = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [_, setType] = useDnD();
  const onDragStart = (event: any, nodePayload: DragDropProps) => {
    if (setType) {
      setType(nodePayload);
    }
    event.dataTransfer.effectAllowed = "move";
  };

  const AllComponent = useMemo(() => {
    const listItems = Object.entries(BoxNames)
      .filter((icons) => {
        if (searchInput == "") {
          return true;
        }
        return icons[1].name.toLowerCase().includes(searchInput.toLowerCase());
      })
      .map((icons) => {
        const [key, boxDetails] = icons;
        // @ts-ignore
        let Component = ICONS[boxDetails.component];
        if (Component) {
          // @ts-ignore
          return (
            <div
              key={key}
              className="m-2 cursor-grab flex justify-center align-middle"
              onDragStart={(event) =>
                onDragStart(event, {
                  type: "box",
                  data: {
                    component: `${key}`,
                    props: boxDetails.props,
                  },
                })
              }
              draggable
              title={boxDetails.name}
            >
              {Component && <Component {...boxDetails.props} />}
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
        <div className="grid grid-cols-1 overflow-auto w-full h-full">
          {AllComponent}
        </div>
      </div>
    </>
  );
};

const Memo = memo(SearchBoxes);
export default Memo;
