import type { SVGProps } from "react";
import { memo } from "react";
const Polly = (props: SVGProps<SVGSVGElement>) => (
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
        d="M40.023 39.004h7.006v-2h-7.006zm3.002 11h2.002v-5h-2.002zm-15.012-17h4.003v-2h-4.003zm-11.01 11h15.013v-2H17.003zm0-5h21.018v-2H17.003zm23.02 13h2.001v-9h-2.001zm15.012 0h2.002v-8h-2.002zm-3.002 2h2.001v-13h-2.001zm-3.003-1h2.002v-11H49.03zm-3.001-1h2.001v-9H46.03zm20.828 13.121-4.565-8.928a16.85 16.85 0 0 0 2.42-8.75c0-9.432-7.676-17.107-17.111-17.107-2.796 0-5.564.685-8.004 1.98l.939 1.767A15.1 15.1 0 0 1 47.6 32.34c8.33 0 15.11 6.777 15.11 15.108 0 2.927-.832 5.745-2.407 8.15a1 1 0 0 0-.054 1.004l3.84 7.508-7.64-3.821a1 1 0 0 0-.968.04 15.2 15.2 0 0 1-7.881 2.215c-7.521 0-13.96-5.603-14.977-13.032l-1.983.27c1.152 8.416 8.443 14.762 16.96 14.762 2.951 0 5.857-.767 8.439-2.224l9.103 4.553a1.3 1.3 0 0 0 1.495-.269 1.28 1.28 0 0 0 .219-1.479m-49.854-32.12h9.008v-2h-9.008zm14.012-9h7.592l-7.592-7.587zm-16.013 15H13V14.003a1 1 0 0 1 1-1L30.015 13c.261 0 .518.106.708.297l11.009 11c.191.192.293.448.293.707v3h-2.001v-2H30.014a1 1 0 0 1-1-1V15l-14.012.004zm0 13h14.011v2H14.001a1 1 0 0 1-1.001-1v-9h2.002z"
      />
    </g>
  </svg>
);
const Memo = memo(Polly);
export default Memo;
