import type { SVGProps } from "react";
import { memo } from "react";
const Adonis = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#5A45FE" rx={60} />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M46.617 160.689 89.46 63.317C96.694 46.903 110.604 38 128.13 38s31.437 8.903 38.671 25.317l42.844 97.372c1.947 4.73 3.616 10.85 3.616 16.136 0 24.204-16.971 41.175-41.175 41.175-8.243 0-14.793-2.104-21.419-4.234-6.791-2.182-13.666-4.391-22.537-4.391-8.768 0-15.816 2.231-22.741 4.422C98.692 215.916 92.106 218 84.174 218 59.971 218 43 201.029 43 176.825c0-5.286 1.67-11.406 3.617-16.136m81.514-80.4L85.844 175.99c12.52-5.843 26.986-8.625 42.287-8.625 14.745 0 29.768 2.782 41.731 8.625z"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(Adonis);
export default Memo;
