import { memo, useState } from "react";
import {
  Handle,
  Position,
  NodeResizer,
  ResizeDragEvent,
  ResizeParamsWithDirection,
} from "@xyflow/react";
import { TextNodeProps } from "yadl-core-package";
import { Text } from "yadl-ui-components";

function TextNode(properties: TextNodeProps) {
  const {
    data: { text, classes, props = {}, fontFamily },
    selected = false,
  } = properties;
  const [currentWidth, setCurrentWidth] = useState<number>(props?.width || 50);
  const [currentHeight, setCurrentHeight] = useState<number>(
    props?.height || 50,
  );

  return (
    <div
      onClick={() => {
        console.log("Clicked");
      }}
      className="overflow-hidden"
    >
      <Text
        text={text}
        classes={classes}
        fontFamily={fontFamily}
        {...props}
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

const Memo = memo(TextNode);

export default Memo;
