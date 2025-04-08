import type { SVGProps } from "react";
import { memo } from "react";
const Pinpoint = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
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
        d="m39.293 39.293 4.18-4.179A5.96 5.96 0 0 0 40.004 34a6.003 6.003 0 0 0-5.997 5.997 6.003 6.003 0 0 0 5.997 5.996A6 6 0 0 0 46 39.997a5.96 5.96 0 0 0-1.113-3.469l-4.18 4.179zm11.276-8.448-4.256 4.257A7.95 7.95 0 0 1 48 39.997c0 4.409-3.587 7.996-7.996 7.996s-7.997-3.587-7.997-7.996S35.595 32 40.004 32a7.94 7.94 0 0 1 4.894 1.688l4.257-4.257A13.92 13.92 0 0 0 40.004 26c-7.718 0-13.997 6.279-13.997 13.997 0 7.717 6.279 13.996 13.997 13.996S54 47.714 54 39.997c0-3.5-1.3-6.696-3.431-9.152m2.461-7.33A3.49 3.49 0 0 0 56.515 27 3.49 3.49 0 0 0 60 23.515a3.49 3.49 0 0 0-3.485-3.485 3.49 3.49 0 0 0-3.485 3.485m-2.462 4.502 1.416-1.415a5.46 5.46 0 0 1-.954-3.087 5.49 5.49 0 0 1 5.485-5.485A5.49 5.49 0 0 1 62 23.515 5.49 5.49 0 0 1 56.515 29a5.45 5.45 0 0 1-3.12-.98l-1.413 1.411C54.475 32.253 56 35.946 56 39.997c0 8.82-7.176 15.996-15.996 15.996s-15.997-7.176-15.997-15.996S31.183 24 40.004 24c4.051 0 7.743 1.526 10.564 4.017M64 40c0 13.233-10.767 24-24 24S16 53.233 16 40s10.767-24 24-24c3.361 0 6.614.684 9.669 2.032l-.809 1.83A21.8 21.8 0 0 0 40 18c-12.131 0-22 9.869-22 22s9.869 22 22 22 22-9.869 22-22c0-3.09-.622-6.056-1.851-8.814l1.829-.814C63.319 33.389 64 36.628 64 40"
      />
    </g>
  </svg>
);
const Memo = memo(Pinpoint);
export default Memo;
