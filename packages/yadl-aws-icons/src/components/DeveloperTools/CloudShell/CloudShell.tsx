import type { SVGProps } from "react";
import { memo } from "react";
const CloudShell = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    <defs>
      <linearGradient id="prefix__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#2E27AD" />
        <stop offset="100%" stopColor="#527FFF" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M46 60h15v-2H46zm-11.375-.22 10-8a1 1 0 0 0 0-1.562l-10-8-1.25 1.562L42.399 51l-9.024 7.218zM27 66h39V36H27zm41-31v32a1 1 0 0 1-1 1H26a1 1 0 0 1-1-1V35a1 1 0 0 1 1-1h41a1 1 0 0 1 1 1M23.926 15.182c-2.717 1.153-4.845 4.482-4.845 7.577l.066 1.091c.028.477-.287.908-.75 1.027-1.583.406-4.237 1.658-4.237 5.475 0 2.877 1.556 4.463 2.861 5.287.14.09.633.25 1.092.36H21v2h-3a1 1 0 0 1-.217-.025c-.293-.065-1.291-.303-1.831-.644-1.416-.894-3.792-2.989-3.792-6.978 0-3.435 1.831-6.062 4.945-7.17l-.022-.365c-.002-3.96 2.605-8.008 6.062-9.476 4.045-1.72 8.332-.864 11.462 2.285a11.5 11.5 0 0 1 2.199 3.153 4.84 4.84 0 0 1 4.293-.64c1.984.652 3.242 2.437 3.453 4.843 1.356.355 3.465 1.203 4.803 3.183.805 1.19 1.213 2.618 1.213 4.243h-2c0-1.218-.293-2.269-.87-3.123-1.22-1.806-3.411-2.356-4.296-2.509a1 1 0 0 1-.819-1.129c0-1.827-.769-3.167-2.108-3.607-1.177-.385-2.473.041-3.229 1.065a.999.999 0 0 1-1.748-.261c-.537-1.526-1.314-2.807-2.309-3.808-1.216-1.224-4.552-3.853-9.263-1.854"
      />
    </g>
  </svg>
);
const Memo = memo(CloudShell);
export default Memo;
