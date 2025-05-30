import type { SVGProps } from "react";
import { memo } from "react";
const CapacityReservationGroups = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
    <path
      fill="#a33a85"
      d="m15.434 9.798-1.71 1.01-1.72 1-3.01 1.77-3-1.77-1.71-1-1.72-1.01 1.35-.79 5.08 2.98 5.09-2.98z"
    />
    <path
      fill="#59285f"
      d="M15.434 9.798v1.72l-6.44 3.78-6.43-3.78v-1.72l1.72 1.01 1.71 1 3 1.77 3.01-1.77 1.72-1z"
    />
    <path
      fill="#a33a85"
      d="m15.434 6.488-1.71 1-1.11.65-.61.36-3.01 1.76-3-1.76-.61-.36-1.1-.65-1.72-1 6.43-3.79z"
    />
    <path
      fill="#59285f"
      d="M15.434 6.488v1.72l-1.35.8-5.09 2.98-5.08-2.98-1.35-.8v-1.72l1.72 1 1.1.65.61.36 3 1.76 3.01-1.76.61-.36 1.11-.65z"
    />
    <path
      fill="#a33a85"
      d="M16.755 4.794v8.416a.56.56 0 0 1-.281.49l-7.186 4.222A.57.57 0 0 1 9 18V9.022l7.679-4.51a.57.57 0 0 1 .076.282"
      opacity={0.6}
    />
    <path
      fill="#dc92bf"
      d="M16.68 4.512 9 9.011v.011L1.32 4.511a.55.55 0 0 1 .206-.211L8.718.075a.57.57 0 0 1 .57 0l7.189 4.227a.57.57 0 0 1 .203.21"
      opacity={0.6}
    />
    <path
      fill="#ce74b6"
      d="M9 9.022V18a.55.55 0 0 1-.284-.077L1.526 13.7a.56.56 0 0 1-.281-.49V4.791a.56.56 0 0 1 .075-.28Z"
      opacity={0.6}
    />
  </svg>
);
const Memo = memo(CapacityReservationGroups);
export default Memo;
