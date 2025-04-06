// import { SearchIcons } from "../Search";
import { useMemo } from "react";
import { DragDropProps, useDnD } from "./DnDContext";
import { SkillIcons } from "@utils";
import * as ICONS from "../../index";

export default () => {
  const [_, setType] = useDnD();
  const IconsComponent = useMemo(() => {
    const listItems = Object.entries(SkillIcons).map((icons) => {
      const [key, iconDetails] = icons;
      // @ts-ignore
      let Icon = ICONS[iconDetails.icon];

      if (Icon) {
        // @ts-ignore
        return (
          <div
            key={key}
            className="dndnode input"
            onDragStart={(event) =>
              onDragStart(event, {
                type: "icon",
                data: {
                  icon: `${key}`,
                  width: 20,
                  height: 20,
                },
              })
            }
            draggable
          >
            {Icon && <Icon width={60} height={60} />}
            {iconDetails.name}
          </div>
        );
      }
      return null;
    });
    return listItems;
  }, []);

  const onDragStart = (event: any, nodePayload: DragDropProps) => {
    if (setType) {
      setType(nodePayload);
    }
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div>
      {/* <SearchIcons /> */}

      <div className="tabs tabs-lift">
        <label className="tab">
          <input type="radio" name="my_tabs_4" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 me-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
          Input
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div
            className="dndnode input"
            onDragStart={(event) =>
              onDragStart(event, {
                type: "input",
                data: {
                  label: "input",
                },
              })
            }
            draggable
          >
            Input Node
          </div>
        </div>

        <label className="tab">
          <input type="radio" name="my_tabs_4" defaultChecked />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 me-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            />
          </svg>
          Default
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div
            className="dndnode input"
            onDragStart={(event) =>
              onDragStart(event, {
                type: "default",
                data: {
                  label: "default",
                },
              })
            }
            draggable
          >
            Default Node
          </div>
          <div
            className="dndnode input"
            onDragStart={(event) =>
              onDragStart(event, {
                type: "output",
                data: {
                  label: "output",
                },
              })
            }
            draggable
          >
            Output Node
          </div>
        </div>

        <label className="tab">
          <input type="radio" name="my_tabs_4" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 me-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          GCP
        </label>
        <div className="tab-content">
          {/* <div
            className="dndnode input"
            onDragStart={(event) =>
              onDragStart(event, {
                type: "icon",
                data: {
                  icon: "skillIconAbleton",
                  width: 50,
                  height: 50,
                },
              })
            }
            draggable
          >
            Athena
          </div> */}
          {IconsComponent}
        </div>
      </div>

      {/* <div className="drawer drawer-end">
        <input
          id="properties-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-side">
          <label
            htmlFor="properties-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};
