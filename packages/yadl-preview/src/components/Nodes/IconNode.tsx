import { memo, useState } from "react";
import {
  Handle,
  Position,
  NodeResizer,
  ResizeDragEvent,
  ResizeParamsWithDirection,
} from "@xyflow/react";
import { IconNodeProps } from "yadl-core-package";
import * as AWSIcons from "yadl-aws-icons";
import { AwsIconNames } from "yadl-aws-icons";
import * as AzureIcons from "yadl-azure-icons";
import { AzureIconNames } from "yadl-azure-icons";
import * as GCPIcons from "yadl-gcp-icons";
import { GCPIconNames } from "yadl-gcp-icons";
import * as SkillIcons from "yadl-skill-icons";
import { SkillIconNames  } from "yadl-skill-icons";
import * as ThemeisleIcons from "yadl-themeisle-icons";
import { ThemeisleIconNames } from "yadl-themeisle-icons";
import * as UndrawIcons from "yadl-undraw-icons";
import { UndrawIconNames } from "yadl-undraw-icons";

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
      iconNamePresent = GCPIconNames[icon] != undefined;
      if (iconNamePresent) {
        // @ts-ignore
        Icon = GCPIcons[GCPIconNames[icon].icon] ?? null;
      }
      break;
    case "skill":
      iconNamePresent = SkillIconNames[icon] != undefined;
      if (iconNamePresent) {
        // @ts-ignore
        Icon = SkillIcons[SkillIconNames[icon].icon] ?? null;
      }
      break;
    case "azure":
      iconNamePresent = AzureIconNames[icon] != undefined;
      if (iconNamePresent) {
        // @ts-ignore
        Icon = AzureIcons[AzureIconNames[icon].icon] ?? null;
      }
      break;
    case "undraw":
      iconNamePresent = UndrawIconNames[icon] != undefined;
      if (iconNamePresent) {
        // @ts-ignore
        Icon = UndrawIcons[UndrawIconNames[icon].icon] ?? null;
      }
      break;
    case "themeisle":
      iconNamePresent = ThemeisleIconNames[icon] != undefined;
      if (iconNamePresent) {
        // @ts-ignore
        Icon = ThemeisleIcons[ThemeisleIconNames[icon].icon] ?? null;
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
