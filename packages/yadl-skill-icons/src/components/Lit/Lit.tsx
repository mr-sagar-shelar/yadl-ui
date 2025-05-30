import type { SVGProps } from "react";
import { memo } from "react";
const Lit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F4ED" rx={60} />
    <path fill="#00E8FF" d="m88 148 20-60 90 90-30 50-40-40h-20" />
    <path
      fill="#283198"
      d="M128 188v-80l40-40v80M48 188l40 40 20-40-20-40H68"
    />
    <path
      fill="#324FFF"
      d="M88 148V68l40-40v80m40 120v-80l40-40v80m-160 0v-80l40 40"
    />
    <path fill="#0FF" d="M88 228v-80l40 40" />
  </svg>
);
const Memo = memo(Lit);
export default Memo;
