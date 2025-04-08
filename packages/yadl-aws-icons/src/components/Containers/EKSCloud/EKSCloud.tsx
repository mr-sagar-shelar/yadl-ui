import type { SVGProps } from "react";
import { memo } from "react";
const EKSCloud = (props: SVGProps<SVGSVGElement>) => (
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
        d="m61.239 61.377-21.502-.022c-2.604-.003-4.831-1.939-5.07-4.406a7 7 0 0 1-.031-.644c0-3.376 2.332-4.507 3.755-4.883a1 1 0 0 0 .788-1.122 8 8 0 0 1-.051-.904c0-2.783 1.918-5.775 4.366-6.812 4.251-1.798 7.26.567 8.358 1.669.899.901 1.601 2.056 2.086 3.431a1.001 1.001 0 0 0 1.748.261c.636-.86 1.666-1.237 2.621-.957 1.17.342 1.946 1.553 2.086 3.25a1 1 0 0 0 .825 1.082c1.369.236 4.551 1.197 4.551 5.036 0 4.483-4.143 4.982-4.53 5.021m-23.795 4.485L14 53.398V26.57l20-11.818v9.699l-10.537 6.705A1 1 0 0 0 23 32v16c0 .373.208.714.538.887l9.363 4.871.139.077a7.7 7.7 0 0 0-.404 2.47q.001.433.041.835c.335 3.481 3.436 6.211 7.058 6.215l2.247.001zm15.06-34.726L41 24.425v-9.673L61 26.57v19.897a4.4 4.4 0 0 0-2.132-1.399 4.31 4.31 0 0 0-3.623.569 10.5 10.5 0 0 0-1.977-2.796c-.086-.086-.18-.152-.268-.235V32a1 1 0 0 0-.496-.864M63 49.726V26a1 1 0 0 0-.491-.861l-22-13A1 1 0 0 0 39 13v12c0 .355.188.684.496.863L51 32.574v8.544c-2.517-1.404-5.463-1.57-8.285-.376-.99.419-1.888 1.086-2.678 1.887l-3.026-3.509 6.831-7.921H41.18L35 38v-7h-2v17h2v-8l3.682 4.311c-.968 1.53-1.554 3.322-1.554 5.085q0 .164.005.327c-1.348.493-2.421 1.304-3.187 2.35L25 47.393V32.548l10.537-6.705A1 1 0 0 0 36 25V13c0-.359-.193-.691-.504-.869a1 1 0 0 0-1.005.008l-22 13A1 1 0 0 0 12 26v28a1 1 0 0 0 .53.882l24.453 13a.996.996 0 0 0 .953-.007l8.178-4.515 15.205.014c2.232-.182 6.45-1.882 6.45-7.018 0-3.678-2.264-5.753-4.769-6.63"
      />
    </g>
  </svg>
);
const Memo = memo(EKSCloud);
export default Memo;
