import type { SVGProps } from "react";
import { memo } from "react";
const ExpressWorkflows = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient id="prefix__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#B0084D" />
        <stop offset="100%" stopColor="#FF4F8B" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M64.83 44H43.901l1.876-7h20.93zm3.973-8.609A1 1 0 0 0 68.01 35h-23a1 1 0 0 0-.966.741l-2.412 9A.999.999 0 0 0 42.598 46h23a1 1 0 0 0 .965-.741l2.413-9a1 1 0 0 0-.173-.868M43.304 62.5c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5M14.375 43h17.93l-1.073 4H13.303zm0-10h17.93l-1.073 4H13.303zm21.93-15.5c0-1.93 1.57-3.5 3.5-3.5 1.928 0 3.5 1.57 3.5 3.5s-1.572 3.5-3.5 3.5c-1.93 0-3.5-1.57-3.5-3.5m19.5 35.5h-32v-4H32a1 1 0 0 0 .966-.741l1.607-6A.999.999 0 0 0 33.607 41h-9.803v-2H32a1 1 0 0 0 .966-.741l1.607-6A.999.999 0 0 0 33.607 31h-9.803v-3h32v4h2v-5a1 1 0 0 0-1-1h-16v-3.096c2.555-.472 4.5-2.713 4.5-5.404 0-3.033-2.468-5.5-5.5-5.5a5.506 5.506 0 0 0-5.5 5.5c0 2.691 1.944 4.932 4.5 5.404V26h-16a1 1 0 0 0-1 1v4h-8.197a1 1 0 0 0-.965.741l-1.608 6A.999.999 0 0 0 12 39h9.804v2h-8.197a1 1 0 0 0-.965.741l-1.608 6A.999.999 0 0 0 12 49h9.804v5a1 1 0 0 0 1 1h16v2.096c-2.556.472-4.5 2.713-4.5 5.404 0 3.033 2.467 5.5 5.5 5.5s5.5-2.467 5.5-5.5c0-2.691-1.945-4.932-4.5-5.404V55h16a1 1 0 0 0 1-1v-4.973h-2z"
      />
    </g>
  </svg>
);
const Memo = memo(ExpressWorkflows);
export default Memo;
