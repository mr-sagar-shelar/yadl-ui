import { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import * as ICONS from "../../index";
import { IconNames } from "./IconNames";

interface IconNodeProps {
  data: {
    icon: string;
    width?: number;
    height?: number;
  };
}
function IconNode(props: IconNodeProps) {
  const {
    data: { icon, width = 100, height = 100 },
  } = props;

  let Icon = null;
  const iconNamePresent: boolean = IconNames[icon] != undefined;
  if (iconNamePresent) {
    Icon = ICONS[IconNames[icon]] ?? null;
  }

  return (
    <label htmlFor="properties-drawer">
      <div
        onClick={() => {
          console.log("Clicked");
        }}
        // className="drawer-toggle"
      >
        {iconNamePresent && <Icon width={width} height={height} />}
        <Handle
          type="target"
          position={Position.Top}
          className="w-16 !bg-teal-500"
        />
        <Handle
          type="source"
          position={Position.Bottom}
          className="w-16 !bg-teal-500"
        />
      </div>
    </label>
  );
}

const Memo = memo(IconNode);

export default Memo;
