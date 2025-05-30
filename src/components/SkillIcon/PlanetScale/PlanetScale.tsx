import type { SVGProps } from "react";
import { memo } from "react";
const PlanetScale = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#fff" rx={60} />
    <path
      fill="#000"
      d="M38 128.002C38 78.295 78.295 38 128.002 38c36.547 0 68.007 21.784 82.103 53.076L91.075 210.105a90 90 0 0 1-14.51-8.238l73.866-73.865h-22.429l-63.641 63.641C48.074 175.356 38 152.855 38 128.002M218 128.031l-89.971 89.971c49.682-.016 89.954-40.288 89.971-89.971"
    />
  </svg>
);
const Memo = memo(PlanetScale);
export default Memo;
