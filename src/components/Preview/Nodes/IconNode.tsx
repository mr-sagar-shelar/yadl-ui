import { memo, useState } from "react";
import {
  Handle,
  Position,
  NodeResizer,
  ResizeDragEvent,
  ResizeParamsWithDirection,
} from "@xyflow/react";
import * as ICONS from "../../index";
import {
  AzureIcons,
  // SkillIcons,
  GCPIcons,
  UndrawIcons,
  ThemeisleIcons,
} from "@utils";
import * as AWSIcons from "yadl-aws-icons";
import { AwsIconNames } from "yadl-aws-icons";
// import * as SkillIcons from "yadl-skill-icons";
// import { SkillIconNames } from "yadl-skill-icons";

export interface IconNodeProps {
  data: {
    icon: string;
    width?: number;
    height?: number;
    category?: string;
  };
  selected: boolean;
}
function IconNode(props: IconNodeProps) {
  const {
    data: { icon, width = 25, height = 25, category = "skill" },
    selected = false,
  } = props;
  const [currentWidth, setCurrentWidth] = useState<number>(width);
  const [currentHeight, setCurrentHeight] = useState<number>(height);

  let iconNamePresent: boolean = false;
  let Icon = null;

  switch (category) {
    case "aws":
      iconNamePresent = AwsIconNames[icon] != undefined;
      if (iconNamePresent) {
        // @ts-ignore
        Icon = AWSIcons[AwsIconNames[icon].icon] ?? null;
      }
      break;
    case "gcp":
      iconNamePresent = GCPIcons[icon] != undefined;
      if (iconNamePresent) {
        // @ts-ignore
        Icon = ICONS[GCPIcons[icon].icon] ?? null;
      }
      break;
    // case "skill":
    //   iconNamePresent = SkillIconNames[icon] != undefined;
    //   if (iconNamePresent) {
    //     // @ts-ignore
    //     Icon = SkillIcons[SkillIconNames[icon].icon] ?? null;
    //   }
    //   break;
    case "azure":
      iconNamePresent = AzureIcons[icon] != undefined;
      if (iconNamePresent) {
        // @ts-ignore
        Icon = ICONS[AzureIcons[icon].icon] ?? null;
      }
      break;
    case "undraw":
      iconNamePresent = UndrawIcons[icon] != undefined;
      if (iconNamePresent) {
        // @ts-ignore
        Icon = ICONS[UndrawIcons[icon].icon] ?? null;
      }
      break;
    case "themeisle":
      iconNamePresent = ThemeisleIcons[icon] != undefined;
      if (iconNamePresent) {
        // @ts-ignore
        Icon = ICONS[ThemeisleIcons[icon].icon] ?? null;
      }
      break;
  }

  return (
    <label htmlFor="properties-drawer">
      <div
        onClick={() => {
          console.log("Clicked");
        }}
      >
        {iconNamePresent && (
          <Icon width={currentWidth} height={currentHeight} />
        )}
        <NodeResizer
          color="#ff0071"
          isVisible={selected}
          // minWidth={50}
          // minHeight={50}
          onResize={(
            _event: ResizeDragEvent,
            params: ResizeParamsWithDirection,
          ) => {
            setCurrentWidth(params.width);
            setCurrentHeight(params.height);
          }}
          keepAspectRatio
        />

        <Handle
          type="target"
          position={Position.Top}
          className={`invisible w-16 !bg-teal-500 ${selected && "visible"}`}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          className={`invisible w-16 !bg-teal-500 ${selected && "visible"}`}
        />
      </div>
    </label>
  );
}

const Memo = memo(IconNode);

export default Memo;
