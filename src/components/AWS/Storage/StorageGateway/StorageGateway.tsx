import type { SVGProps } from "react";
import { memo } from "react";
const StorageGateway = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
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
        d="M55.023 36.489c-3.821-2.823-9.375-4.497-14.973-4.497-6.24 0-11.405 1.542-14.973 4.466V66h3.993V38.993c0-.355.187-.683.493-.863 2.816-1.653 5.736-3.137 10.487-3.137 4.416 0 7.634 1.663 10.22 2.998l.22.113a1 1 0 0 1 .54.89V66h3.993zm1.613-1.284c.242.19.384.48.384.788V67c0 .552-.447 1-.999 1h-5.989a1 1 0 0 1-.998-1V39.604c-2.44-1.259-5.22-2.611-8.984-2.611-3.993 0-6.488 1.141-8.984 2.577V67c0 .552-.446 1-.998 1h-5.99a1 1 0 0 1-.998-1V35.993c0-.29.126-.566.345-.755 3.945-3.433 9.694-5.247 16.625-5.247 6.219 0 12.42 1.95 16.586 5.214M68 37.179c0 5.681-3.07 9.166-8.648 9.81l-.228-1.988c4.63-.534 6.88-3.094 6.88-7.822 0-4.545-2.68-7.397-7.965-8.474a1 1 0 0 1-.798-.918c-.257-4.165-2.72-6.03-5.045-6.03-1.472 0-2.849.695-3.776 1.906a1 1 0 0 1-1.73-.266c-.806-2.209-2.028-4.143-3.534-5.592-1.884-1.82-7.052-5.725-14.346-2.753-4.2 1.716-7.49 6.639-7.49 11.206 0 .512.031 1.006.094 1.508q.006.054.008.11v.017c0 .504-.371.925-.855.995-2.499.641-6.57 2.553-6.57 8.202 0 .217.01.423.021.63.21 3.746 3.109 6.675 7.212 7.286l-.292 1.978c-5.067-.754-8.65-4.433-8.913-9.155A13 13 0 0 1 12 37.09c0-6.612 4.63-9.063 7.353-9.932a14 14 0 0 1-.03-.9c0-5.41 3.755-11.024 8.733-13.058 5.818-2.369 11.978-1.187 16.484 3.162 1.383 1.332 2.553 3.009 3.432 4.908a6.65 6.65 0 0 1 4.224-1.513c3.105 0 6.375 2.219 6.969 7.15C64.87 28.303 68 31.928 68 37.18"
      />
    </g>
  </svg>
);
const Memo = memo(StorageGateway);
export default Memo;
