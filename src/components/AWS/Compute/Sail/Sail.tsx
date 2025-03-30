import type { SVGProps } from "react";
import { memo } from "react";
const Sail = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    <defs>
      <linearGradient id="prefix__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#C8511B" />
        <stop offset="100%" stopColor="#F90" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M32 41h3v-2h-3zm-6 0h3v-2h-3zm-6 0h3v-2h-3zm-6 0h3v-2h-3zm45.627 6.412 2.316-.772-2.316-.772-.772-2.315-.771 2.315-2.315.772 2.315.772.771 2.315zm-22.725 2.726-.772 2.316-2.316.772 2.316.771.772 2.316.772-2.316 2.315-.771-2.315-.772zm0-24.88-.772 2.315-2.316.772 2.316.772.772 2.316.772-2.316 2.315-.772-2.315-.772zm3.684 14.675c3.671 2.405 6.251 7.098 7.314 13.319 2.046-2.682 5.306-7.819 5.306-13.319 0-5.474-2.881-10.286-5.299-13.36-1.058 6.241-3.643 10.949-7.321 13.36m-2.497.919a1.001 1.001 0 0 1 0-1.838c4.37-1.874 7.337-7.309 8.139-14.91a1 1 0 0 1 1.736-.565c2.705 2.994 7.242 9.105 7.242 16.394 0 7.743-5.543 14.499-7.242 16.385a1 1 0 0 1-1.737-.565c-.803-7.596-3.769-13.028-8.138-14.901M67 40c0 12.682-10.317 23-23 23-11.447 0-21.244-8.54-22.788-19.865l1.982-.27C24.604 53.204 33.548 61 44 61c11.579 0 21-9.42 21-21s-9.421-21-21-21c-10.139 0-18.825 7.226-20.654 17.181l-1.967-.362C23.383 24.915 32.896 17 44 17c12.683 0 23 10.318 23 23"
      />
    </g>
  </svg>
);
const Memo = memo(Sail);
export default Memo;
