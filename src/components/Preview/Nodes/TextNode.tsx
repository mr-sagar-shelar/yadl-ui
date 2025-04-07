import { memo, useState } from "react";
import {
  Handle,
  Position,
  NodeResizer,
  ResizeDragEvent,
  ResizeParamsWithDirection,
} from "@xyflow/react";
import { Text } from "../../index";

export interface TextNodeProps {
  data: {
    name: string;
    props?: any;
    text: string;
    classes: string;
  };
  selected: boolean;
}
function TextNode(properties: TextNodeProps) {
  const {
    data: { text, classes, props },
    selected = false,
  } = properties;
  const [currentWidth, setCurrentWidth] = useState<number>(props.width || 50);
  const [currentHeight, setCurrentHeight] = useState<number>(
    props.height || 50,
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
