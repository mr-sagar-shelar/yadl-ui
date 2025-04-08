import { TextNames } from "@utils";
import { useMemo, useState } from "react";
import * as ICONS from "../../index";
import { memo } from "react";
import { DragDropProps, useDnD } from "../Preview/DnDContext";
import FontPicker from "react-fontpicker-ts";
import "react-fontpicker-ts/dist/index.css";

const SearchTextComponents = () => {
  const [currentFont, setCurrentFont] = useState<string>("Audiowide");
  const [_, setType] = useDnD();
  const onDragStart = (event: any, nodePayload: DragDropProps) => {
    if (setType) {
      setType(nodePayload);
    }
    event.dataTransfer.effectAllowed = "move";
  };

  const TextComponent = useMemo(() => {
    const listItems = Object.entries(TextNames).map((icons) => {
      const [key, textDetails] = icons;
      // @ts-ignore
      let Component = ICONS[textDetails.component];

      if (Component) {
        // @ts-ignore
        return (
          <div
            key={key}
            className="m-2 cursor-grab"
            onDragStart={(event) =>
              onDragStart(event, {
                type: "text",
                data: {
                  icon: `${key}`,
                  classes: textDetails.classes,
                  text: textDetails.text,
                  fontFamily: currentFont,
                  props: textDetails.props,
                },
              })
            }
            draggable
            title={textDetails.name}
          >
            {Component && (
              <Component
                text={textDetails.text}
                classes={textDetails.classes}
              />
            )}
          </div>
        );
      }
      return null;
    });
    return listItems;
  }, [currentFont]);
  return (
    <>
      <div>
        <div className="px-10 py-5 ">
          <label className="w-full">Select font</label>
          <FontPicker
            defaultValue={"Audiowide"}
            autoLoad
            value={(font2: string) => setCurrentFont(font2)}
          />
        </div>
        <div
          style={{ fontFamily: currentFont }}
          className="grid grid-cols-1 overflow-auto w-full h-full text-2xl"
        >
          {TextComponent}
        </div>
      </div>
    </>
  );
};

const Memo = memo(SearchTextComponents);
export default Memo;
