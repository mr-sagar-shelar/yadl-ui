import { memo } from "react";

export type BoxProps = {
  width?: number;
  height?: number;
  classes?: string;
};

const Box = (props: BoxProps) => {
  const { width = 200, height = 200, classes } = props;
  return (
    <>
      <div
        className={classes}
        style={{ width, height }}
        draggable
      >
      </div>
    </>
  );
};

const Memo = memo(Box);
export default Memo;
