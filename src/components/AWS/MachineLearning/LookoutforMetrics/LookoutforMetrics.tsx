import type { SVGProps } from "react";
import { memo } from "react";
const LookoutforMetrics = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
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
        d="M68 66v2H13a1 1 0 0 1-1-1V12h2v54zm-51.148-2.476-1.704-1.048 8-13c.364-.592 1.34-.592 1.704 0l6.592 10.712 5.533-34.035c.077-.473.48-.825.96-.839h.027c.469 0 .876.326.976.786L46.586 61l5.707-5.707a1.01 1.01 0 0 1 .789-.29c.293.025.561.177.731.416l4.315 6.039 3.165-3.165 1.414 1.414-4 4a1 1 0 0 1-1.52-.126l-4.315-6.039-6.165 6.165a.999.999 0 0 1-1.684-.493l-6.914-31.563-5.122 31.51a1 1 0 0 1-1.839.363L24 51.908zm32.077-33.835c-.744-6.327-6.298-10.702-12.613-9.955-3.068.361-5.78 1.855-7.637 4.207s-2.68 5.337-2.319 8.405c.444 3.765 2.558 6.93 5.8 8.686l-.951 1.759C27.386 40.722 24.895 37 24.374 32.58c-.424-3.599.548-7.107 2.735-9.878 2.188-2.771 5.374-4.531 8.973-4.954 7.432-.872 13.958 4.266 14.833 11.708.617 5.246-1.738 10.195-6.146 12.915l-1.051-1.703c3.74-2.306 5.736-6.513 5.211-10.979M65.366 49.43c1.012.798.692 2.292-.147 3.355-.804 1.018-2.151 1.732-3.2.903l-11.732-9.483a18.3 18.3 0 0 0 3.106-3.966zm-36.043-2.132.908-1.782c-4.83-2.463-8.095-7.172-8.734-12.598-1.048-8.903 5.343-17 14.247-18.047 8.903-1.052 16.998 5.343 18.047 14.246.795 6.754-2.719 13.343-8.744 16.396l.904 1.784a18 18 0 0 0 2.79-1.77l12.03 9.724a3.63 3.63 0 0 0 2.276.8c1.322 0 2.695-.701 3.742-2.027 1.669-2.115 1.59-4.765-.194-6.173l-12.267-9.416a18.3 18.3 0 0 0 1.449-9.551c-1.176-10-10.275-17.174-20.267-16-9.999 1.177-17.176 10.269-15.999 20.268.717 6.091 4.385 11.379 9.812 14.146"
      />
    </g>
  </svg>
);
const Memo = memo(LookoutforMetrics);
export default Memo;
