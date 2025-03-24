import type { SVGProps } from "react";
import { memo } from "react";
const Dart = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#00C4B3"
      d="M87.45 87.005 75.81 75.361l.045 84.102.14 3.927c.057 1.856.409 3.937.971 6.103l92.18 32.512 23.062-10.209.02-.034L87.444 87.005z"
    />
    <path
      fill="#22D3C5"
      d="M76.97 169.493h.008a1 1 0 0 0-.039-.113c.02.043.02.085.028.113zm115.217 22.303-23.063 10.209-92.165-32.512c1.758 6.761 5.659 14.36 9.85 18.506l30.065 29.917 66.904.084 8.381-26.204z"
    />
    <path
      fill="#0075C9"
      d="m76.126 75.364-35.84 54.127c-2.975 3.178-1.49 9.736 3.3 14.568l20.688 20.858 13.005 4.584c-.562-2.16-.916-4.219-.97-6.103l-.14-3.926-.043-84.102z"
    />
    <path
      fill="#0075C9"
      d="M169.906 76.447c-2.165-.549-4.241-.895-6.111-.948l-4.157-.152-83.827.02 116.415 116.398 10.226-23.063-32.54-92.25z"
    />
    <path
      fill="#00A8E1"
      d="M169.799 76.427a1 1 0 0 0 .107.028v-.011c-.036-.008-.07-.008-.107-.023zm18.605 9.894c-4.233-4.26-11.728-8.156-18.498-9.866l32.541 92.242-10.238 23.062 24.981-7.982.056-68.49-28.845-28.968z"
    />
    <path
      fill="#00C4B3"
      d="m165.344 63.523-20.812-20.7c-4.855-4.772-11.413-6.263-14.563-3.293L75.845 75.361l83.827-.02 4.156.152c1.871.057 3.949.4 6.112.948l-4.59-12.923z"
    />
  </svg>
);
const Memo = memo(Dart);
export default Memo;
