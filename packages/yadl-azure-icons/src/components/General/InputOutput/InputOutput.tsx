import type { SVGProps } from "react";
import { memo } from "react";
const InputOutput = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
    <defs>
      <linearGradient
        id="prefix__a"
        x1={-1803.596}
        x2={-1810.471}
        y1={-323.82}
        y2={-323.82}
        gradientTransform="rotate(90 -1067.682 748.224)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#773adc" />
        <stop offset={1} stopColor="#a67af4" />
      </linearGradient>
      <linearGradient
        id="prefix__b"
        x1={-1803.596}
        x2={-1810.471}
        y1={-333.097}
        y2={-333.097}
        gradientTransform="rotate(90 -1067.682 748.224)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#1b93eb" />
        <stop offset={1} stopColor="#6bb9f2" />
      </linearGradient>
    </defs>
    <g fill="#999">
      <path d="M1.313 1.746h1.236V5.2a.274.274 0 0 1-.274.274H1.039A.274.274 0 0 1 .765 5.2V2.294a.55.55 0 0 1 .548-.548" />
      <path
        d="M1.313 1.746h1.236V5.2a.274.274 0 0 1-.274.274H1.039A.274.274 0 0 1 .765 5.2V2.294a.55.55 0 0 1 .548-.548"
        opacity={0.5}
      />
    </g>
    <g fill="#999">
      <path d="M15.271 1.746h1.236a.55.55 0 0 1 .548.548V5.2a.274.274 0 0 1-.274.274h-1.236a.274.274 0 0 1-.274-.274z" />
      <path
        d="M15.271 1.746h1.236a.55.55 0 0 1 .548.548V5.2a.274.274 0 0 1-.274.274h-1.236a.274.274 0 0 1-.274-.274z"
        opacity={0.5}
      />
    </g>
    <path
      fill="#949494"
      d="M17.055 2.289v1.2H.765v-1.2a.543.543 0 0 1 .543-.543h15.2a.543.543 0 0 1 .547.543"
    />
    <g fill="#999">
      <path d="M1.039 12.526h1.237a.274.274 0 0 1 .274.274v3.454H1.313a.55.55 0 0 1-.548-.548V12.8a.274.274 0 0 1 .274-.274" />
      <path
        d="M1.039 12.526h1.237a.274.274 0 0 1 .274.274v3.454H1.313a.55.55 0 0 1-.548-.548V12.8a.274.274 0 0 1 .274-.274"
        opacity={0.5}
      />
    </g>
    <g fill="#999">
      <path d="M15.545 12.526h1.236a.274.274 0 0 1 .274.274v2.907a.55.55 0 0 1-.548.548h-1.236V12.8a.274.274 0 0 1 .274-.274" />
      <path
        d="M15.545 12.526h1.236a.274.274 0 0 1 .274.274v2.907a.55.55 0 0 1-.548.548h-1.236V12.8a.274.274 0 0 1 .274-.274"
        opacity={0.5}
      />
    </g>
    <path
      fill="#949494"
      d="M.765 15.711v-1.2h16.29v1.2a.543.543 0 0 1-.543.543H1.308a.543.543 0 0 1-.543-.543"
    />
    <path
      fill="url(#prefix__a)"
      d="m4.989 5.484 3.125 3.125a.37.37 0 0 1 0 .527l-3.125 3.125a.166.166 0 0 1-.284-.118v-1.921a.166.166 0 0 0-.166-.167H.633A.13.13 0 0 1 .5 9.922v-2.1a.13.13 0 0 1 .133-.132h3.906a.166.166 0 0 0 .166-.167V5.6a.166.166 0 0 1 .284-.116"
    />
    <path
      fill="url(#prefix__b)"
      d="m14.266 5.484 3.125 3.125a.374.374 0 0 1 0 .527l-3.125 3.125a.166.166 0 0 1-.284-.118v-1.921a.167.167 0 0 0-.167-.167H9.909a.13.13 0 0 1-.132-.133v-2.1a.13.13 0 0 1 .132-.133h3.906a.167.167 0 0 0 .167-.167V5.6a.166.166 0 0 1 .284-.116"
    />
  </svg>
);
const Memo = memo(InputOutput);
export default Memo;
