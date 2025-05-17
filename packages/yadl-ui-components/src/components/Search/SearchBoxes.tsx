import { useMemo } from "react";
import * as Boxes from "../Box/index";
import { memo } from "react";
import { BoxNames } from "@utils";

const SearchBoxes = () => {
  const IconsComponent = useMemo(() => {
    const listItems = Object.entries(BoxNames)
      .map((icon) => {
        const [key, boxDetails] = icon;
        // @ts-ignore
        let Icon = Boxes[boxDetails.component];

        if (Icon) {
          return (
            <div
              key={key}
              title={boxDetails.name}
              className="p-5"
            >
              {Icon && <Icon {...boxDetails.props} />}
            </div>
          );
        }
        return null;
      });
    return listItems;
  }, []);
  return (
    <>
      <div>
        <div className="flex flex-wrap">
          {IconsComponent}
        </div>
      </div>
    </>
  );
};

const Memo = memo(SearchBoxes);
export default Memo;
