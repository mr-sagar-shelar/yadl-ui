import type { SVGProps } from "react";
import { memo } from "react";
const Replit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F4ED" rx={60} />
    <path
      fill="#F26207"
      d="M53 49.25C53 43.037 58.037 38 64.25 38h52.5c6.213 0 11.25 5.037 11.25 11.25V98H64.25C58.037 98 53 92.963 53 86.75zM127.999 98.002h63.75c6.213 0 11.25 5.037 11.25 11.25v37.5c0 6.213-5.037 11.25-11.25 11.25h-63.75z"
    />
    <path
      fill="#F26207"
      d="M53 169.25c0-6.213 5.037-11.25 11.25-11.25H128v48.75c0 6.213-5.037 11.25-11.25 11.25h-52.5C58.037 218 53 212.963 53 206.75z"
    />
  </svg>
);
const Memo = memo(Replit);
export default Memo;
