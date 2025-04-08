import type { SVGProps } from "react";
import { memo } from "react";
const Azul = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="url(#prefix__a)" rx={60} />
    <g clipPath="url(#prefix__b)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m140.494 39.3.106 11.3 20.87.2 20.871.2-2.358 3.8a642 642 0 0 1-3.127 5c-.423.66-2.378 3.81-4.344 7s-5.451 8.81-7.744 12.488c-2.292 3.678-4.35 7.008-4.573 7.4a44 44 0 0 1-1.052 1.712c-.356.55-1.865 2.98-3.354 5.4-3.928 6.386-11.736 18.97-12.78 20.6-1.736 2.709-2.609 4.299-2.609 4.749 0 .337 11.277.428 43.7.353l43.7-.102V96.6l-23.109-.103-23.108-.103.67-1.297c.369-.713.986-1.747 1.371-2.297.386-.55 2.185-3.43 3.998-6.4s3.701-6.03 4.195-6.8 2.556-4.1 4.583-7.4c2.026-3.3 4.095-6.63 4.596-7.4s2.125-3.38 3.609-5.8 3.104-5.03 3.602-5.8 2.392-3.83 4.211-6.8c1.818-2.97 3.886-6.3 4.594-7.4 2.429-3.772 6.588-10.586 6.588-10.793 0-.114-18.723-.207-41.606-.207h-41.607zm-69.071-3.2c-1.503 2.915-3.854 7.46-5.225 10.1s-4.16 8.04-6.199 12-4.92 9.54-6.402 12.4c-6.191 11.946-8.687 16.77-18.051 34.9-1.79 3.465-3.945 7.582-4.79 9.149s-1.716 3.322-1.936 3.9l-.4 1.051 16.69-.001 16.69-.001 2.505-4.899c8.038-15.717 11.606-22.469 11.93-22.572.2-.064.995 1.005 1.765 2.374A849 849 0 0 0 83.396 104c.826 1.43 1.93 3.354 2.452 4.274.522.921 2.192 3.801 3.712 6.4l2.763 4.726 17.219.104 17.219.104-1.429-2.504-2.228-3.904a3880 3880 0 0 0-5.305-9.2c-2.479-4.29-5.007-8.7-5.619-9.8-.611-1.1-2.221-3.89-3.577-6.2a710 710 0 0 1-7-12.2c-.492-.88-3.603-6.28-6.916-12-3.312-5.72-6.517-11.3-7.122-12.4s-3.14-5.512-5.632-9.806c-2.494-4.293-4.889-8.478-5.324-9.3-1.418-2.679-2.102-2.177-5.186 3.806M28.088 163.895 28.201 193l1.127 3.2c5.005 14.228 15.233 25.158 28.654 30.62l2.901 1.18 15.059-.006c16.812-.006 15.961.11 22.063-3.018 15.31-7.849 25.003-22.075 26.772-39.292.446-4.339.606-48.341.18-49.452-.216-.562-1.999-.632-15.978-.632H93.245l-.141 24.7c-.156 27.349-.025 25.945-2.852 30.414-6.734 10.647-23.545 9.747-29.28-1.568-1.784-3.521-1.886-4.962-2.135-30.146l-.237-24-15.312-.105-15.313-.105zm112.178-28.028c-.146.147-.266 20.936-.266 46.199V228h88v-26.395l-30.7-.102-30.7-.103-.103-32.9-.102-32.9h-12.931c-7.112 0-13.051.12-13.198.267"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <linearGradient
        id="prefix__a"
        x1={0}
        x2={256}
        y1={0}
        y2={266}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#014C8E" />
        <stop offset={1} stopColor="#013B70" />
      </linearGradient>
      <clipPath id="prefix__b">
        <path fill="#fff" d="M28 28h200v200H28z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(Azul);
export default Memo;
