import type { SVGProps } from "react";
import { memo } from "react";
const ConsoleMobileApplication = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    <defs>
      <linearGradient id="prefix__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#B0084D" />
        <stop offset="100%" stopColor="#FF4F8B" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M14 45.823h24.442v-2H14zm8.452-5.903h17.791v-2H22.452zm22.73.986a1 1 0 0 0 .746-1.088 4 4 0 0 1-.03-.478c0-1.401.998-2.964 2.225-3.483a4 4 0 0 1 1.565-.336c1.352 0 2.307.775 2.724 1.194.466.466.832 1.07 1.088 1.794a1 1 0 0 0 1.747.261c.257-.349.65-.501 1.025-.388.482.14.807.675.877 1.439-.027.501.325.953.83 1.04.834.143 2.235.652 2.235 2.444 0 2.111-1.864 2.397-2.15 2.43l-12.248-.013c-1.324-.001-2.409-1.001-2.471-2.283l-.004-.163c0-1.571 1.001-2.156 1.841-2.37m.632 6.816 12.331.009c1.407-.114 4.069-1.186 4.069-4.426 0-2.402-1.523-3.721-3.158-4.236-.326-1.525-1.319-2.343-2.222-2.607a2.87 2.87 0 0 0-2.012.148 6.2 6.2 0 0 0-.994-1.307c-1.768-1.776-4.193-2.258-6.484-1.288-1.934.819-3.399 3.049-3.445 5.221-1.617.704-2.558 2.165-2.558 4.04q0 .14.007.266c.113 2.342 2.075 4.178 4.466 4.18m.695-30.257h2.079v-2h-2.079zm3.466 0h6.93v-2h-6.93zm12.304 48.59H41.134c-1.452 0-2.634-1.161-2.634-2.588v-1.649h26.413v1.649c0 1.427-1.182 2.588-2.634 2.588M38.5 18.93v-1.277c0-2.014 1.665-3.653 3.712-3.653h18.989c2.047 0 3.712 1.639 3.712 3.653v1.277zm28.413-1.281c0-2.92-2.252-5.33-5.129-5.619a6 6 0 0 0-.583-.03H42.212c-3.15 0-5.712 2.536-5.712 5.653v17.11h2V20.93h26.413v38.888H38.5V49.727h-2v13.74c0 2.53 2.079 4.588 4.634 4.588h21.145c2.555 0 4.634-2.058 4.634-4.588V17.649"
      />
    </g>
  </svg>
);
const Memo = memo(ConsoleMobileApplication);
export default Memo;
