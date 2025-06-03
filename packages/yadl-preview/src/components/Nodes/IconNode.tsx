import { memo, useState, useEffect } from "react";
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
import { SkillIconNames } from "yadl-skill-icons";

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
  }

  useEffect(() => {
    setCurrentWidth(width);
    setCurrentHeight(height);
  }, [width, height])

  return (
    <label>
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
          id={"top"}
          className={`invisible w-16 ${selected && "visible"}`}
        />
        <Handle
          type="target"
          position={Position.Right}
          id={"right"}
          className={`invisible w-16 ${selected && "visible"}`}
        />
        <Handle
          type="target"
          position={Position.Bottom}
          id={"bottom"}
          className={`invisible w-16 ${selected && "visible"}`}
        />
        <Handle
          type="target"
          position={Position.Left}
          id={"left"}
          className={`invisible w-16 ${selected && "visible"}`}
        />
        <Handle
          type="source"
          position={Position.Top}
          id={"top"}
          className={`invisible w-16 ${selected && "visible"}`}
        />
        <Handle
          type="source"
          position={Position.Right}
          id={"right"}
          className={`invisible w-16 ${selected && "visible"}`}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          id={"bottom"}
          className={`invisible w-16 ${selected && "visible"}`}
        />
        <Handle
          type="source"
          position={Position.Left}
          id={"left"}
          className={`invisible w-16 ${selected && "visible"}`}
        />
      </div>
    </label>
  );
}

const Memo = memo(IconNode);

export default Memo;
