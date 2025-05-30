import type { SVGProps } from "react";
import { memo } from "react";
const DataprocMetastore = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      fill="#4285f4"
      d="m12.232 12.11 7.134 4.25-7.134 4.25-7.134-4.25zm6.549-2.173L22.25 12.1l-.018.01.018.009-3.47 2.163-1.084-.57 2.571-1.604-2.57-1.602zm-13.25 0 1.085.569-2.572 1.603 2.572 1.604-1.084.569-3.47-2.163.019-.01-.019-.01zm6.701-6.328 7.134 4.25-7.134 4.25-7.134-4.25z"
    />
  </svg>
);
const Memo = memo(DataprocMetastore);
export default Memo;
