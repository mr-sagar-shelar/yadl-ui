import type { SVGProps } from "react";
import { memo } from "react";
const Transcribe = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
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
        d="M41 28.992h7v-2.001h-7zm0-6.028h9v-2.002h-9zm5 11.033h14v-2.002H46zm4-5.005h11v-2.001H50zm16 26.024H49v2.002h18a1 1 0 0 0 1-1V38h-2zm-1.418-32.029L57 15.413v7.574zm3.418 1v6.984h-2V24.99H56a1 1 0 0 1-1-1.001v-9.986l-18 .004V26.99h-2V13.005a1 1 0 0 1 1-1.001L56 12c.259 0 .515.102.706.292l11 10.987a1 1 0 0 1 .294.709M19 51.014h2v-7.007h-2zm4 3.002h2V40.003h-2zm4-2.002h2v-11.01h-2zm4 3.003h2V39.002h-2zm4-4.003h2v-9.009h-2zm4 4.003h2V39.002h-2zm4-5.004h2v-7.007h-2zm2.166 6.454 1.668 1.104c-3.26 4.937-8.806 7.885-14.835 7.885-3.22 0-6.403-.811-9.03-2.29l-9.08 4.697a1.4 1.4 0 0 1-.598.138 1.294 1.294 0 0 1-1.141-1.898l4.695-9.035C14.956 54.007 14 50.962 14 48.01c0-9.766 8.243-18.017 18-18.017 3.73 0 7.68 1.188 10.568 3.18l-1.135 1.649c-2.566-1.77-6.093-2.827-9.433-2.827-8.673 0-16 7.334-16 16.015 0 2.718.955 5.565 2.837 8.462a1 1 0 0 1 .05 1.007l-3.942 7.584 7.596-3.93a1 1 0 0 1 .98.036c2.373 1.451 5.463 2.284 8.48 2.284 5.355 0 10.277-2.613 13.166-6.987"
      />
    </g>
  </svg>
);
const Memo = memo(Transcribe);
export default Memo;
