import { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import * as ICONS from "../../index";
import { SkillIconNames } from "@utils";

export interface IconNodeProps {
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
  const iconNamePresent: boolean = SkillIconNames[icon] != undefined;
  if (iconNamePresent) {
    // @ts-ignore
    Icon = ICONS[SkillIconNames[icon]] ?? null;
  }

  return (
    <label htmlFor="properties-drawer">
      <div
        onClick={() => {
          console.log("Clicked");
        }}
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
