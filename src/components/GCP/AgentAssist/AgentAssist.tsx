import type { SVGProps } from "react";
import { memo } from "react";
const AgentAssist = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      fill="#4285f4"
      d="m12.68 2.246 6.206 3.624c.41.24.66.675.66 1.147v7.957c0 .471-.25.907-.66 1.146L12 20.141l-.02-.011.014.011-2.97 1.75a.337.337 0 0 1-.506-.285l-.007-3.502-3.397-1.984a1.33 1.33 0 0 1-.66-1.146V7.017c0-.472.25-.908.66-1.147l6.206-3.624a1.35 1.35 0 0 1 1.36 0M12 6.175c-2.273 0-4.116 1.757-4.116 3.925v3.053c0 .724.612 1.308 1.372 1.308h1.372v-3.489h-1.83v-.746a3.203 3.203 0 0 1 3.106-3.18C13.72 7 15.202 8.382 15.202 10.1v.872h-1.83v3.489h1.83v.436h-2.745v.872h2.745c.503 0 .914-.392.914-.872V10.1c0-2.168-1.843-3.925-4.116-3.925m-2.287 5.67v1.744h-.457a.45.45 0 0 1-.458-.436v-1.309zm5.489 0v1.744h-.915v-1.745z"
    />
  </svg>
);
const Memo = memo(AgentAssist);
export default Memo;
