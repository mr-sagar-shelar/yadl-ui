import type { SVGProps } from "react";
import { memo } from "react";
const LocalSsd = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      fill="#4285F4"
      fillRule="nonzero"
      d="m15.747 10.032 2.808 1.633a.304.304 0 0 1 .002.524l-4.11 2.434 4.399 2.485a.3.3 0 0 1 .154.265v2.316a.304.304 0 0 1-.456.262l-6.607-3.841-6.479 3.84A.304.304 0 0 1 5 19.689v-2.314c0-.108.057-.208.15-.262l8.907-5.188-.828-.469zM5.304 4.007q.081 0 .152.042l6.606 3.84 6.48-3.839a.304.304 0 0 1 .458.261v2.314a.3.3 0 0 1-.15.262l-8.907 5.188.828.469-2.518 1.424-2.808-1.633a.304.304 0 0 1-.002-.524l4.108-2.434-4.397-2.485A.3.3 0 0 1 5 6.627V4.311c0-.168.136-.304.304-.304"
    />
  </svg>
);
const Memo = memo(LocalSsd);
export default Memo;
