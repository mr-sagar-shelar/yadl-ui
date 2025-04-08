import type { SVGProps } from "react";
import { memo } from "react";
const LocationService = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    <defs>
      <linearGradient id="prefix__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#BD0816" />
        <stop offset="100%" stopColor="#FF5252" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M43.086 21.594a1 1 0 0 0-.07.579L43.86 27h-7.68l.805-4.835a1 1 0 0 0-.072-.571L33.54 14h12.922zm5.753-9.139A1 1 0 0 0 48 12H32a1 1 0 0 0-.914 1.406l3.878 8.726-.95 5.704A1 1 0 0 0 35 29h4v10h2V29h4.052a1 1 0 0 0 .765-.357 1 1 0 0 0 .22-.816l-.999-5.699 3.876-8.722a1 1 0 0 0-.075-.951M56.85 48.78l-2.44 1.17L40 56.89l-14.41-6.94-2.44-1.17-7.69-3.7 7.64-3.11 16.47 7.93c.13.07.28.1.43.1s.3-.03.43-.1l16.47-7.93 7.64 3.11zm7.69 5.3L40 65.89 15.46 54.08l7.64-3.11 16.47 7.93c.13.07.28.1.43.1s.3-.03.43-.1l16.47-7.93zM68 44.97c-.01-.4-.26-.75-.62-.9l-8.04-3.28 8.09-3.89c.36-.17.58-.54.57-.93-.01-.4-.26-.75-.62-.9l-19.43-7.91.06.32c.1.61.01 1.22-.24 1.76l16.77 6.84-7.69 3.7-2.44 1.17L40 47.89l-14.41-6.94-2.44-1.17-7.69-3.7 16.82-6.85c-.24-.54-.34-1.13-.24-1.72l.06-.37-19.48 7.93a1.003 1.003 0 0 0-.05 1.83l8.09 3.89-8.04 3.28a1.003 1.003 0 0 0-.05 1.83l8.09 3.89-8.04 3.28a1.003 1.003 0 0 0-.05 1.83l27 13c.13.07.28.1.43.1s.3-.03.43-.1l27-13c.36-.17.58-.54.57-.93-.01-.4-.26-.75-.62-.9l-8.04-3.28 8.09-3.89c.36-.17.58-.54.57-.93"
      />
    </g>
  </svg>
);
const Memo = memo(LocationService);
export default Memo;
