import { memo } from "react";
import {
  Handle,
  Position,
  NodeResizer,
  // ResizeDragEvent,
  // ResizeParamsWithDirection,
} from "@xyflow/react";
import { TextNodeProps } from "yadl-core-package";

function TextNode(properties: TextNodeProps) {
  const {
    selected = false,
  } = properties;


  return (
    <div
      onClick={() => {
        console.log("Clicked");
      }}
      className="overflow-hidden"
    >
      Text Node
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        // onResize={(
        //   _event: ResizeDragEvent,
        //   params: ResizeParamsWithDirection,
        // ) => {
        //   setCurrentWidth(params.width);
        //   setCurrentHeight(params.height);
        // }}
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
  );
}

const Memo = memo(TextNode);

export default Memo;
