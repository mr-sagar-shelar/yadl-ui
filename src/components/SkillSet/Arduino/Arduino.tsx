import type { SVGProps } from "react";
import { memo } from "react";
const Arduino = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#00979C" rx={60} />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M19 136.512v-16.417c.344-.171.344-.513.344-.855 5.163-22.402 19.276-35.912 41.65-41.214 1.893-.513 3.958-.342 5.852-1.026H77.86c.172.342.689.171 1.033.171 11.015 1.197 20.997 5.13 29.774 11.971 7.573 5.643 13.425 12.826 18.76 20.521.688 1.026 1.033 1.026 1.721 0 3.098-4.446 6.368-8.721 10.154-12.654 9.122-9.748 20.137-16.589 33.561-18.983 1.893-.513 4.13-.342 6.024-1.026h10.67c.172.342.517.171.861.171 3.27.342 6.368 1.026 9.466 1.881 23.062 6.67 39.412 27.704 38.035 51.475-1.033 20.009-11.187 34.374-28.914 43.437-8.777 4.789-18.415 5.986-28.397 5.815-13.08-.171-24.439-4.618-34.249-13.168-6.885-5.986-12.22-13.168-17.211-20.693-.688-1.026-1.033-.855-1.721.171-3.098 4.618-6.368 9.235-10.154 13.681-6.712 7.525-14.457 13.681-24.095 16.931-11.876 4.104-23.923 4.275-35.97 1.026-17.383-4.96-29.258-15.905-35.798-32.664-1.033-2.736-1.55-5.814-2.41-8.551m54.73 25.139c9.81.342 18.243-2.907 25.471-9.576 7.401-6.841 12.736-15.392 18.072-23.771.172-.513.172-.855-.172-1.368-4.475-7.012-9.122-14.023-15.318-19.838-11.875-11.287-25.816-15.049-41.477-10.09-12.908 4.276-21.17 13.339-23.063 27.02-1.893 12.826 3.098 23.087 13.424 30.783 6.885 4.959 14.63 7.011 23.063 6.84m109.115 0c3.786 0 7.573-.171 11.187-1.197 13.596-4.104 22.546-12.484 25.128-26.507 2.581-13.852-2.754-24.968-14.457-32.834-12.908-8.893-31.668-8.038-44.748 1.71-8.777 6.498-14.629 15.22-20.481 24.284-.344.513-.172.855 0 1.368 4.647 7.353 9.294 14.707 15.318 21.034 7.572 8.038 16.694 12.655 28.053 12.142"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M73.558 122.831c5.507 0 11.187.171 16.694 0 1.377 0 1.549.342 1.549 1.71a20.7 20.7 0 0 0 0 4.618c.172 1.368-.172 1.71-1.721 1.71H68.05c-3.786 0-7.572-.171-11.359 0-1.205 0-1.549-.342-1.549-1.71.172-1.539.172-3.078 0-4.789 0-1.197.344-1.539 1.55-1.539 5.507.171 11.186 0 16.866 0m108.427-10.945c1.376 0 2.753.171 3.958 0 .861 0 1.205.342 1.205 1.197-.172 2.395 0 4.789-.172 7.183 0 1.197.344 1.539 1.549 1.539 2.237-.171 4.647 0 7.056-.171 1.033 0 1.377.171 1.377 1.368v7.867c0 .855-.344 1.197-1.205 1.197-2.409-.171-4.819 0-7.4-.171-1.033 0-1.377.342-1.377 1.368.172 2.394 0 4.788.172 7.183 0 1.026-.344 1.539-1.377 1.539a58.5 58.5 0 0 0-7.745 0c-1.032 0-1.377-.342-1.377-1.368.172-2.566 0-4.96.172-7.525 0-.855-.344-1.197-1.204-1.197-2.41.171-4.819 0-7.229.171-1.377 0-1.549-.513-1.549-1.539 0-2.394.172-4.789 0-7.183-.172-1.368.517-1.71 1.721-1.71 2.41.171 4.647 0 7.057.171.86 0 1.204-.342 1.204-1.197-.172-2.394 0-4.959-.172-7.353 0-1.027.345-1.369 1.377-1.369 1.377.171 2.582 0 3.959 0"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(Arduino);
export default Memo;
