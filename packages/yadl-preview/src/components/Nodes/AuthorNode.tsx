import { memo, useEffect, useState } from "react";
import {
  Handle,
  Position,
  NodeResizer,
  ResizeDragEvent,
  ResizeParamsWithDirection,
} from "@xyflow/react";
import { Author } from "yadl-ui-components";

export interface AuthorNodeProps {
  data: any;
  selected: boolean;
}

function AuthorNode(properties: AuthorNodeProps) {
  const { data, selected = false,
  } = properties;
  const [currentWidth, setCurrentWidth] = useState<number>(data?.props?.width || 200);
  const [currentHeight, setCurrentHeight] = useState<number>(
    data?.props?.height || 100,
  );

  useEffect(() => {
    setCurrentWidth(data?.props?.width);
    setCurrentHeight(data?.props?.height);
  }, [data?.props?.width, data?.props?.height])

  return (
    <label>
      <div
        onClick={() => {
          console.log("Clicked");
        }}
      >
        <Author {...data} width={currentWidth} height={currentHeight} />
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

const Memo = memo(AuthorNode);

export default Memo;
