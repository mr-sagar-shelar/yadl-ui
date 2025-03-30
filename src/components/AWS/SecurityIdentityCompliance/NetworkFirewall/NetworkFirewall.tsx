import type { SVGProps } from "react";
import { memo } from "react";
const NetworkFirewall = (props: SVGProps<SVGSVGElement>) => (
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
        d="M66 58.005H54v-6h12zm-10 8H44v-6h12zM34.591 63.99a12.08 12.08 0 0 1-10.237-5.625c-1.789-2.81-1.82-6.437-.079-9.471l.055-.098c2.092-3.175 1.342-7.586.674-10.02 1.919.987 3.657 3.498 4.274 4.605a.999.999 0 0 0 1.814-.143c1.917-5.266.631-9.154-.778-11.483a21 21 0 0 1 4.302 2.04c4.615 2.91 6.955 7.163 6.955 12.638a1 1 0 0 0 1.043.999c1.194-.052 3.349-.97 4.346-3.872q.039.204.04.444v6h-9a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4v1.55c-1.729 1.547-4.395 2.436-7.409 2.436M18.168 46.248C16.267 44.96 14 42.522 14 38.22c0-5.956 4.144-7.91 6.613-8.543a1 1 0 0 0 .749-1.027l-.097-1.64c0-4.744 3.268-9.85 7.441-11.623 7.219-3.064 12.335.965 14.198 2.84 1.519 1.528 2.703 3.48 3.521 5.8a1 1 0 0 0 1.748.26c1.236-1.677 3.368-2.376 5.297-1.743 2.17.713 3.421 2.83 3.44 5.813l-.006.037a1 1 0 0 0 .821 1.127c1.881.324 8.02 1.915 8.02 8.782 0 2.2-.587 4.028-1.745 5.458v-.757a1 1 0 0 0-1-1H48.494c-.618-1.12-1.592-1.597-1.651-1.625a.999.999 0 0 0-1.408.806c-.247 2.348-1.169 3.4-1.911 3.87-.475-6.905-4.496-10.858-7.902-12.99-3.87-2.42-7.697-3.026-7.858-3.051a1 1 0 0 0-1.065.585c-.182.413-.064.898.286 1.182.187.152 4.154 3.467 2.809 9.768-1.337-1.776-3.638-4.18-6.299-4.18a1 1 0 0 0-.928 1.373c.024.06 2.218 5.657.433 9.34v-.078h-2.365a4.4 4.4 0 0 1-2.467-.757M53 50.005h-4v-6h13v6zm-1 8H39v-6h13zm15-8h-3v-3.473c2.446-1.917 3.745-4.755 3.745-8.228 0-7.585-5.998-9.91-8.855-10.584-.206-3.527-1.966-6.145-4.796-7.075a6.7 6.7 0 0 0-6.372 1.23c-.87-1.963-2.01-3.66-3.4-5.057-4.48-4.506-10.609-5.73-16.397-3.271-4.938 2.097-8.66 7.886-8.658 13.524l.052.903C16.624 28.86 12 31.38 12 38.22c0 5.45 3.162 8.406 5.047 9.683a6.4 6.4 0 0 0 3.588 1.1h1.364c-1.524 3.435-1.308 7.332.667 10.436a14.07 14.07 0 0 0 11.925 6.55c2.819 0 5.411-.692 7.409-1.938v2.953a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7h9a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1"
      />
    </g>
  </svg>
);
const Memo = memo(NetworkFirewall);
export default Memo;
