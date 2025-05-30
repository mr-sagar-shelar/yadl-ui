import type { SVGProps } from "react";
import { memo } from "react";
const ResourceExplorer = (props: SVGProps<SVGSVGElement>) => (
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
        d="m47.459 33.027.893 1.79-2.583 1.288-.893-1.79zm-4.994 2.562.832 1.819L40 38.915l.002 2.084-2 .001-.001-1.874-3.439-1.584.835-1.816 3.372 1.552zM38 48h2v-4h-2zm0 7h2v-4h-2zm25.188 10.2c-.712.713-1.809 1.154-2.524.441l-8.734-8.939a15.6 15.6 0 0 0 2.761-2.763l8.95 8.71c.689.689.294 1.805-.453 2.551M40 65.337V59.74c.807.13 1.629.216 2.472.216 2.835 0 5.486-.78 7.774-2.117l1.329 1.36zM16 27.683l14.028 7.646A15.37 15.37 0 0 0 27 44.484c0 6.976 4.643 12.884 11 14.807v6.03L16 53.404zM39.351 14.14l21.515 12.081L50.61 31.35a15.36 15.36 0 0 0-8.138-2.338c-4.371 0-8.316 1.83-11.133 4.754l-14.232-7.757zm3.121 43.816C35.043 57.956 29 51.913 29 44.484s6.043-13.472 13.472-13.472 13.472 6.043 13.472 13.472S49.9 57.956 42.472 57.956m16.475-2.666-3.118-3.034a15.36 15.36 0 0 0 2.115-7.772c0-4.734-2.142-8.973-5.503-11.814L62 27.891v25.78zm6.098 5.935-4.593-4.47 3.017-1.599a1 1 0 0 0 .531-.883v-28a1 1 0 0 0-.511-.872L39.853 12.128a1 1 0 0 0-.96-.011l-24.364 13A1 1 0 0 0 14 26v28a1 1 0 0 0 .523.879l24 13a1 1 0 0 0 .946.004l13.563-7.193 6.21 6.357a3.2 3.2 0 0 0 2.306.96c1.037 0 2.133-.471 3.055-1.393 1.662-1.661 1.857-3.974.442-5.389"
      />
    </g>
  </svg>
);
const Memo = memo(ResourceExplorer);
export default Memo;
