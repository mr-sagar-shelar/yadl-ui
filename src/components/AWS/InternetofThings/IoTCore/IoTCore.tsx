import type { SVGProps } from "react";
import { memo } from "react";
const IoTCore = (props: SVGProps<SVGSVGElement>) => (
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
        d="M57.423 47.906c0-1.11-.897-2.012-2-2.012s-2 .903-2 2.012c0 1.11.897 2.012 2 2.012s2-.902 2-2.012m-3.36 3.768a4.01 4.01 0 0 1-2.497-2.762h-2.143v8.071c1.94-1.165 3.672-3.132 4.64-5.309m-6.64 6.203v-9.97c0-.556.447-1.007 1-1.007h3.143a4 4 0 0 1 2.503-2.764c-1.107-2.54-3.378-4.826-5.897-5.934a4 4 0 0 1-2.748 2.52v17.555a10.3 10.3 0 0 0 2-.4m-4 .399V40.722a4 4 0 0 1-2.747-2.516c-2.524 1.122-4.794 3.405-5.899 5.93a4 4 0 0 1 2.503 2.764h3.143c.553 0 1 .45 1 1.006v9.948c.657.21 1.32.354 2 .422m-4-1.334v-8.03H37.28a4.01 4.01 0 0 1-2.495 2.762c.96 2.144 2.69 4.09 4.638 5.268m-6-7.024c1.103 0 2-.902 2-2.012s-.897-2.012-2-2.012-2 .903-2 2.012c0 1.11.897 2.012 2 2.012m9-13.076c0 1.109.897 2.011 2 2.011s2-.902 2-2.011c0-1.11-.897-2.012-2-2.012s-2 .902-2 2.012m16.999 11.064a4.016 4.016 0 0 1-3.289 3.951c-1.217 3.2-3.797 6.042-6.71 7.39V64h-2v-4.042c-.651.164-1.321.279-2 .334V64h-2v-3.708a12 12 0 0 1-2-.347V64h-2v-4.787c-2.927-1.374-5.504-4.195-6.71-7.356a4.017 4.017 0 0 1-.005-7.902c1.276-3.46 4.332-6.534 7.787-7.83.338-1.877 1.966-3.307 3.928-3.307 1.96 0 3.587 1.428 3.927 3.302 3.45 1.28 6.508 4.355 7.787 7.835a4.02 4.02 0 0 1 3.285 3.951m5.576-9.432c.045 2.737-1.036 5.393-2.891 7.148l-1.37-1.467c1.452-1.372 2.296-3.467 2.26-5.603 0-4.124-3.01-7.457-7-7.831a1.005 1.005 0 0 1-.905-1.063l.008-.119q.009-.102.01-.208c0-2.642-2.123-4.79-4.733-4.79-1.22 0-2.38.472-3.265 1.328a.999.999 0 0 1-1.629-.373c-1.664-4.477-5.95-7.484-10.662-7.484-6.285 0-11.397 5.173-11.397 11.533 0 .435-.278.826-.69.962C19.306 31.634 17 34.845 17 38.495c0 4.634 3.726 8.405 8.306 8.405h.119v2.012h-.12C19.624 48.912 15 44.239 15 38.495c0-4.28 2.562-8.074 6.444-9.654C21.81 21.695 27.67 16 34.822 16c5.096 0 9.766 2.986 12.004 7.555a6.64 6.64 0 0 1 3.552-1.026c3.551 0 6.469 2.791 6.717 6.317 4.565.861 7.904 4.85 7.904 9.628"
      />
    </g>
  </svg>
);
const Memo = memo(IoTCore);
export default Memo;
