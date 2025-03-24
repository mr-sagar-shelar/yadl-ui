import type { SVGProps } from "react";
import { memo } from "react";
const IdentityPlatform = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <style>
        {
          ".prefix__cls-1,.prefix__cls-2{fill:#669df6;fill-rule:evenodd}.prefix__cls-2{fill:#4285f4}"
        }
      </style>
    </defs>
    <g data-name="Product Icons">
      <path
        d="M3.33 7 12 2l8.66 5v9.72L17.33 14H6.67l-3.34 2.67ZM16 8.67a4 4 0 1 0-4 4 4 4 0 0 0 4-4m-1.33 0A2.67 2.67 0 1 1 12 6a2.67 2.67 0 0 1 2.67 2.67"
        className="prefix__cls-1"
      />
      <path
        d="M12 12.67a4 4 0 0 0 0-8V2l8.66 5v9.72L17.33 14H12Zm2.67-4A2.67 2.67 0 0 1 12 11.31V6a2.67 2.67 0 0 1 2.67 2.66Z"
        className="prefix__cls-2"
      />
      <path d="m4 18 8 4 8-4-3.33-2.67H7.33z" className="prefix__cls-1" />
      <path d="m12 22 8-4-3.33-2.67H12z" className="prefix__cls-2" />
    </g>
  </svg>
);
const Memo = memo(IdentityPlatform);
export default Memo;
