import { memo } from "react";
export type TextProps = {
  classes?: string;
  text?: string;
  fontFamily?: string;
  width?: number;
  height?: number;
};

const Text = (props: TextProps) => {
  const { classes, fontFamily, text, width, height } = props;
  return (
    <div draggable style={{ fontFamily: fontFamily, width, height }} className={classes}>
      {text}
    </div>
  );
};

const Memo = memo(Text);
export default Memo;
