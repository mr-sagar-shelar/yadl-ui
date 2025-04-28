# YADL AWS Icons

## Install

- `npm i yadl-aws-icons`

# How to use

Below is example on how to integrate YADL AWS Icons.

```ts
import { useMemo } from "react";
import * as AWSIcons from "yadl-aws-icons";
import { AwsIconNames } from "yadl-aws-icons";
import { memo } from "react";

const Icons = () => {
  const IconsComponent = useMemo(() => {
    const listItems = Object.entries(AwsIconNames)
      .map((icons) => {
        const [key, iconDetails] = icons;
        let Icon = AWSIcons[iconDetails.icon];

        if (Icon) {
          return (
            <div
              key={key}
              className="dndnode m-2"
              title={iconDetails.name}
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
    <div className="flex flex-wrap">
      {IconsComponent}
    </div>
  );
};

const Memo = memo(Icons);
export default Memo;
