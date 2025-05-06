import { useEffect, useMemo, useState } from "react";
import * as ThemeisleIcons from "yadl-themeisle-icons";
import { ThemeisleIconNames } from "yadl-themeisle-icons";
import { memo } from "react";
import { DragDropProps, useDnD } from "yadl-core-package";
import { CONSTANTS } from './Constants';

const SearchIcons = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [totalIcons, setTotalIcons] = useState<string>("");
  const [_, setType] = useDnD();
  const onDragStart = (event: any, nodePayload: DragDropProps) => {
    if (setType) {
      setType(nodePayload);
    }
    event.dataTransfer.effectAllowed = "move";
  };

  useEffect(() => {
    setTotalIcons(`${Object.entries(ThemeisleIconNames).length}`);
  }, [])

  const IconsComponent = useMemo(() => {
    const listItems = Object.entries(ThemeisleIconNames)
      .filter((icons) => {
        if (searchInput == "") {
          return true;
        }
        return icons[1].name.toLowerCase().includes(searchInput.toLowerCase());
      })
      .map((icons) => {
        const [key, iconDetails] = icons;
        // @ts-ignore
        let Icon = ThemeisleIcons[iconDetails.icon];

        if (Icon) {
          return (
            <div
              key={key}
              className="dndnode m-2"
              onDragStart={(event) =>
                onDragStart(event, {
                  type: "icon",
                  data: {
                    icon: `${key}`,
                    category: "themeisle",
                    width: CONSTANTS.themeisleWidth,
                    height: CONSTANTS.themeisleHeight
                  },
                })
              }
              draggable
              title={iconDetails.name}
            >
              {Icon && <Icon width={CONSTANTS.themeisleWidth} height={CONSTANTS.themeisleHeight} />}
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
            {`${IconsComponent.length}/${totalIcons}`}
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
        <div className="flex flex-wrap">
          {IconsComponent}
        </div>
      </div>
    </>
  );
};

const Memo = memo(SearchIcons);
export default Memo;
