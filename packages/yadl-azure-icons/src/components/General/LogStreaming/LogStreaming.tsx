import type { SVGProps } from "react";
import { memo } from "react";
const LogStreaming = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
    <defs>
      <linearGradient
        id="prefix__a"
        x1={8.153}
        x2={8.153}
        y1={17.5}
        y2={2.093}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ef7100" />
        <stop offset={0.9} stopColor="#f78d1e" />
      </linearGradient>
    </defs>
    <path
      fill="#d15900"
      d="M1.931 2.109 3.142.7a.6.6 0 0 1 .444-.2H15.2a.813.813 0 0 1 .888.831v14.5a.6.6 0 0 1-.192.435l-1.308 1.191H2.716l-.8-.337Z"
    />
    <path
      fill="#fff"
      d="m2.905 2.1.742-.846a.52.52 0 0 1 .394-.179h10.845a.52.52 0 0 1 .522.522v13.786a.52.52 0 0 1-.171.386l-1.158 1.055Z"
    />
    <path
      fill="url(#prefix__a)"
      d="M14.008 2.093H1.969a.056.056 0 0 0-.056.056v14.966a.385.385 0 0 0 .387.385h11.71a.385.385 0 0 0 .385-.385V2.478a.386.386 0 0 0-.387-.385"
    />
    <path
      fill="#fff"
      d="M10.5 9.859a2.26 2.26 0 0 1-.638 1.587.384.384 0 0 1-.574.064.394.394 0 0 1 .006-.593 1.565 1.565 0 0 0 0-2.174.39.39 0 1 1 .572-.522 2.3 2.3 0 0 1 .634 1.638M5.807 9.858a2.38 2.38 0 0 1 .636-1.632.392.392 0 1 1 .569.528 1.565 1.565 0 0 0 0 2.158.4.4 0 0 1 0 .607.38.38 0 0 1-.545-.052 2.37 2.37 0 0 1-.66-1.609M7.5 9.822a.657.657 0 0 1 .659-.656.665.665 0 0 1 0 1.329.65.65 0 0 1-.659-.673"
    />
    <path
      fill="#fff"
      d="M12.5 9.8a3.37 3.37 0 0 1-.952 2.367.573.573 0 0 1-.855.1.588.588 0 0 1 .009-.886 2.333 2.333 0 0 0 0-3.242.582.582 0 1 1 .854-.778A3.44 3.44 0 0 1 12.5 9.8M3.8 9.726a3.37 3.37 0 0 0 .952 2.367.573.573 0 0 0 .855.1.588.588 0 0 0-.007-.893 2.334 2.334 0 0 1 0-3.242.582.582 0 1 0-.853-.778A3.44 3.44 0 0 0 3.8 9.726"
    />
  </svg>
);
const Memo = memo(LogStreaming);
export default Memo;
