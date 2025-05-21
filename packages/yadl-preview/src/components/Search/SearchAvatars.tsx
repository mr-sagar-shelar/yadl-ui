import { useMemo, useState } from "react";
import { memo } from "react";
import { Avatar, AvatarNames } from "yadl-avatar";
import { DragDropProps, useDnD } from "../DnDContext";
import { AvatarTopStyle } from "./Constants";
import { AvatarProps } from "yadl-avatar/dist/components/AvatarComponent";

const SearchAvatarComponents = () => {
  const [currentTop, setCurrentTop] = useState<string>("");
  const [_, setType] = useDnD();
  const onDragStart = (event: any, nodePayload: DragDropProps) => {
    if (setType) {
      setType(nodePayload);
    }
    event.dataTransfer.effectAllowed = "move";
  };

  const renderTopOptions = () => {
    return AvatarTopStyle.map((fontSize) => {
      return <option key={fontSize.label}>{fontSize.label}</option>
    })
  }

  const AvatarComponent = useMemo(() => {
    const customProps: AvatarProps = {
      avatarStyle: "Circle",
      width: 100,
      height: 100
    };
    if (currentTop != "") {
      customProps["topType"] = currentTop;
    }
    const listItems = Object.entries(AvatarNames)
      .map((text) => {
        const [key, textDetails] = text;
        return (
          <div
            key={key}
            className="m-2 cursor-grab px-5 size-[100px]"
            onDragStart={(event) =>
              onDragStart(event, {
                type: "avatar",
                data: {
                  ...textDetails as AvatarProps,
                  ...customProps
                },
              })
            }
            draggable
          >
            <Avatar
              {...textDetails as AvatarProps}
              {...customProps}
              width={100}
              height={100}
            />
          </div>
        );
      });
    return listItems;
  }, [currentTop]);

  return (
    <>
      <div>
        <div className="flex flex-wrap gap-5 pb-5">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Font Size</legend>
            <select className="select" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setCurrentTop(event.target.value);
            }}>
              {renderTopOptions()}
            </select>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Font Size</legend>
            <select className="select" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setCurrentTop(event.target.value);
            }}>
              {renderTopOptions()}
            </select>
          </fieldset>
        </div>
        <div
          className={`grid grid-cols-1 overflow-auto w-full h-full`}
        >
          {AvatarComponent}
        </div>
      </div>
    </>
  );
};

const Memo = memo(SearchAvatarComponents);
export default Memo;
