import type { SVGProps } from "react";
import { memo } from "react";
const IoTEvents = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient id="prefix__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#1B660F" />
        <stop offset="100%" stopColor="#6CAE3E" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M26 21c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3m0 8c1.042 0 2.01-.322 2.812-.87l4.288 3.43a18 18 0 0 0-.637 1.643l1.902.619c2.002-6.149 7.467-10.384 13.922-10.786l-.125-1.996c-5.988.374-11.216 3.676-14.141 8.696l-3.816-3.053A4.96 4.96 0 0 0 31 24c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5m-8 14c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m4.898-2h17.691a9 9 0 0 0 2.182 4.594 9 9 0 0 0 6.758 3.022 9.025 9.025 0 0 0 8.436-5.784L56.1 42.11a7.02 7.02 0 0 1-6.975 4.494 7 7 0 0 1-4.862-2.342 7.01 7.01 0 0 1-1.782-5.095 7.01 7.01 0 0 1 2.343-4.861 7.03 7.03 0 0 1 5.094-1.782 7.03 7.03 0 0 1 6.435 5.283l1.937-.498a9.02 9.02 0 0 0-8.259-6.782 8.96 8.96 0 0 0-6.539 2.287A9 9 0 0 0 40.491 39H22.898A5.01 5.01 0 0 0 18 35c-2.757 0-5 2.243-5 5s2.243 5 5 5a5.01 5.01 0 0 0 4.898-4m41.997-3.31a15.6 15.6 0 0 0-1.106-4.889l1.854-.75a17.6 17.6 0 0 1 1.248 5.514zm-.319 4.281 1.955.421a17.5 17.5 0 0 1-2.718 6.289l-1.647-1.135a15.5 15.5 0 0 0 2.41-5.575M53 41h14v-2H53zm-2.977 9.112.125 1.996q-.41.026-.816.026c-5.877 0-11.132-3.967-12.681-9.692l1.93-.522c1.374 5.076 6.209 8.528 11.442 8.192m-1.365-24.223c6.44-.395 12.175 3.867 13.619 10.154l-1.949.448c-1.224-5.328-6.093-8.934-11.545-8.606-5.271.329-9.619 4.359-10.339 9.582l-1.98-.273c.848-6.162 5.976-10.917 12.194-11.305M26 59c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m24.24-4.702a15.67 15.67 0 0 1-14.927-8.505l-1.781.912c.247.483.523.946.81 1.4l-4.951 4.243A4.97 4.97 0 0 0 26 51c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5c0-.721-.16-1.403-.437-2.023l4.941-4.235a17.66 17.66 0 0 0 14.861 6.552 17.6 17.6 0 0 0 9.668-3.627l-1.22-1.584a15.6 15.6 0 0 1-8.573 3.215"
      />
    </g>
  </svg>
);
const Memo = memo(IoTEvents);
export default Memo;
