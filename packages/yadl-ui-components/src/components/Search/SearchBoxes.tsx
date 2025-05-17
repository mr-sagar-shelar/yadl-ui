import { useMemo } from "react";
import * as Boxes from "../Box/index";
import { memo } from "react";
import { BoxNames } from "@utils";

const SearchBoxes = () => {
  const IconsComponent = useMemo(() => {
    const listItems = Object.entries(BoxNames)
      .map((icons) => {
        const [key, iconDetails] = icons;
        // @ts-ignore
        let Icon = Boxes[iconDetails.component];

        if (Icon) {
          return (
            <div
              key={key}
              title={iconDetails.name}
            >
              {Icon && <Icon {...iconDetails.props} />}
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
