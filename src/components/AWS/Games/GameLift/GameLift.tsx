import type { SVGProps } from "react";
import { memo } from "react";
const GameLift = (props: SVGProps<SVGSVGElement>) => (
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
        d="M60 52.51a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 60 52.51m-3-3a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 57 49.51m-17 2.5h-2v-2h2v-2h2v2h2v2h-2v2h-2zm26 10c0 3.585-1.712 4-3 4-2.36 0-4.75-4.29-6.414-7.776A7.94 7.94 0 0 0 60 59.01a7.98 7.98 0 0 0 6-2.726zm-28 4c-1.3 0-2.121-.486-2.585-1.53-.414-.931-.414-2.009-.414-2.47L35 56.284a7.98 7.98 0 0 0 6 2.726 7.94 7.94 0 0 0 3.414-.776C42.75 61.72 40.36 66.01 38 66.01m3-21c3.309 0 6 2.691 6 6 0 3.308-2.691 6-6 6s-6-2.692-6-6c0-3.309 2.691-6 6-6m11.589 9h-4.178a7.95 7.95 0 0 0-1.176-8h6.53a7.95 7.95 0 0 0-1.176 8m13.411-3h-.001v.019A6.006 6.006 0 0 1 60 57.01c-3.309 0-6-2.692-6-6 0-3.309 2.691-6 6-6s6 2.691 6 6m2 0c0-4.411-3.589-8-8-8a7.94 7.94 0 0 0-3.864 1H44.864a7.94 7.94 0 0 0-3.864-1c-4.411 0-8 3.589-8 8l.001 11c0 .537 0 1.963.586 3.282.551 1.24 1.765 2.718 4.413 2.718 4.196 0 7.247-6.728 9.266-11.18q.195-.43.373-.82h5.722q.178.39.373.82c2.019 4.452 5.07 11.18 9.266 11.18 1.503 0 5-.585 5-6l-.001-10.981zm-48.502-1.894c1.54-.816 3.307-1.494 5.243-2.022 1.069 3.373 2.58 6.148 4.39 8.055a21 21 0 0 1-9.633-6.033m-1.296-1.568A20.85 20.85 0 0 1 14.051 36h8.962c.07 3.3.487 6.401 1.184 9.174-2.225.609-4.249 1.407-5.995 2.374m-.001-25.097c1.748.969 3.771 1.767 5.996 2.376C23.499 27.6 23.083 30.7 23.013 34h-8.962a20.86 20.86 0 0 1 4.15-11.549m10.93-7.601c-1.81 1.908-3.322 4.683-4.391 8.057-1.935-.528-3.704-1.204-5.244-2.021a21 21 0 0 1 9.635-6.036M35 14c3.394 0 6.457 3.77 8.274 9.382a40.7 40.7 0 0 1-8.274.84 40.7 40.7 0 0 1-8.274-.839C28.542 17.77 31.606 14 35 14m15.502 6.883c-1.54.816-3.307 1.494-5.243 2.022-1.069-3.373-2.58-6.147-4.39-8.055a21 21 0 0 1 9.633 6.033m1.296 1.568A20.85 20.85 0 0 1 55.949 34h-8.962c-.07-3.301-.487-6.401-1.184-9.175 2.225-.609 4.249-1.406 5.995-2.374M25.025 34c.074-3.104.477-6.057 1.151-8.693 2.757.587 5.738.915 8.824.915 3.081 0 6.064-.328 8.824-.916.673 2.637 1.077 5.59 1.151 8.694zM31 54.17c-1.727-1.638-3.214-4.278-4.274-7.553a40 40 0 0 1 5.273-.719v-2.004c-2.014.14-3.972.405-5.823.799-.673-2.636-1.077-5.59-1.151-8.693h19.95a41 41 0 0 1-.59 6h2.052a43 43 0 0 0 .55-6h8.962a20.9 20.9 0 0 1-1.182 6h2.14A22.9 22.9 0 0 0 58 35c0-12.683-10.317-23-23-23S12 22.317 12 35c0 11.317 8.219 20.745 19 22.644z"
      />
    </g>
  </svg>
);
const Memo = memo(GameLift);
export default Memo;
