import type { SVGProps } from "react";
import { memo } from "react";
const MediaTranslationApi = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      d="M18.56 3a.37.37 0 0 1 .38.36v4.15a.38.38 0 0 1-.75 0V3.39a.37.37 0 0 1 .37-.39m3.15 1.41V6a.37.37 0 0 1-.38.36A.36.36 0 0 1 21 6V4.44a.36.36 0 0 1 .37-.36.37.37 0 0 1 .34.36Zm-2.14-1.74V8a.38.38 0 0 0 .75 0V2.67a.38.38 0 0 0-.75 0m-2.75 1.52v2.22a.38.38 0 0 0 .75 0V4.19a.38.38 0 0 0-.75 0"
      style={{
        fill: "#aecbfa",
      }}
    />
    <path
      d="M2.25 20.83V5.3a1.88 1.88 0 0 1 1.87-1.88H15.9v1.5H4.12a.38.38 0 0 0-.37.38v11.91l1.06-1.06h14a.38.38 0 0 0 .37-.38V9.36h1.5v6.41a1.88 1.88 0 0 1-1.87 1.88H5.43Z"
      style={{
        fill: "#669df6",
      }}
    />
    <path
      d="M13.76 6.67v1.21h-1.51a9.1 9.1 0 0 1-1.84 3.24l1.27 1.25-.46 1.23L9.6 12l-2.55 2.53-.85-.86 2.59-2.55A9 9 0 0 1 7.35 8.9l-.09-.19h1.22a7.3 7.3 0 0 0 1.09 1.6 7.8 7.8 0 0 0 1.48-2.49H5.43V6.67H9v-1h1.2v1Zm-1.32 8.75h1.28l.52-1.48h2.36l.52 1.48h1.29l-2.32-6.18h-1.34Zm2.17-2.55.55-1.55.23-.74h.07l.22.74.55 1.55Z"
      style={{
        fill: "#4285f4",
      }}
    />
  </svg>
);
const Memo = memo(MediaTranslationApi);
export default Memo;
