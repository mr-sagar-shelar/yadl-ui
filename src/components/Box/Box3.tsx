import { getIcon } from "@utils";
import { useMemo } from "react";

export type BoxProps = {
  width?: number;
  height?: number;
  text: string;
  icon: string;
  title: string;
};

const Box = (props: BoxProps) => {
  const { width = 200, height = 200, text, icon, title } = props;
  const SvgIcon = useMemo(() => getIcon(icon), [icon]);
  return (
    <>
      <div
        className="text-primary border border-base-content grid grid-col-2 justify-center p-4 gap-5 rounded-2xl bg-primary-content overflow-hidden"
        style={{ width, height }}
      >
        <div className="col-span-2 text-lg font-bold capitalize rounded-md">
          {title}
        </div>
        <div className="col-span-2 rounded-md">{text}</div>
        <div className="col-span-1">
          <button className="rounded-md bg-slate-300 hover:bg-slate-600 hover:text-slate-200 duration-300 p-2">
            {SvgIcon && (
              <SvgIcon className="w-10 h-10 text-primary bg-primary-content/90 rounded-full p-1" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Box;
