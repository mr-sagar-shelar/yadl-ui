import type { SVGProps } from "react";
import { memo } from "react";
const Chatbot = (props: SVGProps<SVGSVGElement>) => (
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
        d="M38 23h4v-2h-4zm-7 0h4v-2h-4zm-6.999 0h4v-2h-4zm41.706 28.356c-.303.706-.94 1.239-1.71 1.488v-5.651a3 3 0 0 1 1.51 1.161c.573.871.647 1.965.2 3.002m-50.414 0c-.447-1.037-.374-2.131.2-3.002a3 3 0 0 1 1.51-1.161v5.652c-.77-.249-1.407-.783-1.71-1.489m51.884-4.102a4.98 4.98 0 0 0-3.18-2.145v-1.776c0-3.492-2.69-6.333-6-6.333H39v2h18.997c2.207 0 4 1.944 4 4.333v13.334c0 2.389-1.793 4.333-4 4.333H23.002c-2.206 0-4-1.944-4-4.333V43.333c0-2.389 1.794-4.333 4-4.333H28v-2h-5c-3.307 0-5.999 2.841-5.999 6.333v1.776a4.98 4.98 0 0 0-3.18 2.145c-.95 1.443-1.083 3.227-.366 4.893.625 1.451 1.961 2.467 3.546 2.763v1.757c0 3.492 2.692 6.333 6 6.333H35v6h2v-6h6v6h1.999v-6h12.998c3.31 0 6-2.841 6-6.333V54.91c1.587-.296 2.923-1.312 3.547-2.763.717-1.666.583-3.45-.367-4.893M32 50c0 1.654-1.344 3-3 3-1.653 0-2.999-1.346-2.999-3s1.346-3 3-3c1.655 0 3 1.346 3 3m-7.999 0c0 2.757 2.244 5 5 5 2.757 0 5-2.243 5-5s-2.243-5-5-5c-2.756 0-5 2.243-5 5M49 50c0-1.654 1.345-3 3-3 1.654 0 2.999 1.346 2.999 3s-1.345 3-3 3c-1.654 0-3-1.346-3-3m7.999 0c0-2.757-2.243-5-5-5-2.756 0-5 2.243-5 5s2.244 5 5 5c2.757 0 5-2.243 5-5M20.002 14.852c0-.47.382-.852.852-.852h25.145v16.117a.884.884 0 0 1-.882.883H35a1 1 0 0 0-1 1v5.188l-4.42-5.794a1 1 0 0 0-.794-.394h-7.932a.853.853 0 0 1-.852-.852zM20.854 33h7.437l5.915 7.753A.998.998 0 0 0 36 40.147V33h9.117a2.885 2.885 0 0 0 2.882-2.883V13.524c0-.84-.683-1.524-1.524-1.524H20.854a2.855 2.855 0 0 0-2.852 2.852v15.296A2.855 2.855 0 0 0 20.854 33"
      />
    </g>
  </svg>
);
const Memo = memo(Chatbot);
export default Memo;
