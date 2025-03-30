import type { SVGProps } from "react";
import { memo } from "react";
const CostandUsageReport = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    <defs>
      <linearGradient id="prefix__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#1B660F" />
        <stop offset="100%" stopColor="#6CAE3E" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M44 40h7v-2h-7zm15 0h4v-2h-4zm-15-5h12v-2H44zM18 64c-1.513 0-3-1.486-3-3s1.487-3 3-3c1.514 0 3 1.486 3 3s-1.486 3-3 3m0-14c-1.513 0-3-1.486-3-3s1.487-3 3-3c1.514 0 3 1.486 3 3s-1.486 3-3 3m0-14c-1.513 0-3-1.486-3-3s1.487-3 3-3c1.514 0 3 1.486 3 3s-1.486 3-3 3m0-14c-1.458 0-3-1.542-3-3s1.542-3 3-3 3 1.542 3 3-1.542 3-3 3m36 26v-2H31V19a1 1 0 0 0-1-1h-7.123c-.519-2.166-2.644-4-4.877-4-2.57 0-5 2.43-5 5s2.43 5 5 5c2.233 0 4.358-1.834 4.877-4H29v12h-6.119c-.506-2.193-2.602-4-4.881-4-2.617 0-5 2.383-5 5s2.383 5 5 5c2.279 0 4.375-1.807 4.881-4H29v12h-6.119c-.506-2.193-2.602-4-4.881-4-2.617 0-5 2.383-5 5s2.383 5 5 5c2.279 0 4.375-1.807 4.881-4H29v12h-6.119c-.506-2.193-2.602-4-4.881-4-2.617 0-5 2.383-5 5s2.383 5 5 5c2.279 0 4.375-1.807 4.881-4H30a1 1 0 0 0 1-1V48zm2 0h7v-2h-7zm3-13h3.802v-2H59zm-1-8v-5.586L63.586 27zm8.989.938a1 1 0 0 0-.053-.259q-.014-.047-.032-.093a1 1 0 0 0-.197-.293l-9-9a1 1 0 0 0-.292-.195c-.031-.015-.063-.023-.096-.035a1 1 0 0 0-.254-.05C57.042 18.011 57.023 18 57 18H40a1 1 0 0 0-1 1v25h2V20h15v8a1 1 0 0 0 1 1h8v31H41V50h-2v11a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V28c0-.021-.01-.041-.011-.062"
      />
    </g>
  </svg>
);
const Memo = memo(CostandUsageReport);
export default Memo;
