import type { SVGProps } from "react";
import { memo } from "react";
const CloudHealthcareApi = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <defs>
      <style>
        {".prefix__cls-4{fill:#4285f4}.prefix__cls-6{fill:#669df6}"}
      </style>
      <mask
        id="prefix__mask"
        width={5.33}
        height={16.67}
        x={9.33}
        y={5.33}
        maskUnits="userSpaceOnUse"
      >
        <path
          id="prefix__path-1"
          d="m12 22-.83-.77V6.67h1.66v14.56z"
          style={{
            fill: "#fff",
            fillRule: "evenodd",
          }}
        />
      </mask>
    </defs>
    <g data-name="Product Icons">
      <path
        d="m12 22-.83-.77V6.67h1.66v14.56z"
        data-name="Mask"
        style={{
          fillRule: "evenodd",
          fill: "#aecbfa",
        }}
      />
      <path
        d="M12 8a2.67 2.67 0 0 0 2.67-2.67H9.33A2.67 2.67 0 0 0 12 8"
        className="prefix__cls-4"
        style={{
          mask: "url(#prefix__mask)",
        }}
      />
      <path
        id="prefix__Line-2"
        d="M12.83 18.87h-1.66v-1.54h1.66z"
        className="prefix__cls-4"
      />
      <path d="M12.83 10.87h-1.66V9.33h1.66z" className="prefix__cls-4" />
      <circle
        cx={12}
        cy={4.67}
        r={2.67}
        style={{
          fill: "#aecbfa",
        }}
      />
      <path
        d="M16.67 10.17H6.83a1.17 1.17 0 0 0 0 2.33H10v1.67H6.83a2.84 2.84 0 0 1 0-5.67h9.84V7.33l3.33 2-3.33 2ZM12 7.33a2.67 2.67 0 0 0 2.67-2.66H9.33A2.67 2.67 0 0 0 12 7.33"
        className="prefix__cls-6"
      />
      <path
        d="M13.36 16.5H14a1.17 1.17 0 0 0 0-2.33h-1.17V12.5H14a2.84 2.84 0 0 1 0 5.67h-4v1.16l-3.33-2 3.33-2v1.17Z"
        className="prefix__cls-6"
      />
    </g>
  </svg>
);
const Memo = memo(CloudHealthcareApi);
export default Memo;
