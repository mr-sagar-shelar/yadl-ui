import { memo } from "react";

export type GroupProps = {
  innerHTML?: string;
  height?: number;
  width?: number;
  classes?: string;
};

const Group = (props: GroupProps) => {
  const { width = 100, height = 100,
    classes = "flex items-center gap-4" } = props;
  return (
    <div className={`flex gap-2 overflow-hidden`} style={{ width, height }}>
      <div
        className={`${classes}`}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        draggable
      >
        
        <div>Hello I am  group component :) happy to see you ;)</div>
      </div>
    </div>
  );
};

const Memo = memo(Group);
export default Memo;
