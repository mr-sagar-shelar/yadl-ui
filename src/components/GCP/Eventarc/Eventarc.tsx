import type { SVGProps } from "react";
import { memo } from "react";
const Eventarc = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      d="M17.98 7.06 7.26 17.75l-.91-.91 10.71-10.7z"
      style={{
        fill: "#4285f4",
      }}
    />
    <circle
      cx={12}
      cy={12.06}
      r={2.82}
      style={{
        fill: "#669df6",
      }}
      transform="rotate(-43.97 11.998 12.06)"
    />
    <path
      d="M21.75 12a9.7 9.7 0 0 1-1.91 5.79 1.54 1.54 0 0 0-1-.78 8.43 8.43 0 0 0 1.28-7.48 4.1 4.1 0 0 0 1.15-.67 9.6 9.6 0 0 1 .48 3.14m-4 7.84a9.73 9.73 0 0 1-8.93 1.39 4.1 4.1 0 0 0 .67-1.15A8.43 8.43 0 0 0 17 18.8a1.54 1.54 0 0 0 .79 1.04ZM15.14 2.77a4.1 4.1 0 0 0-.67 1.15h-.05A8.46 8.46 0 0 0 7 5.2a1.57 1.57 0 0 0-.78-1 9.73 9.73 0 0 1 8.93-1.39ZM5.2 7a8.43 8.43 0 0 0-1.28 7.48 4.1 4.1 0 0 0-1.15.67 9.73 9.73 0 0 1 1.39-8.94A1.54 1.54 0 0 0 5.2 7"
      style={{
        fill: "#4285f4",
      }}
    />
    <path
      d="M19.52 5.51a1 1 0 1 0-1 1 1 1 0 0 0 1-1m1.36 0a2.38 2.38 0 1 1-2.38-2.38 2.38 2.38 0 0 1 2.38 2.38M19.52 18.55a1 1 0 1 0-1 1 1 1 0 0 0 1-1m1.36 0a2.38 2.38 0 1 1-2.38-2.39 2.39 2.39 0 0 1 2.38 2.39M6.46 18.55a1 1 0 1 0-1 1 1 1 0 0 0 1-1m1.36 0a2.38 2.38 0 1 1-2.37-2.39 2.38 2.38 0 0 1 2.37 2.39M6.46 5.51a1 1 0 1 0-1 1 1 1 0 0 0 1-1m1.36 0a2.38 2.38 0 1 1-2.37-2.38 2.37 2.37 0 0 1 2.37 2.38"
      style={{
        fill: "#aecbfa",
        fillRule: "evenodd",
      }}
    />
  </svg>
);
const Memo = memo(Eventarc);
export default Memo;
