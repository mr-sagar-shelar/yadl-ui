import type { SVGProps } from "react";
import { memo } from "react";
const Hibernate = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F4ED" rx={60} />
    <path
      fill="#59666C"
      d="m75.616 38 34.622 59.962-34.639 60.047L41 97.962z"
    />
    <path fill="#BCAE79" d="M144.871 38.003H75.636l34.622 59.962h69.254z" />
    <path
      fill="#59666C"
      d="m179.476 218-34.622-59.962 34.639-60.047 34.599 60.047z"
    />
    <path fill="#BCAE79" d="M110.221 217.995h69.244l-34.594-59.962H75.58z" />
  </svg>
);
const Memo = memo(Hibernate);
export default Memo;
