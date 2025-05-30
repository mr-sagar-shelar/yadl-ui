import type { SVGProps } from "react";
import { memo } from "react";
const GTK = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path
      fill="#E40000"
      stroke="#fff"
      strokeWidth={4.919}
      d="M30.875 169.163 26 52.061l77.923 56.207v126.477z"
    />
    <path
      fill="#7FE719"
      stroke="#fff"
      strokeWidth={4.919}
      d="m103.946 234.767 116.896-46.831 9.75-117.101-126.646 37.479V234.79z"
    />
    <path
      fill="#729FCF"
      stroke="#fff"
      strokeWidth={4.919}
      d="m26 52.062 77.923 56.206L230.568 70.79 143.606 21z"
    />
    <path
      stroke="#fff"
      strokeWidth={2.901}
      d="M143.227 135.325V21.546m0 113.779L31.301 167.183zm0 0 78.089 52.338z"
    />
  </svg>
);
const Memo = memo(GTK);
export default Memo;
