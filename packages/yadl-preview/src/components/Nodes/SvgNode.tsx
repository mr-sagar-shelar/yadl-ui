import { memo, useState } from "react";
import {
  Handle,
  Position,
  NodeResizer,
  ResizeDragEvent,
  ResizeParamsWithDirection,
} from "@xyflow/react";

export interface SvgNodeProps {
  data: {
    name: string;
    props?: any;
    code: string;
    classes: string;
  };
  selected: boolean;
}

function TextNode(properties: SvgNodeProps) {
  const {
    data: { code = "", classes, props = {} },
    selected = false,
  } = properties;
  const [_currentWidth, setCurrentWidth] = useState<number>(props?.width || 50);
  const [_currentHeight, setCurrentHeight] = useState<number>(
    props?.height || 50,
  );

  if (code == "")
    return null;

  return (
    <div
      onClick={() => {
        console.log("Clicked");
      }}
      className={`overflow-hidden ${classes}`}
    >
      <div dangerouslySetInnerHTML={{ __html: code }} />
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
  );
}

const Memo = memo(TextNode);

export default Memo;
