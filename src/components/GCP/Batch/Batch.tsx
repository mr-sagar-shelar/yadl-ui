import type { SVGProps } from "react";
import { memo } from "react";
const Batch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      fill="#4285F4"
      d="m15.623 5 6.016 6.56-6.016 6.559-2.011-2.193-2.025 2.208-1.793-1.955-1.778 1.94L2 11.559 8.016 5l1.792 1.954-.629.686-1.163-1.268-4.757 5.187 4.757 5.187 1.149-1.253-3.594-3.918 6.016-6.56 2.011 2.192zm-4.036 1.388L6.83 11.575l4.757 5.187 1.395-1.522-3.375-3.68 3.361-3.667z"
    />
  </svg>
);
const Memo = memo(Batch);
export default Memo;
