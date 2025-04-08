import type { SVGProps } from "react";
import { memo } from "react";
const ManagementConsole = (props: SVGProps<SVGSVGElement>) => (
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
        d="M26 19h3v-2h-3zm-5 0h3v-2h-3zm-5 0h3v-2h-3zm-2 3h52v-8H14zm53-10H13a1 1 0 0 0-1 1v54a1 1 0 0 0 1 1h33v-2H14V24h52v42h-7v2h8a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1M40 50.878a5.67 5.67 0 0 1-5.661-5.661c0-3.121 2.54-5.66 5.661-5.66a5.667 5.667 0 0 1 5.661 5.66A5.67 5.67 0 0 1 40 50.878m0-13.321c-4.225 0-7.661 3.436-7.661 7.66s3.436 7.661 7.661 7.661 7.661-3.437 7.661-7.661-3.436-7.66-7.661-7.66m15.652 9.911-1.706-.097c-.455-.023-.925.301-1.032.778a13.2 13.2 0 0 1-1.709 4.128 1 1 0 0 0 .18 1.28l1.274 1.137-3.182 3.182-1.133-1.269a1 1 0 0 0-1.281-.18 13.1 13.1 0 0 1-4.131 1.712 1 1 0 0 0-.778 1.033l.097 1.698h-4.502l.098-1.7a1 1 0 0 0-.778-1.032 13.2 13.2 0 0 1-4.13-1.714 1 1 0 0 0-1.28.18l-1.136 1.273-3.182-3.183 1.272-1.135a1 1 0 0 0 .18-1.28 13.1 13.1 0 0 1-1.709-4.13 1.02 1.02 0 0 0-1.032-.778l-1.704.097v-4.502l1.71.098c.46.018.923-.301 1.032-.778a13.1 13.1 0 0 1 1.711-4.122 1 1 0 0 0-.18-1.28l-1.28-1.143 3.183-3.183 1.142 1.28a1 1 0 0 0 1.279.18 13.1 13.1 0 0 1 4.123-1.707 1 1 0 0 0 .779-1.033l-.098-1.713h4.502l-.097 1.715a1 1 0 0 0 .778 1.032c1.463.332 2.848.906 4.119 1.709.413.26.955.184 1.28-.18l1.145-1.283 3.183 3.183-1.278 1.14a1 1 0 0 0-.18 1.281 13.1 13.1 0 0 1 1.711 4.125c.108.476.579.795 1.032.777l1.708-.098zm.944-6.559-1.944.111a15 15 0 0 0-1.325-3.194l1.454-1.297a1 1 0 0 0 .041-1.453l-4.68-4.68a.97.97 0 0 0-.736-.293 1 1 0 0 0-.718.334l-1.301 1.458a15 15 0 0 0-3.19-1.322l.111-1.951a1 1 0 0 0-.998-1.057h-6.62a1 1 0 0 0-.998 1.058l.112 1.948c-1.113.317-2.181.76-3.194 1.322l-1.298-1.456a1 1 0 0 0-1.454-.041l-4.68 4.68a.996.996 0 0 0 .041 1.453l1.456 1.299a15 15 0 0 0-1.325 3.192l-1.946-.111a1 1 0 0 0-1.056.999v6.619a1 1 0 0 0 1.056.998l1.94-.11c.317 1.115.76 2.187 1.323 3.199l-1.448 1.292a1 1 0 0 0-.041 1.453l4.68 4.681a.998.998 0 0 0 1.454-.042l1.292-1.448a15 15 0 0 0 3.199 1.327l-.111 1.936a1 1 0 0 0 .998 1.057h6.62a.998.998 0 0 0 .998-1.057l-.111-1.934a15 15 0 0 0 3.202-1.326l1.289 1.445a1 1 0 0 0 1.454.042l4.68-4.681a.996.996 0 0 0-.041-1.453l-1.451-1.294a15 15 0 0 0 1.324-3.197l1.942.11a1 1 0 0 0 1.056-.998v-6.619a1 1 0 0 0-1.056-.999"
      />
    </g>
  </svg>
);
const Memo = memo(ManagementConsole);
export default Memo;
