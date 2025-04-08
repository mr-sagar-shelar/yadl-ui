import type { SVGProps } from "react";
import { memo } from "react";
const GuardDuty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    <defs>
      <linearGradient id="prefix__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#BD0816" />
        <stop offset="100%" stopColor="#FF5252" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M47 42.815c-.021 1.814-.538 7.5-6 8.123V29.036l6 2.556zm-14-.05V31.593l6-2.556v21.902c-5.463-.627-5.979-6.355-6-8.172m6.608-16.162-8 3.408a1 1 0 0 0-.608.92v11.846C31.054 47.493 33.443 53 40 53c6.556 0 8.945-5.475 9-10.174V30.93a1 1 0 0 0-.608-.92l-8-3.408a1 1 0 0 0-.784 0M51 42.825C50.999 43.322 50.843 55 40 55S29.001 43.286 29 42.788V28.949l11-4.687 11 4.687zm1.392-15.457-12-5.113a1 1 0 0 0-.784 0l-12 5.113a1 1 0 0 0-.608.92v14.5C27 42.93 27.148 57 40 57s13-14.033 13-14.174V28.288a1 1 0 0 0-.608-.92M66 44.308l-3.423-.196a1.02 1.02 0 0 0-1.032.779 21.9 21.9 0 0 1-2.852 6.887c-.26.414-.184.955.18 1.28l2.558 2.282-6.092 6.09-2.275-2.55a1 1 0 0 0-1.28-.178 21.9 21.9 0 0 1-6.894 2.856 1 1 0 0 0-.778 1.033L44.308 66h-8.616l.196-3.412a1 1 0 0 0-.778-1.033 21.9 21.9 0 0 1-6.89-2.858 1 1 0 0 0-1.281.18l-2.278 2.554-6.092-6.091 2.554-2.277c.364-.326.44-.867.18-1.28a21.9 21.9 0 0 1-2.851-6.891 1.01 1.01 0 0 0-1.032-.78l-3.42.196v-8.616l3.428.195c.461.016.923-.3 1.032-.777a22 22 0 0 1 2.856-6.879 1 1 0 0 0-.179-1.28l-2.568-2.29 6.092-6.092 2.289 2.565a1 1 0 0 0 1.279.18 21.9 21.9 0 0 1 6.88-2.847 1 1 0 0 0 .779-1.032L35.692 14h8.616l-.196 3.437a1 1 0 0 0 .778 1.032 22 22 0 0 1 6.876 2.85 1 1 0 0 0 1.279-.18l2.294-2.57 6.092 6.092-2.564 2.286a1 1 0 0 0-.179 1.28 22 22 0 0 1 2.854 6.882c.107.478.577.794 1.032.778L66 35.692zm1.687-10.402a1 1 0 0 0-.744-.27l-3.652.207a24 24 0 0 0-2.471-5.958l2.733-2.437a1 1 0 0 0 .041-1.453l-7.589-7.589a1 1 0 0 0-1.453.041l-2.446 2.74a23.9 23.9 0 0 0-5.95-2.467l.208-3.664A1 1 0 0 0 45.366 12H34.634a1 1 0 0 0-.998 1.056l.208 3.661a24 24 0 0 0-5.955 2.465l-2.441-2.735a1 1 0 0 0-1.453-.04l-7.589 7.588a1 1 0 0 0 .041 1.453l2.737 2.442a23.9 23.9 0 0 0-2.472 5.953l-3.655-.208a1 1 0 0 0-1.057.998v10.733a1 1 0 0 0 1.057.999l3.645-.208a23.8 23.8 0 0 0 2.469 5.967l-2.724 2.428a1 1 0 0 0-.041 1.453l7.589 7.589c.194.195.474.303.735.292a1 1 0 0 0 .718-.334l2.43-2.723a24 24 0 0 0 5.966 2.475l-.208 3.639A1 1 0 0 0 34.634 68h10.732a1 1 0 0 0 .998-1.057l-.208-3.636a23.9 23.9 0 0 0 5.97-2.473l2.426 2.718a1 1 0 0 0 .718.334 1 1 0 0 0 .735-.292l7.589-7.59a1 1 0 0 0-.041-1.452l-2.728-2.433a23.9 23.9 0 0 0 2.47-5.962l3.648.208c.27.01.544-.083.744-.272a1 1 0 0 0 .313-.727V34.633a1 1 0 0 0-.313-.727"
      />
    </g>
  </svg>
);
const Memo = memo(GuardDuty);
export default Memo;
