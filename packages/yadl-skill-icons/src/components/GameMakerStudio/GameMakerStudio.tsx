import type { SVGProps } from "react";
import { memo } from "react";
const GameMakerStudio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#8CD248" rx={60} />
    <path
      fill="#000"
      d="M128.497 127.954v45.03l-45.682-45.03 45.682-45.033 45.683 45.033zm0-106.954L20 127.954l108.497 106.951 45.687-45.036v-61.915h62.809z"
    />
  </svg>
);
const Memo = memo(GameMakerStudio);
export default Memo;
