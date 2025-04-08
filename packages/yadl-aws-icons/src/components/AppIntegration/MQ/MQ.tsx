import type { SVGProps } from "react";
import { memo } from "react";
const MQ = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    <defs>
      <linearGradient id="prefix__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#B0084D" />
        <stop offset="100%" stopColor="#FF4F8B" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M20.137 51.603a23 23 0 0 1-2.271-5.33l1.924-.545a21 21 0 0 0 2.074 4.865zm-.347-17.33-1.924-.545a23 23 0 0 1 2.212-5.229l1.731 1.002a21 21 0 0 0-2.019 4.772m11.619-13.441-.818-1.824A22.8 22.8 0 0 1 40 17c3.278 0 6.444.676 9.409 2.008l-.818 1.824A20.84 20.84 0 0 0 40 19c-2.993 0-5.884.617-8.591 1.832m28.513 7.667a23 23 0 0 1 2.212 5.229l-1.924.545a21 21 0 0 0-2.018-4.772zm.288 17.229 1.924.545a23 23 0 0 1-2.212 5.228l-1.73-1.002a20.9 20.9 0 0 0 2.018-4.771M48.591 59.169l.818 1.824A22.8 22.8 0 0 1 40 63c-3.277 0-6.443-.675-9.409-2.007l.818-1.824A20.8 20.8 0 0 0 40 61c2.993 0 5.884-.616 8.591-1.831M25 59c-1.654 0-3-1.345-3-3 0-1.654 1.346-3 3-3 1.655 0 3 1.346 3 3 0 1.655-1.345 3-3 3m0-8c-2.757 0-5 2.244-5 5 0 2.757 2.243 5 5 5s5-2.243 5-5c0-2.756-2.243-5-5-5m30 8c-1.654 0-3-1.345-3-3 0-1.654 1.346-3 3-3 1.655 0 3 1.346 3 3 0 1.655-1.345 3-3 3m0-8c-2.757 0-5 2.244-5 5 0 2.757 2.243 5 5 5s5-2.243 5-5c0-2.756-2.243-5-5-5M16 40c0-1.654 1.346-3 3-3 1.655 0 3 1.346 3 3 0 1.655-1.345 3-3 3-1.654 0-3-1.345-3-3m7.899 1h4.695l-1.299 1.291 1.41 1.418 3-2.982a1 1 0 0 0 .004-1.415l-3-3.017-1.418 1.411L28.578 39h-4.679A5.01 5.01 0 0 0 19 35c-2.757 0-5 2.244-5 5 0 2.757 2.243 5 5 5a5.01 5.01 0 0 0 4.899-4M62 43c-1.654 0-3-1.345-3-3 0-1.654 1.346-3 3-3 1.655 0 3 1.346 3 3 0 1.655-1.345 3-3 3m0-8c-2.757 0-5 2.244-5 5 0 2.757 2.243 5 5 5s5-2.243 5-5c0-2.756-2.243-5-5-5M25 21c1.655 0 3 1.346 3 3 0 1.655-1.345 3-3 3-1.654 0-3-1.345-3-3 0-1.654 1.346-3 3-3m0 8c2.757 0 5-2.243 5-5 0-2.756-2.243-5-5-5s-5 2.244-5 5c0 2.757 2.243 5 5 5m30-8c1.655 0 3 1.346 3 3 0 1.655-1.345 3-3 3-1.654 0-3-1.345-3-3 0-1.654 1.346-3 3-3m0 8c2.757 0 5-2.243 5-5 0-2.756-2.243-5-5-5s-5 2.244-5 5c0 2.757 2.243 5 5 5m-4.6 13.201L51.999 41H48v-2h4l-1.599-1.199L51.6 36.2l4 2.999a1 1 0 0 1 .001 1.6l-4 3.001zm-4.545 3.667c-1.799-.696-3.827-1.044-5.855-1.044-2.027 0-4.055.348-5.854 1.044.681-1.743 1.047-3.745 1.047-5.868 0-2.122-.366-4.124-1.047-5.867 3.597 1.392 8.111 1.392 11.709 0-.682 1.743-1.047 3.745-1.047 5.867 0 2.123.365 4.125 1.047 5.868m3.852 2.425c-1.815-1.815-2.899-4.915-2.899-8.293s1.084-6.477 2.899-8.293a.996.996 0 0 0 0-1.414 1 1 0 0 0-1.414 0c-3.875 3.875-12.711 3.875-16.586 0a1 1 0 0 0-1.414 1.414c1.816 1.816 2.9 4.916 2.9 8.293 0 3.378-1.084 6.478-2.9 8.293a1 1 0 0 0 1.414 1.414c3.875-3.875 12.711-3.875 16.586 0A1 1 0 0 0 49 50a1 1 0 0 0 .707-.293.996.996 0 0 0 0-1.414"
      />
    </g>
  </svg>
);
const Memo = memo(MQ);
export default Memo;
