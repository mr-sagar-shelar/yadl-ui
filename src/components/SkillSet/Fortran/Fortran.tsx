import type { SVGProps } from "react";
import { memo } from "react";
const Fortran = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#734F96" rx={60} />
    <path
      fill="#fff"
      d="m35 206.2 9.8-.6c19.9-1.3 19.7-1.2 20.7-16.8.9-14.8-.234-130.677-.9-133-1.097-3.827-5.216-6.028-17.5-6.025L35 49.7V28h186v83.1l-21.9-.325c-.2-.2-.8-6.075-1.2-11.475-2.3-25.4-8-40.014-19-45.714-5.8-3-14.857-3.884-43.865-3.893L108 49.7V112h4.8c8.1-.1 18.4-2 21.8-4.1 4.4-2.7 8.1-10.5 9.4-19.9.98-6.86 1.736-11.993 1.736-11.993L167 76v99h-22v-3.9c0-6.4-3-21.3-5.1-25.8-3.3-6.9-8.9-9.3-24.8-10.8l-7.3-.7.4 32.1c.3 30.5.5 32.2 2.4 34.8 2.4 3.2 5 3.8 20.9 5l10.673.508L142.1 228H35z"
    />
  </svg>
);
const Memo = memo(Fortran);
export default Memo;
