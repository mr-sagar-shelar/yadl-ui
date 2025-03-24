import type { SVGProps } from "react";
import { memo } from "react";
const MaleAvatar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className="prefix__injected-svg"
    viewBox="0 0 532 532"
    {...props}
  >
    <circle cx={270.76} cy={260.934} r={86.349} fill="#ffb6b6" />
    <path
      fill="#ffb6b6"
      d="m221.19 360.052-3.901-39.434 77.9-14.566 46 112-80 92-57-112z"
    />
    <path
      fill="#2f2e41"
      d="m216.037 340.357 17.032 3.848s-13.389-42.454-8.844-46.507c4.544-4.053 15.68 2.333 15.68 2.333l11.702 13.12 14.254-14.512s15.475-19.243 21.534-24.647-3.674-25.463-3.674-25.463 89.892-24.24 56.443-67.84c0 0-19.61-34.185-25.997-23.049-6.386 11.136-14.002-6.55-14.002-6.55l-23.253 4.422s-45.895-27.06-89.454 30.83 28.58 154.015 28.58 154.015"
    />
    <path
      fill="var(--color-primary)"
      d="M433.16 472.95C385.97 511.21 327.59 532 266 532c-56.24 0-109.81-17.34-154.62-49.48.08-.84.16-1.67.23-2.5 1.19-13 2.25-25.64 2.95-36.12 2.71-40.69 97.64-67.81 97.64-67.81s.43.43 1.29 1.18c5.24 4.6 26.51 21.28 63.81 25.94 33.26 4.16 44.21-15.57 47.52-25.02 1-2.88 1.3-4.81 1.3-4.81l97.64 46.11c6.37 9.1 8.86 28.7 9.35 50.73.02.91.04 1.81.05 2.73"
    />
    <path
      fill="#3f3d56"
      d="M454.09 77.91C403.85 27.67 337.05 0 266 0S128.15 27.67 77.91 77.91 0 194.95 0 266c0 64.85 23.05 126.16 65.29 174.57 4.03 4.63 8.24 9.14 12.62 13.52 1.03 1.03 2.07 2.06 3.12 3.06 2.8 2.71 5.65 5.36 8.55 7.93q2.64 2.355 5.34 4.62c1.41 1.19 2.82 2.36 4.25 3.51.03.03.05.05.08.07 3.97 3.2 8.01 6.28 12.13 9.24C156.19 514.66 209.76 532 266 532c61.59 0 119.97-20.79 167.16-59.05a272 272 0 0 0 20.93-18.86c.99-.99 1.98-1.99 2.95-3 2.7-2.78 5.32-5.61 7.88-8.48C508.29 393.89 532 331.77 532 266c0-71.05-27.67-137.85-77.91-188.09m10.18 362.21c-2.5 2.84-5.06 5.64-7.68 8.37-4.08 4.25-8.29 8.37-12.64 12.34-1.65 1.52-3.32 3-5.01 4.47-1.92 1.67-3.86 3.31-5.83 4.92a263.4 263.4 0 0 1-50.73 32.71 261 261 0 0 1-22.1 9.67C330.99 523.84 299.2 530 266 530c-32.04 0-62.76-5.74-91.19-16.24-11.67-4.3-22.95-9.41-33.78-15.26a262.337 262.337 0 0 1-28.66-17.93l-.76-.55c-5.46-3.94-10.77-8.09-15.9-12.45-1.88-1.59-3.74-3.2-5.57-4.85-2.98-2.65-5.9-5.38-8.75-8.18-5.4-5.29-10.56-10.8-15.49-16.53C26.09 391.77 2 331.65 2 266 2 120.43 120.43 2 266 2s264 118.43 264 264c0 66.66-24.83 127.62-65.73 174.12"
    />
  </svg>
);
const Memo = memo(MaleAvatar);
export default Memo;
