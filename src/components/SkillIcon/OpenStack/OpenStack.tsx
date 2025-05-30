import type { SVGProps } from "react";
import { memo } from "react";
const OpenStack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path
      fill="#ED1844"
      fillRule="evenodd"
      d="M200.682 40H54.67C45.5 40 38 47.501 38 56.67v39.204h40.44v-6.421c0-4.986 4.043-9.014 9.013-9.014h80.415c4.985 0 9.014 4.044 9.014 9.014v6.42h40.439V56.67c0-9.168-7.501-16.669-16.67-16.669zM177.53 166.102c0 4.985-4.044 9.014-9.014 9.014H88.101c-4.985 0-9.014-4.044-9.014-9.014v-6.421H38.648v39.204c0 9.169 7.502 16.67 16.67 16.67H201.33c9.168 0 16.669-7.501 16.669-16.67v-39.204h-40.439zM38.617 107.604v40.439h40.13v-40.439zM177.53 107.604v40.439h40.131v-40.439z"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(OpenStack);
export default Memo;
