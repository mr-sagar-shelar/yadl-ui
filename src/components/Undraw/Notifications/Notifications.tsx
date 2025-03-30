import type { SVGProps } from "react";
import { memo } from "react";
const Notifications = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="prefix__injected-svg"
    viewBox="0 0 293.874 609.152"
    {...props}
  >
    <path
      fill="#2f2e41"
      d="M246.717 609.152H47.157C21.155 609.152 0 587.997 0 561.995V47.157C0 21.155 21.155 0 47.157 0h199.56c26.002 0 47.157 21.155 47.157 47.157v514.838c0 26.002-21.155 47.157-47.157 47.157"
    />
    <path
      fill="#fff"
      d="M246.92 596.425H46.954c-19.51 0-35.384-15.873-35.384-35.384V45.218c0-19.51 15.873-35.384 35.384-35.384H246.92c19.51 0 35.384 15.874 35.384 35.384v515.823c0 19.51-15.873 35.384-35.384 35.384"
    />
    <path
      fill="#2f2e41"
      d="M178.176 43.387H114.54c-7.336 0-13.305-5.969-13.305-13.305s5.969-13.306 13.305-13.306h63.635c7.336 0 13.305 5.969 13.305 13.306s-5.969 13.305-13.305 13.305"
    />
    <path
      fill="none"
      stroke="#090814"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M56.819 144.057h68.623M56.819 170.066h144.352M56.819 158.362h206.774"
    />
    <circle cx={41.213} cy={150.559} r={11.704} fill="var(--color-primary)" />
    <path
      fill="none"
      stroke="#090814"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M56.819 221.057h68.623M56.819 247.066h144.352M56.819 235.362h206.774"
    />
    <circle cx={41.213} cy={227.559} r={11.704} fill="var(--color-primary)" />
    <path
      fill="none"
      stroke="#090814"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M56.819 298.057h68.623M56.819 324.066h144.352M56.819 312.362h206.774"
    />
    <circle cx={41.213} cy={304.559} r={11.704} fill="var(--color-primary)" />
  </svg>
);
const Memo = memo(Notifications);
export default Memo;
