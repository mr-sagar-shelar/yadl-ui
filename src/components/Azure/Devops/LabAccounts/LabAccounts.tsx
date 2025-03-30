import type { SVGProps } from "react";
import { memo } from "react";
const LabAccounts = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
    <defs>
      <linearGradient
        id="prefix__a"
        x1={6.136}
        x2={6.274}
        y1={0.665}
        y2={13.402}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#5ea0ef" />
        <stop offset={1} stopColor="#0078d4" />
      </linearGradient>
      <linearGradient
        id="prefix__b"
        x1={13.259}
        x2={13.259}
        y1={5.363}
        y2={17.405}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.001} stopColor="#ffbd02" />
        <stop offset={1} stopColor="#ffd400" />
      </linearGradient>
    </defs>
    <path
      fill="url(#prefix__a)"
      d="m11.579 12.4-1.987-1.975-.053-.052a1.78 1.78 0 0 1 .052-2.511l.73-.732-.565-.822a.5.5 0 0 1-.084-.272V2.008a.24.24 0 0 1 .239-.239h.224a.48.48 0 0 0 .479-.479v-.216A.48.48 0 0 0 10.135.6H4.827a.48.48 0 0 0-.479.479v.211a.48.48 0 0 0 .479.479h.224a.24.24 0 0 1 .24.239v4.018a.5.5 0 0 1-.084.271l-4.172 6.08c-.218.318.01.934.4.934h10.144Z"
    />
    <path
      fill="url(#prefix__b)"
      d="M16.631 10.123a1.356 1.356 0 0 0 .042-1.917l-.042-.042-2.413-2.386a1.355 1.355 0 0 0-1.918-.035l-.035.035-2.378 2.386a1.354 1.354 0 0 0-.042 1.916l.042.043 2 1.986a.37.37 0 0 1 .113.271v3.694a.47.47 0 0 0 .135.332l.9.9a.305.305 0 0 0 .431.017l.016-.017.874-.874.516-.515a.19.19 0 0 0 0-.258l-.373-.373a.2.2 0 0 1 0-.277l.373-.373a.19.19 0 0 0 0-.258l-.373-.373a.2.2 0 0 1 0-.277l.373-.373a.184.184 0 0 0 0-.251l-.516-.522v-.19Zm-3.389-2.2a.787.787 0 0 1-.014-1.573h.014a.787.787 0 0 1 0 1.573"
    />
    <path
      fill="#faa21d"
      d="M12.625 16.128A.17.17 0 0 0 12.91 16v-2.983a.18.18 0 0 0-.081-.149.17.17 0 0 0-.258.149V16a.17.17 0 0 0 .054.128"
    />
    <rect
      width={3.911}
      height={0.461}
      x={11.337}
      y={8.957}
      fill="#faa21d"
      rx={0.21}
    />
    <rect
      width={3.911}
      height={0.461}
      x={11.337}
      y={9.709}
      fill="#faa21d"
      rx={0.21}
    />
    <path
      fill="#fff"
      d="m9.638 10.382-.053-.053a1.7 1.7 0 0 1-.022-2.338l-.7-1.011a.8.8 0 0 1-.137-.442V4.551a.37.37 0 0 0-.368-.368h-1.8a.37.37 0 0 0-.369.368v1.861a1.16 1.16 0 0 1-.2.656l-3.169 4.62a.276.276 0 0 0 .227.432h8.337Z"
    />
  </svg>
);
const Memo = memo(LabAccounts);
export default Memo;
