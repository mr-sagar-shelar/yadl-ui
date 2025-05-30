import type { SVGProps } from "react";
import { memo } from "react";
const ElasticDisasterRecovery = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    <defs>
      <linearGradient id="prefix__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#1B660F" />
        <stop offset="100%" stopColor="#6CAE3E" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M58.065 52.928c.1-.008 9.935-.921 9.935-10.81 0-7.667-5.997-9.978-8.817-10.638-.431-3.661-2.357-6.312-5.237-7.154-2.1-.613-4.302-.106-5.972 1.292-.877-1.973-2.024-3.678-3.425-5.082-4.51-4.525-10.685-5.752-16.509-3.285-4.973 2.106-8.722 7.92-8.722 13.524q0 .49.031.976C16.632 32.647 12 35.18 12 42.035q0 .55.041 1.064c.489 6.244 3.731 9.828 8.896 9.832H31.75V50.99H20.938c-5.463-.006-6.67-5.066-6.903-8.048a11 11 0 0 1-.035-.907c0-5.924 4.09-7.908 6.588-8.566l.03-.006c.51-.103.857-.582.795-1.1a13 13 0 0 1-.095-1.588c0-4.77 3.295-9.9 7.501-11.682 7.281-3.085 12.434.97 14.314 2.855 1.53 1.534 2.724 3.495 3.549 5.828a1 1 0 0 0 1.747.26c1.196-1.617 3.139-2.323 4.955-1.79 2.183.638 3.619 2.844 3.856 5.91a1 1 0 0 0 .819 1.135C60.447 33.7 66 35.384 66 42.118c0 8.028-7.769 8.847-8.016 8.872H54.75v1.94zM36.116 46.99h4.357a.998.998 0 0 1 .984 1.178l-1.919 10.555 10.43-13.733H45.75a1 1 0 0 1-.848-1.53l5.293-8.47h-7.533zm1.69 16.666a1 1 0 0 1-.983-1.179l2.452-13.487h-4.844a1 1 0 0 1-.878-1.479l7.637-14a1 1 0 0 1 .878-.521H52a.998.998 0 0 1 .847 1.529l-5.293 8.47h4.43a1 1 0 0 1 .796 1.605L38.602 63.262a1 1 0 0 1-.796.395"
      />
    </g>
  </svg>
);
const Memo = memo(ElasticDisasterRecovery);
export default Memo;
