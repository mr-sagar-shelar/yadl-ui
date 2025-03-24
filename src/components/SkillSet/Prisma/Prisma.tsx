import type { SVGProps } from "react";
import { memo } from "react";
const Prisma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#677EEB" rx={60} />
    <path
      fill="#F7FAFC"
      fillRule="evenodd"
      d="M52.658 165.183a9.39 9.39 0 0 1-.075-9.929L123.045 40.32c3.919-6.393 13.382-5.834 16.521.975l64.369 139.631c2.388 5.181-.361 11.277-5.826 12.917l-100.13 30.039a9.384 9.384 0 0 1-10.622-3.964zm78.515-91.257c.679-3.382 5.312-3.87 6.68-.703l44.401 102.74a3.518 3.518 0 0 1-2.224 4.768l-69.182 20.652c-2.543.759-4.979-1.463-4.456-4.065z"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(Prisma);
export default Memo;
