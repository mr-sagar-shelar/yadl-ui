import { memo } from "react";

export type BoxProps = {
  number: number;
  title: string;
  width?: number;
  height?: number;
  icon: string;
  color: string;
  circleSize?: number;
  captions: string[];
};

const Box3 = (props: BoxProps) => {
  const { width = 200, height = 200, title, number = 1, color = "primary", captions = [], circleSize = 20, icon } = props;
  return (
    <>
      <div
        className={`border-solid border-${color} bg-neutral-content border-4 rounded-lg relative over`}
        style={{ width, height }}
        draggable
      >
        <div className={`text-${color} text-2xl flex justify-center`}>
          <div className={`border-solid border-${color} border-4 rounded-full size-${circleSize} flex justify-center absolute -top-${circleSize / 2} bg-neutral-content items-center font-bold text-[${circleSize / 10}em]`}>
            {number}
          </div>
        </div>
        <div className={`text-${color} text-lg font-extrabold flex justify-center pt-${(circleSize / 2) + 2}`}>
          {title}
        </div>
        <div className={`flex justify-center`}>
          <div dangerouslySetInnerHTML={{ __html: icon }} />
        </div>
        <ul className="list-disc px-5 pt-3">
          {captions.map((caption) => {
            return <li className={`text-${color} text-sm`}>{caption}</li>
          })}
        </ul>
      </div>
    </>
  );
};

const Memo = memo(Box3);
export default Memo;
