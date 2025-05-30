import type { SVGProps } from "react";
import { memo } from "react";
const UnreadMessages = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="prefix__injected-svg"
    viewBox="0 0 799.465 552.326"
    {...props}
  >
    <g data-name="Group 293">
      <path
        fill="#090814"
        d="M785.853-.001H13.612A13.747 13.747 0 0 0-.001 13.847v524.66a13.74 13.74 0 0 0 13.613 13.819h772.241a13.74 13.74 0 0 0 13.613-13.819V13.847A13.747 13.747 0 0 0 785.855-.001Z"
        data-name="Path 4661"
      />
      <path
        fill="#090814"
        d="M672.576 2.743H14.346a11.63 11.63 0 0 0-11.6 11.627v440.525a11.623 11.623 0 0 0 11.6 11.6h658.229a11.623 11.623 0 0 0 11.6-11.6V14.37a11.63 11.63 0 0 0-11.6-11.627Z"
        data-name="Path 4660"
      />
      <path
        fill="#fff"
        d="M763.032 2.743h-748.6a13.225 13.225 0 0 0-13.2 13.223v501.007a13.22 13.22 0 0 0 13.2 13.2h748.6a13.22 13.22 0 0 0 13.2-13.2V15.967a13.224 13.224 0 0 0-13.194-13.223Z"
        data-name="Path 4021"
      />
      <g data-name="Group 292" transform="translate(-423.267 -126.871)">
        <circle
          cx={183.5}
          cy={183.5}
          r={183.5}
          fill="var(--color-primary)"
          data-name="Ellipse 848"
          transform="translate(640 220.035)"
        />
        <ellipse
          cx={105.981}
          cy={84.761}
          fill="#d6d6e3"
          data-name="Ellipse 859"
          rx={105.981}
          ry={84.761}
          transform="rotate(-43.502 863.35 -654.666)"
        />
        <path
          fill="#090814"
          d="M864.027 367.193H773.8a15.784 15.784 0 0 0-15.784 15.784v39.614a15.784 15.784 0 0 0 15.784 15.784h15.352l1.993 13.264a3.353 3.353 0 0 0 5.131 2.322l24.233-15.586h43.518a15.784 15.784 0 0 0 15.784-15.784v-39.614a15.784 15.784 0 0 0-15.784-15.784"
          data-name="Path 5058"
        />
        <ellipse
          cx={20.563}
          cy={20.564}
          fill="var(--color-primary)"
          data-name="Ellipse 860"
          rx={20.563}
          ry={20.564}
          transform="translate(856.88 344.257)"
        />
      </g>
    </g>
  </svg>
);
const Memo = memo(UnreadMessages);
export default Memo;
