import type { SVGProps } from "react";
import { memo } from "react";
const Genomics = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <defs>
      <style>
        {
          ".prefix__cls-1{fill:#aecbfa}.prefix__cls-2{fill:#4285f4;fill-rule:evenodd}.prefix__cls-3{fill:#669df6}"
        }
      </style>
    </defs>
    <g data-name="Product Icons">
      <circle
        id="prefix__Oval"
        cx={12}
        cy={12}
        r={1.6}
        className="prefix__cls-1"
      />
      <path d="M7.58 9.2h6.37l.74-.7-.74-.7H7.58z" className="prefix__cls-2" />
      <circle cx={6.8} cy={8.5} r={1.23} className="prefix__cls-3" />
      <circle cx={17.2} cy={8.5} r={1.6} className="prefix__cls-1" />
      <path d="m9.36 15.5.74.7h6.28v-1.4H10.1z" className="prefix__cls-2" />
      <circle cx={6.8} cy={15.5} r={1.6} className="prefix__cls-1" />
      <circle cx={17.2} cy={15.5} r={1.23} className="prefix__cls-3" />
      <path d="M4.18 5h12.68l.74-.7-.74-.7H4.18z" className="prefix__cls-2" />
      <circle cx={3.6} cy={4.3} r={1.23} className="prefix__cls-3" />
      <circle cx={20.4} cy={4.3} r={1.6} className="prefix__cls-1" />
      <path d="m6.4 19.7.74.7h12.7V19H7.14z" className="prefix__cls-2" />
      <circle cx={3.6} cy={19.7} r={1.6} className="prefix__cls-1" />
      <circle cx={20.4} cy={19.7} r={1.23} className="prefix__cls-3" />
    </g>
  </svg>
);
const Memo = memo(Genomics);
export default Memo;
