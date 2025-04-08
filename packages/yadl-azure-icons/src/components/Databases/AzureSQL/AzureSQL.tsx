import type { SVGProps } from "react";
import { memo } from "react";
const AzureSQL = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
    <defs>
      <linearGradient
        id="prefix__a"
        x1={9.908}
        x2={7.516}
        y1={15.943}
        y2={2.383}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.15} stopColor="#0078d4" />
        <stop offset={0.8} stopColor="#5ea0ef" />
        <stop offset={1} stopColor="#83b9f9" />
      </linearGradient>
    </defs>
    <path
      fill="url(#prefix__a)"
      d="M14.49 7.15a5.147 5.147 0 0 0-5.25-4.986 5.27 5.27 0 0 0-5.024 3.489A4.87 4.87 0 0 0 0 10.4a4.946 4.946 0 0 0 5.068 4.814h8.752A4.29 4.29 0 0 0 18 11.127a4.105 4.105 0 0 0-3.51-3.977"
    />
    <path
      fill="#f2f2f2"
      d="M12.9 11.4V8H12v4.13h2.46v-.73ZM5.76 9.73a1.8 1.8 0 0 1-.51-.31.44.44 0 0 1-.12-.32.34.34 0 0 1 .15-.3.7.7 0 0 1 .42-.12 1.62 1.62 0 0 1 1 .29v-.86a2.6 2.6 0 0 0-1-.16 1.64 1.64 0 0 0-1.09.34 1.08 1.08 0 0 0-.42.89c0 .51.32.91 1 1.21a3 3 0 0 1 .62.36.42.42 0 0 1 .15.32.38.38 0 0 1-.16.31.8.8 0 0 1-.45.11 1.66 1.66 0 0 1-1.09-.42V12a2.2 2.2 0 0 0 1.07.24 1.88 1.88 0 0 0 1.18-.33 1.08 1.08 0 0 0 .33-.91 1.05 1.05 0 0 0-.25-.7 2.4 2.4 0 0 0-.83-.57M11 11.32A2.19 2.19 0 0 0 11 9a1.8 1.8 0 0 0-.7-.75 2 2 0 0 0-1-.26 2.1 2.1 0 0 0-1.08.27 1.86 1.86 0 0 0-.73.74 2.47 2.47 0 0 0-.26 1.14 2.26 2.26 0 0 0 .24 1 1.77 1.77 0 0 0 .69.74 2.06 2.06 0 0 0 1 .3l.86 1h1.21L10 12.08a1.8 1.8 0 0 0 1-.76m-1-.25a.94.94 0 0 1-.76.35.92.92 0 0 1-.76-.36 1.52 1.52 0 0 1-.29-1 1.53 1.53 0 0 1 .29-1 1 1 0 0 1 .78-.37.87.87 0 0 1 .75.37 1.62 1.62 0 0 1 .27 1 1.46 1.46 0 0 1-.28 1.01"
    />
    {"\u200B"}
  </svg>
);
const Memo = memo(AzureSQL);
export default Memo;
