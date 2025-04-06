import { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import * as ICONS from "../../index";
import {
  AwsIcons,
  AzureIcons,
  GCPIcons,
  SkillIcons,
  UndrawIcons,
  ThemeisleIcons,
} from "@utils";

export interface IconNodeProps {
  data: {
    icon: string;
    width?: number;
    height?: number;
    category?: string;
  };
}
function IconNode(props: IconNodeProps) {
  const {
    data: { icon, width = 100, height = 100, category = "skill" },
  } = props;

  let iconNamePresent: boolean = false;
  let Icon = null;

  switch (category) {
    case "aws":
      iconNamePresent = AwsIcons[icon] != undefined;
      if (iconNamePresent) {
        // @ts-ignore
        Icon = ICONS[AwsIcons[icon].icon] ?? null;
      }
      break;
    case "gcp":
      iconNamePresent = GCPIcons[icon] != undefined;
      if (iconNamePresent) {
        // @ts-ignore
        Icon = ICONS[GCPIcons[icon].icon] ?? null;
      }
      break;
    case "skill":
      iconNamePresent = SkillIcons[icon] != undefined;
      if (iconNamePresent) {
        // @ts-ignore
        Icon = ICONS[SkillIcons[icon].icon] ?? null;
      }
      console.log(
        `##### Present=${iconNamePresent}, icon=${icon}, Icon=${Icon}`,
      );
      break;
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
