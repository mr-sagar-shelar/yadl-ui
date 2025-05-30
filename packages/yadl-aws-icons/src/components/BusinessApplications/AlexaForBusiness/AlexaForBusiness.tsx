import type { SVGProps } from "react";
import { memo } from "react";
const AlexaForBusiness = (props: SVGProps<SVGSVGElement>) => (
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
        d="M30.753 41.496h11v-1.992h-11zm0-4.979h21v-1.991h-21zm0-4.978h18v-1.992h-18zM40 14.99c-11.579 0-21 9.38-21 20.91 0 8.407 5.032 15.965 12.819 19.257.587.247.878.755.866 1.511l-.001 9.065 3.904-.959C50.729 61.143 61 48.998 61 35.901c0-11.53-9.421-20.91-21-20.91M31.684 68c-.222 0-.439-.074-.617-.212a1 1 0 0 1-.383-.784V56.837C22.358 53.154 17 44.98 17 35.901 17 23.274 27.317 13 40 13s23 10.274 23 22.9c0 13.992-10.902 26.947-25.923 30.806l-5.154 1.265a1 1 0 0 1-.239.029m8.199-47.399c-8.423.062-15.281 6.948-15.281 15.349 0 5.47 3.185 10.594 8.522 13.707.77.446 2.825 1.896 2.912 1.957 1.508 1.138 2.407 2.9 2.56 4.981l.002 1.807c9.891-3.176 16.944-12.157 16.944-21.811 0-1.48-.2-2.946-.596-4.361-.033-.14-.062-.231-.092-.326-1.739-6.23-7.162-10.71-13.523-11.24l-.149-.007a42 42 0 0 0-1.299-.056m-2.284 40.125a.994.994 0 0 1-1-.996v-3.062c-.108-1.43-.728-2.68-1.745-3.448-.547-.385-2.161-1.509-2.739-1.843-5.958-3.476-9.513-9.243-9.513-15.427 0-9.491 7.749-17.27 17.273-17.34.256 0 1.021.039 1.409.058l.179.008c7.226.603 13.356 5.666 15.289 12.602.056.174.099.314.133.462a18 18 0 0 1 .657 4.85c0 10.947-8.279 21.084-19.687 24.104q-.127.032-.256.032"
      />
    </g>
  </svg>
);
const Memo = memo(AlexaForBusiness);
export default Memo;
