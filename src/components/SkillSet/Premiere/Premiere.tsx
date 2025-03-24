import type { SVGProps } from "react";
import { memo } from "react";
const Premiere = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#00005B" rx={60} />
    <path
      fill="#99F"
      d="M54 182.68V72.813c0-.746.32-1.173 1.067-1.173 1.813 0 3.52 0 5.973-.107 2.56-.106 5.227-.106 8.107-.213s5.973-.107 9.28-.213C81.733 71 84.933 71 88.133 71c8.747 0 16 1.067 21.974 3.307a38.1 38.1 0 0 1 14.293 8.746 34 34 0 0 1 7.787 12.16c1.6 4.48 2.453 9.067 2.453 13.867q0 13.76-6.4 22.72c-4.267 5.973-10.24 10.453-17.173 13.013-7.254 2.667-15.254 3.627-24 3.627-2.56 0-4.267 0-5.334-.107-1.066-.106-2.56-.106-4.586-.106v34.24c.106.746-.427 1.386-1.174 1.493H55.28c-.853 0-1.28-.427-1.28-1.387zm23.253-90.347v35.84c1.494.107 2.88.214 4.16.214h5.654c4.16 0 8.32-.64 12.266-1.92 3.414-.96 6.4-2.987 8.747-5.654 2.24-2.666 3.307-6.293 3.307-10.986a17.56 17.56 0 0 0-2.454-9.494c-1.813-2.773-4.373-4.906-7.466-6.08-3.947-1.6-8.214-2.24-12.587-2.133-2.773 0-5.227 0-7.253.107-2.134-.107-3.627 0-4.374.106M150 98.627h18.667c1.067 0 1.92.746 2.24 1.706.32.854.533 1.707.64 2.667.213 1.067.427 2.24.533 3.307.107 1.173.214 2.453.214 3.84a39.7 39.7 0 0 1 11.413-9.174c4.907-2.773 10.56-4.16 16.213-4.16.747-.106 1.387.427 1.494 1.174v21.226c0 .854-.534 1.174-1.707 1.174-3.84-.107-7.787.213-11.52 1.066q-4.64.96-8.96 2.88c-2.027.96-3.947 2.24-5.44 3.947v54.4c0 1.067-.427 1.493-1.387 1.493h-21.013c-.853.107-1.6-.426-1.707-1.28v-59.52c0-2.56 0-5.226-.106-8-.107-2.773-.107-5.546-.214-8.32 0-2.453-.213-4.8-.426-7.253-.107-.533.213-1.067.746-1.173 0-.107.214-.107.32 0"
    />
  </svg>
);
const Memo = memo(Premiere);
export default Memo;
