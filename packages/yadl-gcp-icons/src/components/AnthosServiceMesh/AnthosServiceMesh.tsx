import type { SVGProps } from "react";
import { memo } from "react";
const AnthosServiceMesh = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      fill="#4285F4"
      fillRule="nonzero"
      d="m13.824 16.263.957.955a1.403 1.403 0 1 1-1.118 1.12l-.957-.957zM15.041 4a1.403 1.403 0 1 1-.26 2.782L9.562 12l2.396 2.396 1.65-1.649 1.118 1.119-4.402 4.403q.038.158.038.328a1.403 1.403 0 1 1-1.214-1.39l1.692-1.692-5.176-5.178A1.403 1.403 0 1 1 6.782 9.22l1.662 1.662 2.396-2.396-1.692-1.692a1.403 1.403 0 1 1 1.176-1.062l1.634 1.635 1.704-1.703A1.403 1.403 0 0 1 15.041 4m3.556 3.556a1.403 1.403 0 1 1-.328 2.767L16.592 12l1.677 1.677q.158-.038.328-.039a1.403 1.403 0 1 1-1.39 1.215l-4.501-4.502 1.118-1.119 1.65 1.65 1.733-1.735a1.403 1.403 0 0 1 1.39-1.591m-12.02 5.19 1.12 1.12-.915.915q.024.126.024.26a1.403 1.403 0 1 1-1.143-1.379z"
    />
  </svg>
);
const Memo = memo(AnthosServiceMesh);
export default Memo;
