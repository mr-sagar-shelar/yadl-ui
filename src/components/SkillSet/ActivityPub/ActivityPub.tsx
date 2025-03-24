import type { SVGProps } from "react";
import { memo } from "react";
const ActivityPub = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path
      fill="#F1027E"
      fillRule="evenodd"
      d="m137.15 52 86.841 63.279v25.237l-86.841 63.655v-25.236l69.533-50.849-69.533-50.473z"
      clipRule="evenodd"
    />
    <path
      fill="#F1027E"
      fillRule="evenodd"
      d="m137.15 102.849 34.617 25.237-34.617 25.236z"
      clipRule="evenodd"
    />
    <path
      fill="#6D6D6D"
      fillRule="evenodd"
      d="M119.841 52 33 115.279v25.237l69.533-50.473v101.322l17.308 12.806zm-34.617 76.086L50.31 153.322l34.617 25.236v-50.472z"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(ActivityPub);
export default Memo;
