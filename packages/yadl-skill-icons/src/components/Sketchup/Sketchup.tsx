import type { SVGProps } from "react";
import { memo } from "react";
const Sketchup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path
      fill="#E7242D"
      d="M160.016 19 28 36.204v.997L47.07 151.19l27.102 85.035 139.267-39.657L228 72.348zm-3.539 13.192 54.872 43.125-48.76 8.768-29.761-30.972-82.865 12.069-7.558-18.095zm-22.523 54.31 28.242 35.23-45.781 9.745-10.941-18.833-42.163 8.212-7.642-20.517zm-25.343 63.481 10.384 20.435-42.315 10.537-7.488-21.966z"
    />
  </svg>
);
const Memo = memo(Sketchup);
export default Memo;
