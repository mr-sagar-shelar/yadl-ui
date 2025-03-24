import type { SVGProps } from "react";
import { memo } from "react";
const OpenCV = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path
      fill="#FF0101"
      d="M104.028 122.58a46.934 46.934 0 1 1 46.934 0l-14.131-24.476a18.674 18.674 0 0 0 2.03-30.983 18.67 18.67 0 1 0-20.702 30.983z"
    />
    <path
      fill="#0101FF"
      d="M204.533 133.943a46.932 46.932 0 0 1-23.467 87.58 46.933 46.933 0 0 1-23.467-87.58l14.131 24.476a18.67 18.67 0 0 0 9.336 34.842 18.675 18.675 0 0 0 18.035-13.84 18.67 18.67 0 0 0-8.699-21.002z"
    />
    <path
      fill="#01FF01"
      d="M121.868 174.589a46.93 46.93 0 0 1-9.699 28.571 46.93 46.93 0 0 1-77.881-5.104 46.934 46.934 0 0 1 64.113-64.113L84.27 158.419a18.66 18.66 0 0 0-11.773-2.342 18.672 18.672 0 1 0 21.109 18.512z"
    />
  </svg>
);
const Memo = memo(OpenCV);
export default Memo;
