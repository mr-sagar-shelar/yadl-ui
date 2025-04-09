import { memo } from "react";
import {
  Handle,
  Position,
  NodeResizer,
} from "@xyflow/react";
import { BoxNodeProps } from "yadl-core-package";

function BoxNode(properties: BoxNodeProps) {
  const {
    selected = false,
  } = properties;

  return (
    <label htmlFor="properties-drawer">
      <div
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Box Node Props
        <NodeResizer
          color="#ff0071"
          isVisible={selected}
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
