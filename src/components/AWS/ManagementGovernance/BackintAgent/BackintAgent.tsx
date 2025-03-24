import type { SVGProps } from "react";
import { memo } from "react";
const BackintAgent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
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
        d="m61.826 57.137-.877-1.797a8.84 8.84 0 0 0 4.992-7.991c0-4.9-3.986-8.887-8.886-8.887a9 9 0 0 0-1.83.19 1 1 0 0 1-1.121-.577 3.3 3.3 0 0 0-2.095-1.848 1 1 0 0 1-.716-.891c-.249-3.6-3.27-6.421-6.877-6.421a6.9 6.9 0 0 0-3.286.83 1 1 0 0 1-1.104-.1 10 10 0 0 0-5.387-2.187l.18-1.992c2.151.195 4.194.964 5.947 2.23a8.9 8.9 0 0 1 3.65-.781c4.433 0 8.18 3.3 8.803 7.629a5.3 5.3 0 0 1 2.342 2.02 11 11 0 0 1 4.525.327 14.52 14.52 0 0 0 1.561-10.538 14.5 14.5 0 0 0-6.488-9.116 14.5 14.5 0 0 0-11.033-1.86 14.52 14.52 0 0 0-9.117 6.489 14.67 14.67 0 0 0-.711 14.253l2.556-4.203 1.709 1.04-3.842 6.317a1.004 1.004 0 0 1-1.375.334l-6.317-3.844 1.041-1.708 4.264 2.595a16.68 16.68 0 0 1 .98-15.846 16.5 16.5 0 0 1 10.364-7.376 16.51 16.51 0 0 1 12.544 2.113 16.52 16.52 0 0 1 7.375 10.364 16.5 16.5 0 0 1-1.633 11.728c3.544 1.798 5.977 5.478 5.977 9.716 0 4.195-2.343 7.945-6.115 9.788m-30.242 1.099h-8.969c-5.302 0-9.615-4.314-9.615-9.617 0-5 3.835-9.12 8.717-9.574a12 12 0 0 1-.102-1.527c0-4.618 2.69-8.9 6.851-10.906l.869 1.8a10.16 10.16 0 0 0-5.72 9.106c0 .74.091 1.507.268 2.275.07.303-.004.62-.202.862-.199.239-.5.366-.806.363l-.26-.014c-4.199 0-7.615 3.416-7.615 7.615 0 4.2 3.416 7.617 7.615 7.617h8.969zm13.501-.325c2.513.489 3.963-.871 4.442-2.191.48-1.321.238-3.293-2.001-4.531-2.508-.484-3.963.87-4.442 2.192-.48 1.32-.239 3.292 2.001 4.53m1.018 2.103q-.703.002-1.484-.156a1.6 1.6 0 0 1-.42-.152l-.006-.003c-3.196-1.722-3.804-4.758-2.989-7.004s3.227-4.186 6.788-3.457q.218.046.42.152c3.202 1.726 3.81 4.764 2.995 7.009-.696 1.917-2.559 3.61-5.304 3.61m-4.886 4.158 2.772 1.006.424-1.17c.228-.626.87-1.01 1.501-.992a8.3 8.3 0 0 0 1.512-.065 1.52 1.52 0 0 1 1.577.857l.526 1.124 2.672-1.25-.526-1.124a1.51 1.51 0 0 1 .355-1.76 8.4 8.4 0 0 0 1.02-1.117 1.51 1.51 0 0 1 1.723-.515l1.172.426 1.006-2.773-1.186-.431a1.51 1.51 0 0 1-.992-1.493 8.5 8.5 0 0 0-.071-1.495 1.51 1.51 0 0 1 .857-1.585l1.146-.536-1.249-2.672-1.168.546c-.6.279-1.306.137-1.757-.354a8.5 8.5 0 0 0-1.095-.993 1.51 1.51 0 0 1-.515-1.722l.443-1.22-2.773-1.007-.449 1.233a1.52 1.52 0 0 1-1.49.993q-.736-.03-1.465.067a1.52 1.52 0 0 1-1.579-.853l-.556-1.194-2.673 1.249.556 1.19a1.51 1.51 0 0 1-.354 1.76 8.5 8.5 0 0 0-.993 1.08 1.51 1.51 0 0 1-1.72.509l-1.232-.447-1.007 2.772 1.218.442c.624.227 1.023.828.994 1.497q-.035.742.06 1.483a1.51 1.51 0 0 1-.857 1.572l-1.168.546 1.249 2.673 1.148-.537a1.51 1.51 0 0 1 1.762.36c.338.37.709.713 1.104 1.016a1.51 1.51 0 0 1 .508 1.718zm3.066 3.145q-.263 0-.517-.091l-3.692-1.341a1.5 1.5 0 0 1-.854-.781 1.5 1.5 0 0 1-.05-1.156l.476-1.312q-.446-.367-.848-.781l-1.271.593a1.51 1.51 0 0 1-2.008-.73l-1.662-3.56a1.5 1.5 0 0 1-.052-1.153c.138-.38.416-.682.781-.853l1.293-.605a10 10 0 0 1-.047-1.13l-1.346-.488a1.513 1.513 0 0 1-.904-1.934l1.342-3.694a1.5 1.5 0 0 1 .778-.852 1.5 1.5 0 0 1 1.156-.052l1.363.494q.353-.43.752-.821l-.614-1.315a1.514 1.514 0 0 1 .729-2.008l3.476-1.625h.001a1.605 1.605 0 0 1 2.13.774l.574 1.23a10 10 0 0 1 1.115-.05l.495-1.362a1.51 1.51 0 0 1 1.934-.905l3.694 1.342a1.51 1.51 0 0 1 .905 1.932l-.489 1.348q.44.358.837.76l1.292-.604a1.51 1.51 0 0 1 2.008.73l1.664 3.558a1.513 1.513 0 0 1-.729 2.008l-1.27.594q.059.572.055 1.15l1.315.479a1.513 1.513 0 0 1 .904 1.933l-1.341 3.696a1.514 1.514 0 0 1-1.936.904l-1.296-.472q-.37.453-.789.865l.584 1.248a1.513 1.513 0 0 1-.729 2.007l-3.56 1.664a1.5 1.5 0 0 1-1.155.05 1.5 1.5 0 0 1-.853-.78l-.583-1.247a9 9 0 0 1-1.168.05l-.471 1.298a1.5 1.5 0 0 1-.78.852 1.5 1.5 0 0 1-.639.143"
      />
    </g>
  </svg>
);
const Memo = memo(BackintAgent);
export default Memo;
