import type { SVGProps } from "react";
import { memo } from "react";
const YoungManAvatar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="prefix__injected-svg"
    viewBox="0 0 640 640"
    {...props}
  >
    <defs>
      <clipPath id="prefix__a">
        <circle
          cx={320}
          cy={320}
          r={320}
          fill="none"
          stroke="#707070"
          transform="translate(-6887 -15230)"
        />
      </clipPath>
    </defs>
    <g transform="translate(-640 -220)">
      <circle
        cx={320}
        cy={320}
        r={320}
        fill="#f2f2f2"
        transform="translate(640 220)"
      />
      <g clipPath="url(#prefix__a)" transform="translate(7527 15450)">
        <path
          fill="#a0616a"
          d="M-6475.7-14911a86.2 86.2 0 1 0-131.232 45.789l-52.619 131.893 258.486-21.906s-130.944-70.3-132.623-98.389A86.11 86.11 0 0 0-6475.7-14911"
        />
        <path
          fill="var(--color-primary)"
          d="m-6413.871-14787.336 20.021-9.249s22.872 2.916 29.694 28.721 37.97 164.049 37.97 164.049 18.247 18.007 7.789 42.838c0 0 3.643 27.5-7.789 31.643s-88.021 63.265-88.021 63.265l.337-321.266Z"
        />
        <path
          fill="var(--color-primary)"
          d="m-6474.171-14823.358-58.329-30.442c-11.934 59.384-66.926 61.574-78.86 2.191l-38.058 28.251-80.321 26.773 11.683 311.424 163.034-.47.012.47h149.477l11.683-311.424z"
        />
        <path
          fill="var(--color-primary)"
          d="m-6709.716-14787.336-20.021-9.249s-22.872 2.916-29.694 28.721 5.841 175 5.841 175-18.247 18.007-7.789 42.838c0 0-3.643 27.5 7.789 31.643s43.873 5.974 43.873 5.974z"
        />
        <path
          fill="#090814"
          d="m-6630.674-14977.428-5.943 60.63s-62.364-121.008 15.192-143.384c0 0-7.553-10.227 3.408-13.63s114.874-19.72 123.157 31.154c0 0 54.285 33.645 37.856 69.642l-19.357 42.316-17.524.974s-.494-80.569-27.26-77.887-109.529 30.185-109.529 30.185"
        />
      </g>
    </g>
  </svg>
);
const Memo = memo(YoungManAvatar);
export default Memo;
