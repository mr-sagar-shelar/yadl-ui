import { memo } from "react";
import {
  Handle,
  Position,
  NodeResizer,
  ResizeDragEvent,
  ResizeParamsWithDirection,
} from "@xyflow/react";
import { Avatar } from "yadl-avatar";

function AvatarNode() {
  const selected = false;
  return (
    <div
      onClick={() => {
        console.log("Clicked");
      }}
      className="overflow-hidden"
    >
      <Avatar
        avatarStyle='Circle'
        topType='LongHairStraight'
        accessoriesType='Blank'
        hairColor='BrownDark'
        facialHairType='Blank'
        clotheType='BlazerShirt'
        eyeType='Default'
        eyebrowType='Default'
        mouthType='Default'
        skinColor='Light'
      />
      <NodeResizer
        color="#ff0071"
        isVisible={true}
        onResize={(
          _event: ResizeDragEvent,
          params: ResizeParamsWithDirection,
        ) => {
          // setCurrentWidth(params.width);
          // setCurrentHeight(params.height);
          console.log(params);
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
