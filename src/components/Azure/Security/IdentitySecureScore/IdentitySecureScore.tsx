import type { SVGProps } from "react";
import { memo } from "react";
const IdentitySecureScore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="#ff8c00"
      d="M15.149 2.271H2.851A1.608 1.608 0 0 0 1.514 4.75a22 22 0 0 1 1.4 3.123A2.02 2.02 0 0 0 4.766 9h8.467a2.02 2.02 0 0 0 1.849-1.127 22 22 0 0 1 1.4-3.123 1.608 1.608 0 0 0-1.333-2.479m.434 1.919a22.6 22.6 0 0 0-1.5 3.322.7.7 0 0 1-.671.426H4.589a.7.7 0 0 1-.674-.432 22.6 22.6 0 0 0-1.5-3.316.58.58 0 0 1-.018-.6.49.49 0 0 1 .452-.261h12.3a.49.49 0 0 1 .452.261.58.58 0 0 1-.018.6"
    />
    <path
      fill="#dd5900"
      d="M15.149 2.271H9.708v1.062h5.441a.49.49 0 0 1 .451.261.58.58 0 0 1-.017.6 22.6 22.6 0 0 0-1.5 3.322.7.7 0 0 1-.672.426h-3.7V9h3.525a2.02 2.02 0 0 0 1.849-1.127 22 22 0 0 1 1.4-3.123 1.608 1.608 0 0 0-1.336-2.479"
      opacity={0.6}
    />
    <path fill="#fcd116" d="M7.583 10.417h2.834v3.9H7.583Z" />
    <path fill="#dd5900" d="M9 10.417h1.417v3.9H9Z" opacity={0.4} />
    <path
      fill="#ff8c00"
      d="m13.579 17.058-.656-2.29c-.21-.489-.39-.81-.956-.81H6.033c-.566 0-.746.321-.956.81l-.656 2.29a.325.325 0 0 0 .321.442h8.516a.325.325 0 0 0 .321-.442"
    />
    <path
      fill="#dd5900"
      d="m13.579 17.058-.656-2.29c-.21-.489-.39-.81-.956-.81H9V17.5h4.258a.325.325 0 0 0 .321-.442"
      opacity={0.6}
    />
    <path
      fill="#dd5900"
      d="M7.583 11.442a2.77 2.77 0 0 0 2.834 0v-1.025H7.583Z"
      opacity={0.4}
    />
    <path
      fill="#fcd116"
      d="M13.411.5H4.562c-.61 0-.577.7-.433.866S5.31 2.829 5.31 7.485a3.677 3.677 0 0 0 7.353 0c0-4.656 1-5.938 1.182-6.119A.53.53 0 0 0 13.411.5"
    />
    <path
      fill="#dd5900"
      d="M9 11.124a3.693 3.693 0 0 0 3.663-3.639c0-4.656 1-5.938 1.182-6.119A.53.53 0 0 0 13.411.5H9Z"
      opacity={0.3}
    />
  </svg>
);
const Memo = memo(IdentitySecureScore);
export default Memo;
