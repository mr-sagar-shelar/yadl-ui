import { memo, useState } from "react";
import {
  Handle,
  Position,
  NodeResizer,
  ResizeDragEvent,
  ResizeParamsWithDirection,
} from "@xyflow/react";
import * as ICONS from "../../index";
import { BoxNames } from "@utils";

export interface BoxNodeProps {
  data: {
    component: string;
    props?: any;
  };
  selected: boolean;
}
function BoxNode(properties: BoxNodeProps) {
  const {
    data: { component, props },
    selected = false,
  } = properties;
  const [currentWidth, setCurrentWidth] = useState<number>(props.width || 50);
  const [currentHeight, setCurrentHeight] = useState<number>(
    props.height || 50,
  );

  let iconNamePresent: boolean = false;
  let Icon = null;

  iconNamePresent = BoxNames[component] != undefined;
  if (iconNamePresent) {
    // @ts-ignore
    Icon = ICONS[BoxNames[component].component] ?? null;
    // console.log(` Presetn: ${iconNamePresent}, Icon=${Icon}`);
  }

  return (
    <label htmlFor="properties-drawer">
      <div
        onClick={() => {
          console.log("Clicked");
        }}
      >
        {iconNamePresent && (
          <Icon {...props} width={currentWidth} height={currentHeight} />
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

const Memo = memo(BoxNode);

export default Memo;
