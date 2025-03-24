import type { SVGProps } from "react";
import { memo } from "react";
const DefenderSlot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <rect width={4.286} height={18} fill="url(#prefix__a)" rx={1} />
    <path
      fill="#fff"
      d="M1.522 2.462h1.32A.16.16 0 0 0 3 2.304V.977a.16.16 0 0 0-.158-.159h-1.32a.16.16 0 0 0-.158.159v1.322a.16.16 0 0 0 .158.163m0 8.17h1.32A.157.157 0 0 0 3 10.475V3.898a.16.16 0 0 0-.158-.157h-1.32a.156.156 0 0 0-.158.157v6.576a.16.16 0 0 0 .096.15q.03.012.062.012z"
    />
    <path
      fill="#00188F"
      fillRule="evenodd"
      d="M6.939 18h-.01a.436.436 0 0 1-.429-.439v-.46h.439v.46h.464V18zm2.275 0v-.439h-.928V18zM11 15.544h-.439v.921H11zm0-1.557h-.439v.922H11zm0-1.556h-.439v.921H11zm0-1.557h-.439v.922H11zm0-1.556h-.439v.92H11zm0-1.557h-.439v.921H11zm0-1.556h-.439v.92H11zm0-1.557h-.439v.921H11zm0-1.557h-.439v.922H11zm0-1.556h-.439v.921H11zM8.286 0v.439h.928V0zM6.5.9h.439V.439h.464V0H6.94a.45.45 0 0 0-.228.064.44.44 0 0 0-.211.375zm0 .635h.439v.921H6.5zm0 1.556h.439v.922H6.5zm0 1.557h.439v.921H6.5zm0 1.557h.439v.92H6.5zm0 1.556h.439v.921H6.5zm0 1.557h.439v.92H6.5zm0 1.556h.439v.922H6.5zm0 1.557h.439v.921H6.5zm0 1.556h.439v.922H6.5zm0 1.557h.439v.921H6.5zM10.097 0h.464a.45.45 0 0 1 .228.064.44.44 0 0 1 .211.375v.46h-.439V.44h-.464zM11 17.1v.47100000000000003a.436.436 0 0 1-.43.429h-.47300000000000003v-.439h.464v-.46zM13.939 18h-.01a.436.436 0 0 1-.429-.43v-.46900000000000003h.439v.46h.464V18zm2.275 0v-.439h-.928V18zM18 15.544h-.439v.921H18zm0-1.557h-.439v.922H18zm0-1.556h-.439v.921H18zm0-1.557h-.439v.922H18zm0-1.556h-.439v.92H18zm0-1.557h-.439v.921H18zm0-1.556h-.439v.92H18zm0-1.557h-.439v.921H18zm0-1.557h-.439v.922H18zm0-1.556h-.439v.921H18zM15.286 0v.439h.928V0zM13.5.9h.439V.439h.464V0h-.464a.45.45 0 0 0-.228.064.44.44 0 0 0-.21.365L13.5.44zm0 .635h.439v.921H13.5zm0 1.556h.439v.922H13.5zm0 1.557h.439v.921H13.5zm0 1.557h.439v.92H13.5zm0 1.556h.439v.921H13.5zm0 1.557h.439v.92H13.5zm0 1.556h.439v.922H13.5zm0 1.557h.439v.921H13.5zm0 1.556h.439v.922H13.5zm0 1.557h.439v.921H13.5zM17.097 0h.464a.45.45 0 0 1 .228.064.44.44 0 0 1 .211.375v.46h-.439V.44h-.464zM18 17.1v.47100000000000003a.436.436 0 0 1-.43.429h-.47300000000000003v-.439h.464v-.46z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="prefix__a"
        x1={2.143}
        x2={2.143}
        y1={18}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0078D4" />
        <stop offset={0.156} stopColor="#1380DA" />
        <stop offset={0.528} stopColor="#3C91E5" />
        <stop offset={0.822} stopColor="#559CEC" />
        <stop offset={1} stopColor="#5EA0EF" />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(DefenderSlot);
export default Memo;
