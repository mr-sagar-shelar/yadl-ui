import type { SVGProps } from "react";
import { memo } from "react";
const AzureManagedRedis = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="url(#prefix__a)"
      fillRule="evenodd"
      d="M9 .5a.5.5 0 0 1 .5.5v1h2V1a.5.5 0 1 1 1 0v1H14a2 2 0 0 1 2 2v1.5h1a.5.5 0 1 1 0 1h-1v2h1a.5.5 0 1 1 0 1h-1v2h1a.5.5 0 1 1 0 1h-1V14a2 2 0 0 1-2 2h-1.5v1a.5.5 0 0 1-1 0v-1h-2v1a.5.5 0 0 1-1 0v-1h-2v1a.5.5 0 0 1-1 0v-1H4a2 2 0 0 1-2-2v-1.5H1a.5.5 0 0 1 0-1h1v-2H1a.5.5 0 0 1 0-1h1v-2H1a.5.5 0 0 1 0-1h1V4a2 2 0 0 1 2-2h1.5V1a.5.5 0 1 1 1 0v1h2V1A.5.5 0 0 1 9 .5M8.984 3H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8.984"
      clipRule="evenodd"
    />
    <rect width={10} height={10} x={4} y={4} fill="url(#prefix__b)" rx={0.5} />
    <path
      fill="#fff"
      d="M12.124 9.31c-.484.567-1.007 1.215-2.053 1.215-.934 0-1.282-.766-1.307-1.387.205.402.605.727 1.23.712 1.2-.036 2.023-1.043 2.023-1.96 0-1.098-.88-1.89-2.41-1.89-1.095 0-2.451.387-3.342.999-.01.63.368 1.448.504 1.358.772-.516 1.384-.848 1.979-1.015-.88.911-2.99 3.026-3.248 3.399.029.341.484 1.259.707 1.259.068 0 .126-.036.194-.099a28 28 0 0 0 1.615-1.833c.065.841.51 1.869 1.755 1.869 1.113 0 2.217-.747 2.721-2.429.058-.207-.213-.369-.368-.198m-1.269-1.358c0 .53-.561.792-1.075.792-.274 0-.485-.067-.651-.154.306-.432.61-.874.936-1.347.575.09.79.387.79.709"
    />
    <defs>
      <linearGradient
        id="prefix__a"
        x1={0.5}
        x2={17.5}
        y1={17.253}
        y2={0.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#757575" />
        <stop offset={0.915} stopColor="#B0B0B0" />
      </linearGradient>
      <linearGradient
        id="prefix__b"
        x1={13.277}
        x2={4.536}
        y1={4.616}
        y2={13.393}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0078D4" />
        <stop offset={1} stopColor="#005BA1" />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(AzureManagedRedis);
export default Memo;
