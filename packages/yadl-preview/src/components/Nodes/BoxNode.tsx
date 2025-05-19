import { memo, useState } from "react";
import {
  Handle,
  Position,
  NodeResizer,
  ResizeDragEvent,
  ResizeParamsWithDirection,
} from "@xyflow/react";
import { BoxNodeProps } from "yadl-core-package";
import * as Boxes from "yadl-ui-components";

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

  // @ts-ignore
  iconNamePresent = Boxes[component] != undefined;
  if (iconNamePresent) {
    // @ts-ignore
    Icon = Boxes[component] ?? null;
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

const Memo = memo(BoxNode);

export default Memo;
