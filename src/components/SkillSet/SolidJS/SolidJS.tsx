import type { SVGProps } from "react";
import { memo } from "react";
const SolidJS = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#76B3E1"
      d="M224 76.855S160 29.76 110.491 40.628l-3.623 1.208c-7.245 2.415-13.283 6.038-16.906 10.868l-2.415 3.622-18.113 31.397 31.396 6.037c13.283 8.453 30.189 12.076 45.887 8.453l55.547 10.868z"
    />
    <path
      fill="url(#prefix__a)"
      d="M224 76.855S160 29.76 110.491 40.628l-3.623 1.208c-7.245 2.415-13.283 6.038-16.906 10.868l-2.415 3.622-18.113 31.397 31.396 6.037c13.283 8.453 30.189 12.076 45.887 8.453l55.547 10.868z"
      opacity={0.3}
    />
    <path
      fill="#518AC8"
      d="m89.962 76.854-4.83 1.208C64.604 84.1 58.566 103.42 69.434 120.326c12.075 15.698 37.434 24.151 57.962 18.113l74.868-25.358s-64-47.095-112.302-36.227"
    />
    <path
      fill="url(#prefix__b)"
      d="m89.962 76.854-4.83 1.208C64.604 84.1 58.566 103.42 69.434 120.326c12.075 15.698 37.434 24.151 57.962 18.113l74.868-25.358s-64-47.095-112.302-36.227"
      opacity={0.3}
    />
    <path
      fill="url(#prefix__c)"
      d="M188.981 131.194a54.34 54.34 0 0 0-57.962-18.113l-74.868 24.151L32 179.496l135.245 22.943 24.151-43.471c4.83-8.453 3.623-18.114-2.415-27.774"
    />
    <path
      fill="url(#prefix__d)"
      d="M164.83 173.458a54.335 54.335 0 0 0-57.962-18.113L32 179.496s64 48.302 113.509 36.226l3.623-1.207c20.528-6.038 27.774-25.359 15.698-41.057"
    />
    <defs>
      <linearGradient
        id="prefix__a"
        x1={60.377}
        x2={210.717}
        y1={38.213}
        y2={111.27}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.1} stopColor="#76B3E1" />
        <stop offset={0.3} stopColor="#DCF2FD" />
        <stop offset={1} stopColor="#76B3E1" />
      </linearGradient>
      <linearGradient
        id="prefix__b"
        x1={142.853}
        x2={116.528}
        y1={73.956}
        y2={161.624}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#76B3E1" />
        <stop offset={0.5} stopColor="#4377BB" />
        <stop offset={1} stopColor="#1F3B77" />
      </linearGradient>
      <linearGradient
        id="prefix__c"
        x1={49.389}
        x2={201.419}
        y1={112.115}
        y2={215.481}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#315AA9" />
        <stop offset={0.5} stopColor="#518AC8" />
        <stop offset={1} stopColor="#315AA9" />
      </linearGradient>
      <linearGradient
        id="prefix__d"
        x1={117.977}
        x2={56.634}
        y1={124.552}
        y2={349.519}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4377BB" />
        <stop offset={0.5} stopColor="#1A336B" />
        <stop offset={1} stopColor="#1A336B" />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(SolidJS);
export default Memo;
