import type { SVGProps } from "react";
import { memo } from "react";
const Inspector = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient id="prefix__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#BD0816" />
        <stop offset="100%" stopColor="#FF5252" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M35.508 30.856a2.335 2.335 0 0 1-2.332-2.332 2.335 2.335 0 0 1 2.332-2.334 2.336 2.336 0 0 1 2.333 2.334 2.336 2.336 0 0 1-2.333 2.332m-1.685 7.695a4.023 4.023 0 0 1 4.018 4.019 4.023 4.023 0 0 1-4.018 4.018 4.023 4.023 0 0 1-4.017-4.018 4.023 4.023 0 0 1 4.017-4.019m0 11.408c-7.79 0-14.128-6.34-14.128-14.132s6.338-14.132 14.128-14.132c7.791 0 14.13 6.34 14.13 14.132 0 2.008-.428 3.916-1.187 5.648L39.52 40.42a6.12 6.12 0 0 0-2.973-3.296v-4.33c1.93-.469 3.371-2.2 3.371-4.271a4.415 4.415 0 0 0-4.41-4.41 4.414 4.414 0 0 0-4.409 4.41c0 2.071 1.441 3.802 3.37 4.272v3.714a6.067 6.067 0 0 0-4.678 1.5l-2.51-2.537a5.9 5.9 0 0 0 1.062-3.383c0-2.031-1.02-3.9-2.73-4.997l-1.079 1.682a3.92 3.92 0 0 1 1.812 3.315 3.947 3.947 0 0 1-3.943 3.943v1.998c1.27 0 2.446-.405 3.413-1.087l2.667 2.694a6.05 6.05 0 0 0-.754 2.932 6.1 6.1 0 0 0 6.094 6.095c3.358 0 6.09-2.73 6.095-6.087l5.801.844c-2.512 3.924-6.901 6.537-11.896 6.537m0-30.34c-8.935 0-16.206 7.27-16.206 16.208s7.27 16.21 16.206 16.21 16.207-7.272 16.207-16.21S42.76 19.62 33.823 19.62m31.272 44.236a3.26 3.26 0 0 1-4.59.24L47.77 52.601a22 22 0 0 0 4.316-4.844l12.77 11.506a3.263 3.263 0 0 1 .24 4.59M14.077 35.828c0-10.89 8.858-19.75 19.746-19.75 10.889 0 19.747 8.86 19.747 19.75s-8.858 19.75-19.747 19.75-19.746-8.859-19.746-19.75m52.169 21.895-13.088-11.79a21.7 21.7 0 0 0 2.489-10.105C55.647 23.791 45.857 14 33.823 14 21.791 14 12 23.79 12 35.827s9.79 21.829 21.823 21.829c4.54 0 8.762-1.397 12.258-3.78l13.036 11.762A5.3 5.3 0 0 0 62.677 67c1.458 0 2.91-.592 3.961-1.756a5.344 5.344 0 0 0-.392-7.522"
      />
    </g>
  </svg>
);
const Memo = memo(Inspector);
export default Memo;
