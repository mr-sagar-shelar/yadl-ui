import type { SVGProps } from "react";
import { memo } from "react";
const GameSparks = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
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
        d="M60 52.513a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 60 52.513m-3-3a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 57 49.513m-17 2.5h-2v-2h2v-2h2v2h2v2h-2v2h-2zm26 10c0 3.585-1.712 4-3 4-2.36 0-4.75-4.29-6.414-7.776a7.94 7.94 0 0 0 3.414.776 7.98 7.98 0 0 0 6-2.726zm-28 4c-1.3 0-2.121-.486-2.585-1.53-.414-.931-.414-2.009-.414-2.47L35 56.287a7.98 7.98 0 0 0 6 2.726 7.94 7.94 0 0 0 3.414-.776C42.75 61.723 40.36 66.013 38 66.013m3-21c3.309 0 6 2.691 6 6 0 3.308-2.691 6-6 6s-6-2.692-6-6c0-3.309 2.691-6 6-6m11.589 9h-4.178a7.95 7.95 0 0 0-1.176-8h6.53a7.95 7.95 0 0 0-1.176 8m13.411-3h-.001v.019A6.006 6.006 0 0 1 60 57.013c-3.309 0-6-2.692-6-6 0-3.309 2.691-6 6-6s6 2.691 6 6m-6-8a7.94 7.94 0 0 0-3.864 1H44.864a7.94 7.94 0 0 0-3.864-1c-4.411 0-8 3.589-8 8l.001 11c0 .537 0 1.963.586 3.282.551 1.24 1.765 2.718 4.413 2.718 4.196 0 7.247-6.728 9.266-11.18q.195-.43.373-.82h5.722q.178.39.373.82c2.019 4.452 5.07 11.18 9.266 11.18 1.503 0 5-.585 5-6l-.001-10.981.001-.019c0-4.411-3.589-8-8-8M43.59 16.487a6.64 6.64 0 0 0 2.103 2.103 6.64 6.64 0 0 0-2.103 2.103 6.6 6.6 0 0 0-2.104-2.103 6.6 6.6 0 0 0 2.104-2.103M38 19.59a4.595 4.595 0 0 1 4.59 4.59 1 1 0 1 0 2 0 4.594 4.594 0 0 1 4.59-4.59 1 1 0 0 0 0-2A4.594 4.594 0 0 1 44.59 13a1 1 0 1 0-2 0A4.595 4.595 0 0 1 38 17.59a1 1 0 1 0 0 2M25.75 44.182c-1.444-3.828-4.335-6.921-7.891-8.429 3.556-1.509 6.447-4.601 7.891-8.43 1.444 3.829 4.335 6.921 7.891 8.43-3.556 1.508-6.447 4.601-7.891 8.429m13.75-8.429a1 1 0 0 0-1-1c-6.369 0-11.75-5.912-11.75-12.91a1 1 0 1 0-2 0c0 6.998-5.381 12.91-11.75 12.91a1 1 0 1 0 0 2c6.369 0 11.75 5.911 11.75 12.909a1 1 0 1 0 2 0c0-6.998 5.381-12.909 11.75-12.909a1 1 0 0 0 1-1m20.277-9.35a8.34 8.34 0 0 0 3.337 3.336 8.34 8.34 0 0 0-3.337 3.336 8.33 8.33 0 0 0-3.336-3.336 8.33 8.33 0 0 0 3.336-3.336M52.5 30.739a6.285 6.285 0 0 1 6.277 6.278 1 1 0 0 0 2 0 6.286 6.286 0 0 1 6.279-6.278 1 1 0 0 0 0-2 6.286 6.286 0 0 1-6.279-6.278 1 1 0 1 0-2 0 6.285 6.285 0 0 1-6.277 6.278 1 1 0 1 0 0 2"
      />
    </g>
  </svg>
);
const Memo = memo(GameSparks);
export default Memo;
