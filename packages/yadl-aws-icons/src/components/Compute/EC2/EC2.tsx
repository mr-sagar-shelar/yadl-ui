import type { SVGProps } from "react";
import { memo } from "react";
const EC2 = (props: SVGProps<SVGSVGElement>) => (
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
        d="M27 53h25V28H27zm27-25h4v2h-4v4h4v2h-4v3h4v2h-4v4h4v2h-4v4h4v2h-4v.136A1.866 1.866 0 0 1 52.136 55H52v4h-2v-4h-4v4h-2v-4h-3v4h-2v-4h-4v4h-2v-4h-4v4h-2v-4h-.136A1.866 1.866 0 0 1 25 53.136V53h-3v-2h3v-4h-3v-2h3v-4h-3v-2h3v-3h-3v-2h3v-4h-3v-2h3v-.136c0-1.028.836-1.864 1.864-1.864H27v-4h2v4h4v-4h2v4h4v-4h2v4h3v-4h2v4h4v-4h2v4h.136c1.028 0 1.864.836 1.864 1.864zM41 65.876a.125.125 0 0 1-.124.124H14.124a.125.125 0 0 1-.124-.124V39.124c0-.068.056-.124.124-.124H20v-2h-5.876A2.127 2.127 0 0 0 12 39.124v26.752c0 1.171.953 2.124 2.124 2.124h26.752A2.127 2.127 0 0 0 43 65.876V61h-2zm27-51.752v26.752A2.127 2.127 0 0 1 65.876 43H60v-2h5.876a.125.125 0 0 0 .124-.124V14.124a.125.125 0 0 0-.124-.124H39.124a.125.125 0 0 0-.124.124V20h-2v-5.876c0-1.171.953-2.124 2.124-2.124h26.752c1.171 0 2.124.953 2.124 2.124"
      />
    </g>
  </svg>
);
const Memo = memo(EC2);
export default Memo;
