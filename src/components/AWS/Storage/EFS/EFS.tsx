import type { SVGProps } from "react";
import { memo } from "react";
const EFS = (props: SVGProps<SVGSVGElement>) => (
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
        d="M31.378 24.024c6.264-2.62 10.7.826 12.316 2.429 1.318 1.309 2.346 2.98 3.056 4.967a1 1 0 0 0 1.74.265c.788-1.048 1.942-1.65 3.163-1.65 1.825 0 4.037 1.386 4.266 5.289a1 1 0 0 0 .793.92c4.533.952 6.832 3.467 6.832 7.472 0 3.722-1.704 6.022-5.063 6.837l.47 1.943c4.252-1.03 6.593-4.148 6.593-8.78 0-4.715-2.726-7.981-7.696-9.26-.542-4.428-3.439-6.42-6.195-6.42a5.8 5.8 0 0 0-3.61 1.265c-.76-1.65-1.745-3.08-2.94-4.269-3.963-3.925-9.38-4.992-14.497-2.853-4.377 1.836-7.677 6.898-7.677 11.776q0 .36.023.742c-4.017 1.322-6.388 4.615-6.388 8.961q.002.33.022.65c.207 3.757 2.717 7.007 6.395 8.277l.652-1.89c-2.905-1.004-4.888-3.555-5.05-6.494-.009-.176-.019-.359-.019-.543 0-5.083 3.573-6.73 5.702-7.26.49-.121.811-.588.752-1.09a11 11 0 0 1-.089-1.353c0-4.052 2.833-8.414 6.449-9.93m20.604 20.977c0-.397-.085-.696-.241-.842-.171-.159-.47-.174-.692-.16l-13.067.002a1 1 0 0 1-1-1c0-.27-.101-1.03-.217-1.5h-3.46c-.152.46-.316 1.24-.323 1.504-.014.542-.458.996-1 .996h-3c-.293-.019-.588 0-.758.158-.156.146-.243.445-.243.842v14h24zm2 2v7.229L56.564 47zm-.058 13.338-.009-.003a.99.99 0 0 1-.933.666h-26a1 1 0 0 1-1-1v-15c0-1.227.475-1.93.874-2.304.383-.358 1.063-.777 2.193-.694l2.05-.002c.178-1.035.622-2.502 1.69-2.502h4.553q.091 0 .184.017c.94.176 1.274 1.511 1.392 2.484h12.064c1.057-.073 1.742.34 2.125.697.4.374.875 1.077.875 2.303h4a1 1 0 0 1 .942 1.336zm12.058 4.248-7.606-7.606-1.414 1.414L64.567 66h-5.503v2h7.918a1 1 0 0 0 1-1v-7.918h-2zm-43.358-7.641-8.642 7.803v-5.667h-2V67a1 1 0 0 0 1 1h8.92v-2h-6.32l8.382-7.57zM66.982 12h-8.918v2h6.667l-7.804 8.642 1.484 1.34 7.571-8.383v6.32h2V13a1 1 0 0 0-1-1m-53 9.92h-2V13a1 1 0 0 1 1-1h8.92v2h-6.506l8.605 8.605-1.414 1.414-8.605-8.604z"
      />
    </g>
  </svg>
);
const Memo = memo(EFS);
export default Memo;
