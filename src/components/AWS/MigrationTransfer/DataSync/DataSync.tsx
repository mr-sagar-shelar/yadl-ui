import type { SVGProps } from "react";
import { memo } from "react";
const DataSync = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient id="prefix__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#055F4E" />
        <stop offset="100%" stopColor="#56C0A7" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M58.909 32.164c-.562-4.22-2.967-6.392-5.13-7.022-1.928-.56-3.906-.104-5.453 1.192-.826-1.693-2.025-3.33-3.579-4.883-4.477-4.473-10.359-5.64-16.137-3.203C23.621 20.353 20 25.767 20 31.12v1.24c-4.584 1.433-7 4.779-7 9.719h2c0-4.312 2.044-6.929 6.248-8a1 1 0 0 0 .752-.966V31.12c0-4.514 3.177-9.26 7.389-11.037 4.992-2.105 10.07-1.093 13.942 2.775 1.786 1.785 3.04 3.67 3.725 5.605a1.002 1.002 0 0 0 1.749.26c1.111-1.498 2.803-2.135 4.414-1.668 2.151.626 3.565 2.916 3.783 6.126a1 1 0 0 0 .998.928c2.075 0 8 1.465 8 7.97 0 8.818-7.676 8.964-8 8.966h-6v1.993h6c.099 0 10-.126 10-10.959 0-6.71-5.244-9.529-9.091-9.915m-19.28 9.141a1 1 0 0 0-1.06-.125 1 1 0 0 0-.569.899v2.986h-4.998v1.992H39c.553 0 1-.446 1-.996v-1.894l6.058 4.886L40 53.938v-1.897a1 1 0 0 0-1-.996H23v-1.992a1 1 0 0 0-.548-.889 1.01 1.01 0 0 0-1.043.085l-9 6.572a.993.993 0 0 0 .011 1.615l9 6.38a1.002 1.002 0 0 0 1.58-.812v-1.977h5v-1.992h-6c-.553 0-1 .446-1 .996v1.041l-6.292-4.46L21 51.018v1.023c0 .55.447.997 1 .997h16v2.988a.999.999 0 0 0 1.629.774l8.648-6.973a.99.99 0 0 0 0-1.548zM30 60.011h3V58.02h-3zm6 0h12V58.02H36zm-23-12.95h12.951v-1.993H13zm15.003 0h2.854v-1.993h-2.854z"
      />
    </g>
  </svg>
);
const Memo = memo(DataSync);
export default Memo;
