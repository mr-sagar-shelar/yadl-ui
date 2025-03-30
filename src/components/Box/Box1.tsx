import { getIcon } from "@utils";
import { useMemo } from "react";

export type BoxProps = {
  title: string;
  width?: number;
  height?: number;
  caption: string;
  number: string;
  icon: string;
};

const Box = (props: BoxProps) => {
  const {
    width = 200,
    height = 200,
    title,
    caption,
    number = "01",
    icon,
  } = props;
  const SvgIcon = useMemo(() => getIcon(icon), [icon]);
  return (
    <>
      <div
        className="bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden"
        style={{ width, height }}
      >
        <div className="w-24 h-24 rounded-full absolute -right-5 -top-7 bg-primary">
          <p className="absolute bottom-6 left-7 text-white text-2xl">
            {number}
          </p>
        </div>
        <div className="w-12 fill-primary">{SvgIcon && <SvgIcon />}</div>
        <h1 className="font-bold text-xl text-neutral">{title}</h1>
        <p className="text-sm leading-6 text-neutral/50">{caption}</p>
      </div>
    </>
  );
};

export default Box;
