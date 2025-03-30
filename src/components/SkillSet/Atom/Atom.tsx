import type { SVGProps } from "react";
import { memo } from "react";
const Atom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#242938" rx={60} />
    <rect width={256} height={256} fill="url(#prefix__a)" rx={60} />
    <path
      fill="#F2F8F6"
      d="M95.904 106.851a264 264 0 0 0-4.711 7.541 195 195 0 0 1-4.354-13.443c4.407-.632 9.092-1.13 14.03-1.475a270 270 0 0 0-4.965 7.377m121.867 8.832c-4.883-4.686-11.864-8.981-20.747-12.765-17.636-7.51-41.258-12.377-66.517-13.701-3.046-.16-6.019-.27-8.896-.328 19.284-23.017 37.909-35.265 48.755-35.676 2.297-.088 4.225.366 5.736 1.348 5.076 3.299 6.485 13.532 3.767 27.372a5.043 5.043 0 0 0 9.895 1.943c4.671-23.794-1.864-33.672-8.167-37.77-3.289-2.138-7.199-3.137-11.614-2.97-16.683.635-40.06 18.425-61.391 45.85-8.445.292-16.586 1.02-24.203 2.159-.835-3.883-1.481-7.645-1.92-11.251-1.912-15.767.434-26.959 6.277-29.939.939-.478 1.964-.754 3.136-.842 5.22-.392 12.586 3.116 20.727 9.877a5.041 5.041 0 1 0 6.442-7.757c-10.456-8.684-19.85-12.78-27.924-12.174-2.496.187-4.838.831-6.962 1.914-5.427 2.768-9.136 8.068-11.023 15.753-1.617 6.58-1.846 14.784-.681 24.382.46 3.796 1.134 7.747 2.002 11.814-5.955 1.254-11.473 2.784-16.42 4.571-21.642 7.817-26.638 18.122-27.019 25.391-.363 6.943 3.19 17.275 22.185 27.07a5.041 5.041 0 1 0 4.621-8.961c-10.926-5.635-17.027-12.043-16.737-17.583.409-7.804 13.49-16.063 35.772-20.717 2.064 7.453 4.715 15.196 7.894 23.047-8.009 15.032-13.852 29.848-16.882 43.028-2.166 9.416-2.798 17.592-1.881 24.301 1.07 7.835 4.205 13.491 9.313 16.812 2.605 1.693 6.115 3.017 10.726 3.017 6.686-.001 15.686-2.786 27.582-11.271a5.041 5.041 0 1 0-5.854-8.209c-11.727 8.364-21.805 11.358-26.96 8.009-5.496-3.572-6.655-14.937-3.1-30.401 2.357-10.253 6.564-21.617 12.268-33.331a262 262 0 0 0 3.88 7.952c11.481 22.554 25.536 42.176 39.576 55.253 7.071 6.585 13.834 11.222 20.099 13.781 3.803 1.553 7.374 2.329 10.688 2.329 3.068 0 5.918-.666 8.526-1.996 5.235-2.67 8.876-7.705 10.82-14.965 1.666-6.219 2.04-13.975 1.114-23.056-1.824-17.854-8.571-39.628-18.998-61.314a5.041 5.041 0 0 0-9.086 4.369c9.934 20.661 16.345 41.248 18.052 57.969 1.502 14.706-.922 25.18-6.482 28.015-5.839 2.977-16.253-1.699-27.861-12.51-13.199-12.293-26.503-30.921-37.464-52.448a250 250 0 0 1-6.914-14.75 250 250 0 0 1 8.441-13.985 253 253 0 0 1 9.307-13.392q1.242-.016 2.5-.022c4.33-.014 8.97.106 13.81.361 24.109 1.265 46.517 5.85 63.095 12.909 14.581 6.21 23.081 13.83 22.738 20.382-.291 5.563-7.05 11.313-18.545 15.777a5.043 5.043 0 0 0 1.827 9.743c.606 0 1.222-.111 1.821-.344 19.975-7.755 24.602-17.685 24.967-24.649.318-6.086-2.41-11.948-8.111-17.421"
    />
    <path
      fill="#F1F8F3"
      d="M118.049 129.344c0 6.089 4.932 11.025 11.014 11.025 6.085 0 11.016-4.936 11.016-11.025s-4.931-11.026-11.016-11.026c-6.082 0-11.014 4.937-11.014 11.026"
    />
    <defs>
      <linearGradient
        id="prefix__a"
        x1={128}
        x2={128}
        y1={10.14}
        y2={256}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B2E198" />
        <stop offset={1} stopColor="#04A171" />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Atom);
export default Memo;
