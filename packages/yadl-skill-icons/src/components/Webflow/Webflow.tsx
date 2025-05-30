import type { SVGProps } from "react";
import { memo } from "react";
const Webflow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#4353FF" rx={60} />
    <path
      fill="#fff"
      d="M169.105 103.436s-13.815 43.282-14.836 46.957c-.408-3.607-10.48-81.393-10.48-81.393-23.547 0-36.069 16.741-42.739 34.436 0 0-16.809 43.418-18.17 47.025-.068-3.403-2.586-46.617-2.586-46.617C78.864 82.134 59.06 69 43 69l19.328 117.802c24.635-.068 37.906-16.741 44.847-34.503 0 0 14.768-38.315 15.381-40.016.136 1.633 10.616 74.519 10.616 74.519 24.704 0 38.043-15.584 45.188-32.666L213 69c-24.432 0-37.294 16.673-43.895 34.436"
    />
  </svg>
);
const Memo = memo(Webflow);
export default Memo;
