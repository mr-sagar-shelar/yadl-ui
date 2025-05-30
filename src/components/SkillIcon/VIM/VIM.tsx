import type { SVGProps } from "react";
import { memo } from "react";
const VIM = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path
      fill="#019833"
      stroke="#000"
      strokeWidth={4}
      d="M135.498 39.462c-7.422-7.432-19.466-7.432-26.888 0l-75.202 75.303c-7.408 7.418-7.408 19.434 0 26.852l74.778 74.878c7.422 7.432 19.466 7.432 26.888 0l75.202-75.304c7.408-7.418 7.408-19.434 0-26.852z"
    />
    <path
      fill="#fff"
      stroke="#000"
      strokeWidth={4}
      d="m161.769 40.71-2.686 2.689v9.87l2.352 2.355h12.425v9.537l-82.188 83.415V55.743h13.659l2.802-2.806v-9.989l-2.587-2.001H33.667L31.316 43.3v10.204l2.39 2.394h12.502v160.417a12.14 12.14 0 0 0 10.432 12.019c3.85.548 7.728-.782 10.432-3.576L235 51.247V43.4l-2.685-2.688z"
    />
  </svg>
);
const Memo = memo(VIM);
export default Memo;
