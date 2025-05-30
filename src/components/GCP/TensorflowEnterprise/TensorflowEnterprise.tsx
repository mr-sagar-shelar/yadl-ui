import type { SVGProps } from "react";
import { memo } from "react";
const TensorflowEnterprise = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      fill="#4285F4"
      fillRule="evenodd"
      d="m12.3 4 6.69 3.903.01 3.541-4.027-2.376v1.788l2.008 1.172.01 3.078-2.018-1.192v4.501L12.301 20zm-.6 0v16l-2.673-1.585V9.068L5 11.444l.01-3.54z"
    />
  </svg>
);
const Memo = memo(TensorflowEnterprise);
export default Memo;
