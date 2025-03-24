import type { SVGProps } from "react";
import { memo } from "react";
const APICenter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    {...props}
  >
    <defs>
      <linearGradient
        id="prefix__a"
        x1={9}
        x2={9}
        y1={18}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#198ab3" />
        <stop offset={1} stopColor="#32bedd" />
      </linearGradient>
      <linearGradient
        id="prefix__b"
        x1={7.203}
        x2={7.203}
        y1={11.089}
        y2={3.888}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#6f4bb2" />
        <stop offset={1} stopColor="#c69aeb" />
      </linearGradient>
    </defs>
    <path
      fill="url(#prefix__a)"
      d="M11.844 12.791a1.8 1.8 0 0 0-.947.015l-1.295-2.124a.14.14 0 0 0-.19-.049l-.536.309a.14.14 0 0 0-.05.195l1.296 2.127a1.8 1.8 0 0 0 .42 2.853c.276.143.568.213.857.213.463 0 .916-.18 1.273-.527a1.8 1.8 0 0 0-.829-3.012Zm.424 1.965a.9.9 0 1 1-.097-.681.9.9 0 0 1 .097.681m3.555-9.443a2.18 2.18 0 0 0-2.106 1.631h-2.54a.14.14 0 0 0-.141.141v.806a.14.14 0 0 0 .141.141h2.54a2.18 2.18 0 0 0 2.106 1.631c1.201 0 2.177-.976 2.177-2.175s-.977-2.175-2.177-2.175m1.068 2.388a1.09 1.09 0 0 1-.854.854 1.09 1.09 0 0 1-1.282-1.28 1.09 1.09 0 0 1 2.137.426ZM2.978 2.953q.182.045.366.045.217 0 .423-.063l.884 1.447a.14.14 0 0 0 .19.049l.406-.234a.14.14 0 0 0 .05-.195L4.41 2.549A1.498 1.498 0 0 0 2.425.313a1.5 1.5 0 0 0-.45 1.805c.195.424.559.725 1.004.835ZM2.895.897a.75.75 0 0 1 .628-.125.749.749 0 1 1-.877 1.007.75.75 0 0 1 .249-.883ZM5.612 10.99l-.828-.477a.14.14 0 0 0-.192.052l-1.473 2.577A2.48 2.48 0 0 0 .11 14.81a2.472 2.472 0 0 0 1.153 2.87 2.47 2.47 0 0 0 2.323.062 2.472 2.472 0 0 0 .612-3.992l1.468-2.567a.14.14 0 0 0-.052-.192Zm-2.055 5.145-.213.234a1.16 1.16 0 0 1-.601.366c-.298.065-.605.02-.873-.131a1.23 1.23 0 0 1-.584-.745 1.239 1.239 0 0 1 2.385-.662c.089.318.048.652-.115.939Z"
    />
    <path
      fill="url(#prefix__b)"
      d="M9.921 5.287 7.749 4.034a1.1 1.1 0 0 0-1.096 0L4.481 5.287a1.1 1.1 0 0 0-.548.948V8.74c0 .391.209.753.548.949l2.174 1.253a1.1 1.1 0 0 0 1.096 0l2.174-1.253c.339-.196.548-.557.548-.949V6.235a1.1 1.1 0 0 0-.552-.948"
    />
  </svg>
);
const Memo = memo(APICenter);
export default Memo;
