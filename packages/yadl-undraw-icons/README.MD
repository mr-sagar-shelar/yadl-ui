# YADL Undraw Components

## Install

- `npm i yadl-undraw-icons`

# How to use

Below is example on how to integrate YADL Undraw Icons.

```ts
import { useMemo } from "react";
import * as UndrawIcons from "yadl-undraw-icons";
import { UndrawIconNames } from "yadl-undraw-icons";
import { memo } from "react";

const Icons = () => {
  const IconsComponent = useMemo(() => {
    const listItems = Object.entries(UndrawIconNames)
      .map((icons) => {
        const [key, iconDetails] = icons;
        let Icon = UndrawIcons[iconDetails.icon];

        if (Icon) {
          return (
            <div
              key={key}
              className="dndnode m-2"
              title={iconDetails.name}
              style={{ padding: 10 }}
            >
              {Icon && <Icon width={50} height={50} />}
            </div>
          );
        }
        return null;
      });
    return listItems;
  }, []);
  return (
    <div style={{ height: "100%", width: "100%", overflow: "visible" }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {IconsComponent}
      </div>
    </div>
  );
};

const Memo = memo(Icons);
export default Memo;