import type { SVGProps } from "react";
import { memo } from "react";
const KinesisFirehose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient id="prefix__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#4D27A8" />
        <stop offset="100%" stopColor="#A166FF" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="m66.625 44.072-.742 1.856C62.685 44.649 58.784 44 54.288 44v-2c4.752 0 8.902.697 12.337 2.072m-.687-1.123C63.032 41.984 57.152 41 54.288 41v-2c2.896 0 8.751-.983 11.604-1.947l.64 1.894c-1.094.371-2.572.737-4.16 1.057 1.607.319 3.104.684 4.197 1.047zm.673-7.015C63.03 37.305 58.884 38 54.288 38v-2c4.351 0 8.256-.651 11.608-1.934zm-16.356 7.285-10 2.5V34.281l10 2.5zm-12 4.781h-3V32h3v16m13.242-12.97-11.242-2.811V31a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v.93c-15.202-1.109-17-7.311-17-11.93v-5h-2v5c0 8.469 6.23 13.023 19 13.927v1.036c-7.763-.311-13.337-1.536-17.469-3.836l-.973 1.747c4.429 2.467 10.313 3.77 18.442 4.09v2.014c-5.648-.134-13.299-.508-18.745-1.945L14 38.967c1.633.431 3.449.767 5.342 1.033-1.893.267-3.709.603-5.342 1.033l.51 1.934c5.447-1.437 13.098-1.811 18.745-1.944v2.014c-8.084.316-13.965 1.619-18.439 4.088l.967 1.751c4.175-2.304 9.762-3.52 17.472-3.829v1.021c-16.495 1.214-19 9.834-19 14.932l-.002.392c-.017 3.224-.007 3.582.008 3.715l1.991-.185c-.011-.182-.01-1.366.001-3.519l.002-.403c0-7.62 5.883-12.067 17-12.92V49a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-1.219l11.242-2.811a1 1 0 0 0 .758-.97v-8a1 1 0 0 0-.758-.97"
      />
    </g>
  </svg>
);
const Memo = memo(KinesisFirehose);
export default Memo;
