import type { SVGProps } from "react";
import { memo } from "react";
const LookoutforEquipment = (props: SVGProps<SVGSVGElement>) => (
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
        d="M54 28c0-5.514-4.486-10-10-10s-10 4.486-10 10c0 1.021.153 2.027.454 2.99l-1.908.597A12 12 0 0 1 32 28c0-6.617 5.383-12 12-12s12 5.383 12 12c0 5.793-4.13 10.757-9.819 11.802l-.362-1.967A9.99 9.99 0 0 0 54 28M18 62h4v-3h-4zm5-5h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1m5 5h4v-3h-4zm5-5h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1m29 9H14V19h7v33h2V38.261l9 8.181V52h2V38.135l10 8.333V54a1 1 0 0 0 1 1h17zM14 17h7v-3h-7zm49 36H46v-7c0-.297-.132-.578-.359-.768l-12-10A1.002 1.002 0 0 0 32 36v7.739l-9-8.181V13a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v54a1 1 0 0 0 1 1h50a1 1 0 0 0 1-1V54a1 1 0 0 0-1-1m2.285-4.423c-.677.772-1.763 1.292-2.536.613l-9.265-8.316a16 16 0 0 0 2.898-2.76l9.189 7.84c.313.274.455.639.425 1.085-.034.508-.286 1.054-.711 1.538m1.595-4.136-9.325-7.957A15.97 15.97 0 0 0 60 28c0-8.822-7.178-16-16-16s-16 7.178-16 16c0 1.448.193 2.884.575 4.266l1.928-.532A14 14 0 0 1 30 28c0-7.72 6.28-14 14-14s14 6.28 14 14c0 6.345-4.277 11.91-10.402 13.534l.511 1.933a16 16 0 0 0 3.639-1.465l9.674 8.684c.63.552 1.383.821 2.16.821 1.113 0 2.277-.551 3.207-1.611.712-.812 1.139-1.779 1.203-2.723.071-1.07-.319-2.037-1.112-2.732"
      />
    </g>
  </svg>
);
const Memo = memo(LookoutforEquipment);
export default Memo;
