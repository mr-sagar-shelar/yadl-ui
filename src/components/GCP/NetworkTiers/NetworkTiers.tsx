import type { SVGProps } from "react";
import { memo } from "react";
const NetworkTiers = (props: SVGProps<SVGSVGElement>) => (
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
          ".prefix__cls-1{fill:#669df6}.prefix__cls-2{fill:#aecbfa}.prefix__cls-3{fill:#4285f4}"
        }
      </style>
    </defs>
    <g data-name="Product Icons">
      <path
        d="M7.3 15.7A5.92 5.92 0 0 1 6 12H2a9.9 9.9 0 0 0 2.46 6.54ZM12 2a10 10 0 0 0-6.55 2.45l2.84 2.84A6 6 0 0 1 18 12h4A10 10 0 0 0 12 2"
        className="prefix__cls-1"
      />
      <circle
        id="prefix__Oval-2"
        cx={8}
        cy={19}
        r={2}
        className="prefix__cls-2"
      />
      <circle
        id="prefix__Oval-2-2"
        cx={19}
        cy={16}
        r={2}
        className="prefix__cls-3"
        data-name="Oval-2"
      />
      <circle
        id="prefix__Oval-2-3"
        cx={14}
        cy={20}
        r={2}
        className="prefix__cls-1"
        data-name="Oval-2"
      />
      <path
        d="M6 12H2a10 10 0 0 0 .44 2.91l4-.79A6 6 0 0 1 6 12"
        className="prefix__cls-3"
      />
      <g data-name="colored-32/network-tiers">
        <circle
          id="prefix__Oval-2-4"
          cx={5}
          cy={8}
          r={2}
          className="prefix__cls-2"
          data-name="Oval-2"
        />
      </g>
      <path
        d="M17.61 9.88A6 6 0 0 1 18 12h4a10 10 0 0 0-.43-2.91Z"
        className="prefix__cls-3"
      />
    </g>
  </svg>
);
const Memo = memo(NetworkTiers);
export default Memo;
