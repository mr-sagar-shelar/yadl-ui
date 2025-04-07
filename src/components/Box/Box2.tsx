import { getIcon } from "@utils";
import { useMemo } from "react";

export type BoxProps = {
  width?: number;
  height?: number;
  caption: string;
  icon: string;
};

const Box = (props: BoxProps) => {
  const { width = 200, height = 200, caption, icon } = props;
  const SvgIcon = useMemo(() => getIcon(icon), [icon]);
  return (
    <>
      <article
        className="w-72 bg-primary-content/80 shadow p-4 space-y-2 rounded-md overflow-hidden"
        style={{ width, height }}
      >
        {SvgIcon && (
          <SvgIcon className="w-10 h-10 text-primary bg-primary-content/90 rounded-full p-1" />
        )}
        <p className="text-sm w-full text-primary ">{caption}</p>
      </article>
    </>
  );
};

export default Box;
