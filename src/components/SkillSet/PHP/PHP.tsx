import type { SVGProps } from "react";
import { memo } from "react";
const PHP = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path
      fill="#000"
      d="M49.158 100.246h28.408q12.507.106 18.126 7.208 5.618 7.101 3.71 19.398-.742 5.618-3.286 11.024-2.438 5.406-6.784 9.752-5.3 5.511-11.342 6.996-6.043 1.484-12.508 1.484h-12.72l-4.028 20.14H34zM61.56 112.33l-6.36 31.8q.636.106 1.272.106h1.484q10.177.106 16.96-2.014 6.784-2.226 9.116-15.476 1.908-11.13-3.816-12.826-5.618-1.695-14.098-1.59-1.271.106-2.438.106h-2.226zM116.186 80h14.628l-4.134 20.246h13.144q10.811.213 16.112 4.452 5.406 4.24 3.18 16.112l-7.102 35.298h-14.84l6.784-33.708q1.059-5.3-.636-7.526t-7.314-2.226l-11.766-.106-8.692 43.566h-14.628zM174.824 100.246h28.408q12.507.106 18.126 7.208 5.618 7.101 3.71 19.398-.742 5.618-3.286 11.024-2.438 5.406-6.784 9.752-5.3 5.511-11.342 6.996-6.043 1.484-12.508 1.484h-12.72l-4.028 20.14h-14.734zm12.402 12.084-6.36 31.8q.636.106 1.272.106h1.484q10.177.106 16.96-2.014 6.784-2.226 9.116-15.476 1.908-11.13-3.816-12.826-5.618-1.695-14.098-1.59-1.272.106-2.438.106h-2.226z"
    />
  </svg>
);
const Memo = memo(PHP);
export default Memo;
