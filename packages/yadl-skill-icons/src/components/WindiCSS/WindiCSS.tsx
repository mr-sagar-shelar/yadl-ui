import type { SVGProps } from "react";
import { memo } from "react";
const WindiCSS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path
      fill="url(#prefix__a)"
      d="M132.158 63.163c0-19.39-15.773-35.163-35.163-35.163-20.434 0-32.65 15.32-32.65 30.14h20.092c0-4.17 3.898-10.047 12.558-10.047 8.308 0 15.07 6.761 15.07 15.07 0 8.308-6.065 15.07-21.358 15.07H36v20.092h54.707c25.811 0 41.451-15.773 41.451-35.162m0 0c0-19.39-15.773-35.163-35.163-35.163-20.434 0-32.65 15.32-32.65 30.14h20.092c0-4.17 3.898-10.047 12.558-10.047 8.308 0 15.07 6.761 15.07 15.07 0 8.308-6.065 15.07-21.358 15.07H36v20.092h54.707c25.811 0 41.451-15.773 41.451-35.162"
    />
    <path
      fill="url(#prefix__b)"
      d="M176.734 192.837c0 19.391-15.773 35.163-35.163 35.163-20.434 0-32.651-15.32-32.651-30.139h20.093c0 4.169 3.898 10.047 12.558 10.047 8.309 0 15.07-6.762 15.07-15.071 0-8.308-7.641-15.069-21.358-15.069H74.576v-20.093h60.707c25.811 0 41.451 15.773 41.451 35.162m0 0c0 19.391-15.773 35.163-35.163 35.163-20.434 0-32.651-15.32-32.651-30.139h20.093c0 4.169 3.898 10.047 12.558 10.047 8.309 0 15.07-6.762 15.07-15.071 0-8.308-7.641-15.069-21.358-15.069H74.576v-20.093h60.707c25.811 0 41.451 15.773 41.451 35.162"
    />
    <path
      fill="url(#prefix__c)"
      d="M182 59c-22.162 0-37.796 16.854-37.796 39.016H162C162 87 170 79 182 79s18 8 18 19.016-7.793 20.093-29 20.093H36v20.093h138c31.406 0 46-20.186 46-40.186C220 75.854 205 59 182 59"
    />
    <path fill="url(#prefix__d)" d="M62.34 157.675H36v20.261h26.34z" />
    <defs>
      <linearGradient
        id="prefix__a"
        x1={52}
        x2={168}
        y1={45}
        y2={228}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.078} stopColor="#54C8F1" />
        <stop offset={0.573} stopColor="#41A2EF" />
        <stop offset={1} stopColor="#3386EE" />
      </linearGradient>
      <linearGradient
        id="prefix__b"
        x1={52}
        x2={168}
        y1={45}
        y2={228}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.078} stopColor="#54C8F1" />
        <stop offset={0.573} stopColor="#41A2EF" />
        <stop offset={1} stopColor="#3386EE" />
      </linearGradient>
      <linearGradient
        id="prefix__c"
        x1={52}
        x2={168}
        y1={45}
        y2={228}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.078} stopColor="#54C8F1" />
        <stop offset={0.573} stopColor="#41A2EF" />
        <stop offset={1} stopColor="#3386EE" />
      </linearGradient>
      <linearGradient
        id="prefix__d"
        x1={52}
        x2={168}
        y1={45}
        y2={228}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.078} stopColor="#54C8F1" />
        <stop offset={0.573} stopColor="#41A2EF" />
        <stop offset={1} stopColor="#3386EE" />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(WindiCSS);
export default Memo;
