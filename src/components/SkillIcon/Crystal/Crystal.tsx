import type { SVGProps } from "react";
import { memo } from "react";
const Crystal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F4ED" rx={60} />
    <path
      fill="#000"
      d="m226.479 154.975-71.219 71.077c-.285.285-.712.427-.997.285l-97.286-26.066c-.427-.143-.712-.428-.712-.713l-26.21-97.143c-.142-.427 0-.712.286-.997l71.219-71.077c.285-.285.712-.428.997-.285l97.286 26.066c.428.143.712.428.712.712l26.067 97.144c.285.427.142.712-.143.997m-95.434-77.344-95.576 25.496c-.143 0-.285.285-.143.427l69.938 69.796c.142.142.427.142.427-.143l25.639-95.434c.142 0-.142-.285-.285-.142"
    />
  </svg>
);
const Memo = memo(Crystal);
export default Memo;
