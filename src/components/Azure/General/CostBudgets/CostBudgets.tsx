import type { SVGProps } from "react";
import { memo } from "react";
const CostBudgets = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    {...props}
  >
    <defs>
      <radialGradient
        id="prefix__a"
        cx={9.477}
        cy={9.576}
        r={7.889}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.669} stopColor="#76bc2d" />
        <stop offset={0.787} stopColor="#70b22b" />
        <stop offset={0.985} stopColor="#5f9825" />
        <stop offset={1} stopColor="#5e9624" />
      </radialGradient>
    </defs>
    <path
      fill="#76bc2d"
      d="M11.609 9.82A4.6 4.6 0 0 0 9.9 8.81V6.93a4.1 4.1 0 0 1 1.547.547.13.13 0 0 0 .134 0 .13.13 0 0 0 .068-.115V5.849a.13.13 0 0 0-.068-.116 4.1 4.1 0 0 0-1.681-.39v-.894a.13.13 0 0 0-.133-.133h-.815a.13.13 0 0 0-.133.133v.921a2.76 2.76 0 0 0-1.58.739 2.16 2.16 0 0 0-.669 1.6 2.15 2.15 0 0 0 .547 1.528 4.6 4.6 0 0 0 1.7 1.006v1.8a4.4 4.4 0 0 1-.968-.244 3.1 3.1 0 0 1-.919-.46.14.14 0 0 0-.139-.011.14.14 0 0 0-.072.119V13a.13.13 0 0 0 .071.118 4.7 4.7 0 0 0 2.027.529V14.7a.13.13 0 0 0 .133.132h.811A.13.13 0 0 0 9.9 14.7v-1.1a2.9 2.9 0 0 0 1.65-.716 2.13 2.13 0 0 0 .619-1.588 2.07 2.07 0 0 0-.56-1.476m-1.186 1.538v.01a.606.606 0 0 1-.527.638v-1.321q.52.286.527.673m-2.11-3.743a.62.62 0 0 1 .506-.646v1.386a.87.87 0 0 1-.506-.74"
    />
    <circle cx={2.027} cy={8.496} r={1.527} fill="#f78d1e" />
    <circle cx={4.102} cy={3.932} r={1.527} fill="#f78d1e" />
    <path
      fill="url(#prefix__a)"
      d="M11.636 1.891a8 8 0 0 0-.947-.2 1.51 1.51 0 0 1-.252 1.146 6.825 6.825 0 1 1-6.754 10.331l.6-.225a.132.132 0 0 0 .038-.226l-2.149-1.772a.133.133 0 0 0-.216.081l-.448 2.747a.133.133 0 0 0 .178.146l.883-.332a8 8 0 1 0 9.067-11.7Z"
    />
    <circle cx={8.566} cy={1.928} r={1.527} fill="#f78d1e" />
  </svg>
);
const Memo = memo(CostBudgets);
export default Memo;
