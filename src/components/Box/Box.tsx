// import {
//   ComponentProps,
//   DetailedHTMLProps,
//   HTMLAttributes,
//   ReactNode,
// } from "react";

// type BoxProps = ComponentProps<"div"> & {
//   text?: string;
// };

// interface BoxProps extends React.ReactHTMLElement<HTMLDivElement> {
//   text?: string;
// }

export type BoxProps = {
  classes?: string;
  text?: string;
  width?: number;
  height?: number;
};

// interface BoxProps
//   extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
//   children: ReactNode;
//   text?: string;
// }

const Box = (props: BoxProps) => {
  const { width = 200, height = 200, classes } = props;
  return (
    <>
      <div className={classes} {...props} style={{ width, height }}>
        {props.text}
      </div>
    </>
  );
};

export default Box;
