import type { SVGProps } from "react";
import { memo } from "react";
const Webpack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path
      fill="#8ED6FB"
      d="m208.082 179.205-76.652 43.358v-33.77l47.758-26.271zm5.243-4.748V83.78l-28.05 16.188v58.282zM48.05 179.205l76.652 43.358v-33.77l-47.759-26.271zm-5.243-4.748V83.78l28.05 16.188v58.282zm3.281-96.544 78.614-44.476v32.651L74.34 93.79l-.385.22zm163.955 0L131.43 33.437v32.651l50.362 27.702.385.22z"
    />
    <path
      fill="#1C78C0"
      d="m124.702 181.111-47.117-25.905v-51.333l47.117 27.207zm6.728 0 47.117-25.905v-51.333L131.43 131.08zM80.775 97.933l47.3-26.015 47.3 26.015-47.3 27.317z"
    />
  </svg>
);
const Memo = memo(Webpack);
export default Memo;
