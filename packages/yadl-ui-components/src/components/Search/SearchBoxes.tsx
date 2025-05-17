import { useMemo, useState } from "react";
import * as Boxes from "../Box/index";
import { memo } from "react";
import { BoxNames } from "@utils";
import { BorderStyles, BorderRadius } from "./Constants";

const SearchBoxes = () => {
  const [currentBorderStyle, setCurrentBorderStyle] = useState<string>(BorderStyles[0].key);
  const [currentBorderRadius, setCurrentBorderRadius] = useState<string>(BorderRadius[0].key);
  const IconsComponent = useMemo(() => {
    const listItems = Object.entries(BoxNames)
      .map((icon) => {
        const [key, boxDetails] = icon;
        // @ts-ignore
        let Box = Boxes[boxDetails.component];

        if (Box) {
          return (
            <div
              key={key}
              title={boxDetails.name}
            >
              {Box && <Box {...boxDetails.props} classes={`${boxDetails.props.classes} ${currentBorderRadius} ${currentBorderStyle}`} />}
            </div>
          );
        }
        return null;
      });
    return listItems;
  }, [currentBorderStyle, currentBorderRadius]);

  const renderBorderStyles = () => {
    return BorderStyles.map((borderStyle) => {
      return <option key={borderStyle.label}>{borderStyle.label}</option>
    })
  }

  const renderBorderRadius = () => {
    return BorderRadius.map((borderRadius) => {
      return <option key={borderRadius.label}>{borderRadius.label}</option>
    })
  }

  return (
    <>
      <div>
        <div className="py-5">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Border Style</legend>
            <select className="select small" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              const foundFontSize = BorderStyles.find(borderStyle => borderStyle.label == event.target.value);
              if (foundFontSize) {
                setCurrentBorderStyle(foundFontSize.key);
              }
            }}>
              {renderBorderStyles()}
            </select>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Border Radius</legend>
            <select className="select small" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              const borderRadius = BorderRadius.find(radius => radius.label == event.target.value);
              if (borderRadius) {
                setCurrentBorderRadius(borderRadius.key);
              }
            }}>
              {renderBorderRadius()}
            </select>
          </fieldset>
        </div>
        <div className="flex flex-wrap gap-5">
          {IconsComponent}
        </div>
      </div>
    </>
  );
};

const Memo = memo(SearchBoxes);
export default Memo;
