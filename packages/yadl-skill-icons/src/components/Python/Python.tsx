import type { SVGProps } from "react";
import { memo } from "react";
const Python = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path
      fill="url(#prefix__a)"
      d="M127.279 29c-50.772 0-47.602 22.018-47.602 22.018l.057 22.81h48.451v6.85H60.489S28 76.992 28 128.221s28.357 49.414 28.357 49.414h16.924v-23.773s-.912-28.357 27.905-28.357h48.054s26.999.436 26.999-26.094V55.546S180.338 29 127.279 29m-26.716 15.339a8.71 8.71 0 0 1 8.717 8.717 8.71 8.71 0 0 1-8.717 8.716 8.71 8.71 0 0 1-8.716-8.716 8.71 8.71 0 0 1 8.716-8.717"
    />
    <path
      fill="url(#prefix__b)"
      d="M128.721 227.958c50.772 0 47.602-22.017 47.602-22.017l-.057-22.811h-48.451v-6.849h67.696S228 179.966 228 128.736s-28.357-49.413-28.357-49.413h-16.924v23.773s.912 28.357-27.905 28.357H106.76s-27-.437-27 26.093v43.866s-4.099 26.546 48.961 26.546m26.716-15.339a8.71 8.71 0 0 1-8.717-8.716 8.71 8.71 0 0 1 8.717-8.717 8.71 8.71 0 0 1 8.717 8.717 8.71 8.71 0 0 1-8.717 8.716"
    />
    <defs>
      <linearGradient
        id="prefix__a"
        x1={47.22}
        x2={146.333}
        y1={46.896}
        y2={145.02}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#387EB8" />
        <stop offset={1} stopColor="#366994" />
      </linearGradient>
      <linearGradient
        id="prefix__b"
        x1={108.056}
        x2={214.492}
        y1={109.905}
        y2={210.522}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE052" />
        <stop offset={1} stopColor="#FFC331" />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Python);
export default Memo;
