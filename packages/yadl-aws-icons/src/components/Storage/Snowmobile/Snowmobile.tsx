import type { SVGProps } from "react";
import { memo } from "react";
const Snowmobile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
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
        d="M68 40c0 14.888-11.996 27-26.74 27-11.313 0-21.441-7.235-25.204-18.003l1.888-.661C21.427 58.304 30.797 65 41.26 65 54.901 65 66 53.785 66 40S54.901 15 41.26 15c-9.644 0-18.468 5.723-22.48 14.579l-1.822-.825C21.294 19.184 30.833 13 41.26 13 56.004 13 68 25.112 68 40m-55 4h4v-2h-4zm-1-5h5v-2h-5zm2-5h3v-2h-3zm42.588 3C59.021 37 61 38.965 61 41.38V46h-.276c-.621-1.742-2.271-3-4.224-3a4.5 4.5 0 0 0-4.111 2.686H52V37zM56.5 50a2.503 2.503 0 0 1-2.5-2.5c0-1.378 1.121-2.5 2.5-2.5s2.5 1.122 2.5 2.5-1.121 2.5-2.5 2.5M50 46H39.724c-.621-1.742-2.271-3-4.224-3-1.752 0-3.257 1.017-4 2.481-.743-1.464-2.248-2.481-4-2.481-1.953 0-3.603 1.258-4.224 3H22V32h28zm-14.5 4a2.503 2.503 0 0 1-2.5-2.5c0-1.378 1.121-2.5 2.5-2.5s2.5 1.122 2.5 2.5-1.121 2.5-2.5 2.5m-8 0a2.503 2.503 0 0 1-2.5-2.5c0-1.378 1.121-2.5 2.5-2.5s2.5 1.122 2.5 2.5-1.121 2.5-2.5 2.5M51 30H21a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h2.051c.252 2.244 2.138 4 4.449 4 1.752 0 3.257-1.017 4-2.481.743 1.464 2.248 2.481 4 2.481 2.311 0 4.197-1.756 4.449-4H51c.285 0 .54-.123.722-.314h.297C52.118 50.079 54.082 52 56.5 52c2.311 0 4.197-1.756 4.449-4H62a1 1 0 0 0 1-1v-5.62c0-3.518-2.876-6.38-6.412-6.38H52v-4a1 1 0 0 0-1-1"
      />
    </g>
  </svg>
);
const Memo = memo(Snowmobile);
export default Memo;
