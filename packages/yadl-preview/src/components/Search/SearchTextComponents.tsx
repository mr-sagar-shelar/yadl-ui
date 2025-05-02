import { useMemo, useState } from "react";
import { TextNames } from "yadl-ui-components";
import { memo } from "react";
import { Text } from "yadl-ui-components";
import { DragDropProps, useDnD } from "yadl-core-package";
import FontPicker from "react-fontpicker-ts";
import "react-fontpicker-ts/dist/index.css";

const fontSizes = [
  {
    key: "text-xs",
    label: "Extra small"
  },
  {
    key: "text-sm",
    label: "Small"
  },
  {
    key: "text-base",
    label: "Base"
  },
  {
    key: "text-lg",
    label: "Large"
  },
  {
    key: "text-xl",
    label: "Extra large"
  },
  {
    key: "text-2xl",
    label: "2XL"
  },
  {
    key: "text-3xl",
    label: "3XL"
  },
  {
    key: "text-4xl",
    label: "4XL"
  },
  {
    key: "text-5xl",
    label: "5XL"
  },
  {
    key: "text-6xl",
    label: "6XL"
  },
  {
    key: "text-7xl",
    label: "7XL"
  },
  {
    key: "text-8xl",
    label: "8XL"
  },
  {
    key: "text-9xl",
    label: "9XL"
  }
]

const SearchTextComponents = () => {
  const [currentFont, setCurrentFont] = useState<string>("Audiowide");
  const [currentText, setCurrentText] = useState<string>("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
  const [currentFontSize, setCurrentFontSize] = useState<string>("text-2xl");
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
      return (
        <div
          key={key}
          className="m-2 cursor-grab px-5"
          onDragStart={(event) =>
            onDragStart(event, {
              type: "text",
              data: {
                icon: `${key}`,
                classes: `${textDetails.classes} ${currentFontSize}`,
                text: currentText,
                fontFamily: currentFont,
                props: textDetails.props,
              },
            })
          }
          draggable
          title={textDetails.name}
        >
          <Text
            text={currentText}
            classes={`${textDetails.classes} ${currentFontSize}`}
          />
        </div>
      );
    });
    return listItems;
  }, [currentFont, currentFontSize, currentText]);

  const renderOptions = () => {
    return fontSizes.map((fontSize) => {
      return <option key={fontSize.label}>{fontSize.label}</option>
    })
  }
  return (
    <>
      <div>
        <div className="px-10 pt-5">
          <label className="w-full">Select font:</label>
          <FontPicker
            defaultValue={"Audiowide"}
            autoLoad
            value={(font2: string) => setCurrentFont(font2)}
          />
        </div>
        <div className="px-10 pt-5">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Text</legend>
            <input value={currentText} type="text" className="input w-full" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCurrentText(event.target.value);
            }} />
          </fieldset>
        </div>
        <div className="px-10 py-5">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Font Size</legend>
            <select defaultValue={"2XL"} className="select" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              const foundFontSize = fontSizes.find(fontSize => fontSize.label == event.target.value);
              if (foundFontSize) {
                setCurrentFontSize(foundFontSize.key);
              }
            }}>
              {renderOptions()}
            </select>
          </fieldset>

        </div>
        <div
          style={{ fontFamily: currentFont }}
          className={`grid grid-cols-1 overflow-auto w-full h-full ${currentFontSize}`}
        >
          {TextComponent}
        </div>
      </div>
    </>
  );
};

const Memo = memo(SearchTextComponents);
export default Memo;
