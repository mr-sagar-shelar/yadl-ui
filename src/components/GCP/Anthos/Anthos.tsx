import type { SVGProps } from "react";
import { memo } from "react";
const Anthos = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="m6 15.8 6-10.5 6 10.5 5 5 .2.2L12 1.6.8 21l.2-.2z"
      style={{
        fill: "#febc00",
      }}
    />
    <path
      d="M12 9.7 1 20.8l4.6-2.1 6.4-6.4 6.4 6.4 4.6 2.1z"
      style={{
        fill: "#ee3c2b",
      }}
    />
    <path
      d="m6 20.6-4.2 1.8h20.4L18 20.6z"
      style={{
        fill: "#2baa4f",
      }}
    />
    <path
      d="m23 20.8-11-5-11 5-1 1.6h1.8L12 17.8l10.2 4.6H24z"
      style={{
        fill: "#3982f8",
      }}
    />
  </svg>
);
const Memo = memo(Anthos);
export default Memo;
