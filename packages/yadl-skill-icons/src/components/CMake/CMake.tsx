import type { SVGProps } from "react";
import { memo } from "react";
const CMake = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F4ED" rx={60} />
    <path
      fill="url(#prefix__a)"
      stroke="#000"
      d="m136.356 129.131-99.812 85.328 91.419-182.666z"
    />
    <path
      fill="url(#prefix__b)"
      stroke="#000"
      d="M140.981 182.419 128.01 31.776l91.535 182.7z"
    />
    <path
      fill="url(#prefix__c)"
      stroke="#000"
      d="m95.818 163.548 123.821 50.906-183.07-.02z"
    />
    <path
      fill="url(#prefix__d)"
      d="m96.006 163.671 40.287-34.368 5.609 53.075z"
    />
    <defs>
      <linearGradient
        id="prefix__a"
        x1={78.913}
        x2={123.642}
        y1={164.733}
        y2={70.115}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1011A1" />
        <stop offset={1} stopColor="#6969E1" />
      </linearGradient>
      <linearGradient
        id="prefix__b"
        x1={139.124}
        x2={201.629}
        y1={93.052}
        y2={198.566}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B40E0E" />
        <stop offset={1} stopColor="#FF5959" />
      </linearGradient>
      <linearGradient
        id="prefix__c"
        x1={164.929}
        x2={76.619}
        y1={206.021}
        y2={198.566}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#01A300" />
        <stop offset={1} stopColor="#01DF00" />
      </linearGradient>
      <linearGradient
        id="prefix__d"
        x1={133.963}
        x2={132.816}
        y1={173.335}
        y2={134.914}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#848484" />
        <stop offset={1} stopColor="#D2D2D2" />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(CMake);
export default Memo;
