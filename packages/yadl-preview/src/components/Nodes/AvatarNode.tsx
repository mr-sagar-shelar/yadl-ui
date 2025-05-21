import { memo, useState } from "react";
import {
  Handle,
  Position,
  NodeResizer,
  ResizeDragEvent,
  ResizeParamsWithDirection,
} from "@xyflow/react";
import { Avatar } from "yadl-avatar";
import { AvatarNodeProps } from "yadl-core-package";

function AvatarNode(props: AvatarNodeProps) {
  const {
    data,
    selected = false,
  } = props;
  const [currentWidth, setCurrentWidth] = useState<number>(data?.width || 100);
  const [currentHeight, setCurrentHeight] = useState<number>(
    data?.height || 100,
  );
  return (
    <div
      onClick={() => {
        console.log("Clicked");
      }}
      className="overflow-hidden"
    >
      <Avatar
        {...data}
        width={currentWidth}
        height={currentHeight}
      />
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

const Memo = memo(AvatarNode);
export default Memo;
