# YADL Skill Components

## Install

- `npm i yadl-skill-icons`

# How to use

Below is example on how to integrate YADL Skill Icons.

```ts
import { useMemo } from "react";
import * as SkillIcons from "yadl-skill-icons";
import { SkillIconNames } from "yadl-skill-icons";
import { memo } from "react";

const Icons = () => {
  const IconsComponent = useMemo(() => {
    const listItems = Object.entries(SkillIconNames)
      .map((icons) => {
        const [key, iconDetails] = icons;
        let Icon = SkillIcons[iconDetails.icon];

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