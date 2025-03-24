import type { SVGProps } from "react";
import { memo } from "react";
const Selenium = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <g clipPath="url(#prefix__a)">
      <rect width={256} height={256} fill="#59B943" rx={60} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M233.776-6H256v267h-2.066a1.961 1.961 0 0 0 1.968-1.963V33.736a1.827 1.827 0 0 0-1.142-2.317 1.833 1.833 0 0 0-2.322 1.139l-82.676 92.586a2.523 2.523 0 0 1-3.701 0l-42.204-43.427a2.51 2.51 0 0 1 0-3.14l13.936-17.827a2.524 2.524 0 0 1 4.095 0l23.622 26.072a2.524 2.524 0 0 0 3.858 0l65.826-89.995c.183-.266.291-.576.314-.898a1.81 1.81 0 0 0-.823-1.64 1.8 1.8 0 0 0-.909-.289M1.968-6H0v1.963c0-.52.207-1.02.577-1.388C.946-5.793 1.447-6 1.968-6M0 259.037V261h1.968a1.97 1.97 0 0 1-1.391-.575A1.96 1.96 0 0 1 0 259.037m168.968-95.997a19.55 19.55 0 0 0-13.349 4.721 19.32 19.32 0 0 0-6.599 12.461.63.63 0 0 0 .117.545.63.63 0 0 0 .509.233h38.723a.64.64 0 0 0 .473-.209.61.61 0 0 0 .153-.491 18.7 18.7 0 0 0-6.446-12.719 18.93 18.93 0 0 0-13.581-4.541M26.141 216.003a63.73 63.73 0 0 0 45.197 15.706h-.08c29.843 0 44.252-15.235 44.252-35.182 0-25.017-23.279-30.59-41.64-34.986-11.954-2.863-21.823-5.225-21.823-12.131 0-6.597 5.669-11.073 15.747-11.073a47.96 47.96 0 0 1 30.236 10.366 2.44 2.44 0 0 0 1.857.57 2.45 2.45 0 0 0 1.686-.963l9.685-13.428a2.43 2.43 0 0 0 0-3.377 62.15 62.15 0 0 0-41.338-13.821c-26.141 0-41.889 15.235-41.889 33.532 0 24.602 22.399 29.907 40.616 34.221 12.485 2.957 23.005 5.448 23.005 13.368 0 6.282-6.299 12.25-19.212 12.25a48.5 48.5 0 0 1-33.07-12.879 2.44 2.44 0 0 0-2.747.14c-.26.197-.477.443-.64.724l-9.842 13.743a2.43 2.43 0 0 0 0 3.22m183.79-21.684c.107-.272.156-.563.145-.854l-.079-2.513c0-26.779-16.614-45.076-41.102-45.076a41.9 41.9 0 0 0-16.497 3.074 41.8 41.8 0 0 0-13.955 9.296 41.7 41.7 0 0 0-9.167 14.021 41.6 41.6 0 0 0-2.9 16.486 41.4 41.4 0 0 0 2.888 16.901 41.5 41.5 0 0 0 9.497 14.291 41.6 41.6 0 0 0 14.482 9.237 41.7 41.7 0 0 0 16.991 2.605 52.6 52.6 0 0 0 32.283-10.052 2.191 2.191 0 0 0 .472-2.905l-7.086-10.288a2.13 2.13 0 0 0-2.36-.887c-.29.081-.559.223-.79.416a36.44 36.44 0 0 1-20.157 6.597 22.17 22.17 0 0 1-15.357-4.536 22.06 22.06 0 0 1-8.265-13.683.7.7 0 0 1 .151-.524.7.7 0 0 1 .479-.261h58.267c.293.011.584-.039.857-.145a2.115 2.115 0 0 0 1.203-1.2"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="prefix__a">
        <rect width={256} height={256} fill="#fff" rx={60} />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(Selenium);
export default Memo;
