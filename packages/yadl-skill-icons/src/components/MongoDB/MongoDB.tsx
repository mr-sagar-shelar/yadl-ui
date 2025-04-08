import type { SVGProps } from "react";
import { memo } from "react";
const MongoDB = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#023430" rx={60} />
    <path
      fill="#10AA50"
      d="M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99 99 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862-7.047 6.283-36.977 30.673-39.496 83.486-2.347 49.242 36.2 79.605 41.292 82.744 3.916 1.927 8.685.041 11.012-1.728 18.581-12.752 43.969-46.75 35.786-94.773"
    />
    <path
      fill="#B8C4C2"
      d="M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235 0 0 1.617 11.603 2.753 23.894h4.019a224 224 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397"
    />
    <path
      fill="#12924F"
      d="M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a500 500 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92 92 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609 8.203 47.941-17.047 81.849-35.608 94.684"
    />
  </svg>
);
const Memo = memo(MongoDB);
export default Memo;
