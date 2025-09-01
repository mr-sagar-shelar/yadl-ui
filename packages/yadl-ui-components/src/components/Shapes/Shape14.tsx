import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1525 669" 
    overflow="hidden"
    {...props}
  >
    <g fillRule="evenodd">
      <path
        fill="#2B68AB"
        d="M1328.511 668 1239 502.756 1276.934 457h113.063L1524 668"
      />
      <path
        fillOpacity={0.451}
        d="M1327.113 668 1238 502.756 1275.771 457 1351 668"
      />
      <path
        fill="#82B617"
        d="M1120.897 668 1029 452.634 1068.664 393h118.221L1327 668"
      />
      <path
        fillOpacity={0.451}
        d="M1121.142 668 1029 452.634 1068.777 393 1148 668"
      />
      <path
        fill="#F0C02B"
        d="M891.984 668 778 364.139 823.654 280h136.072L1121 668"
      />
      <path
        fillOpacity={0.451}
        d="M892.49 668 779 364.139 824.46 280 915 668"
      />
      <path
        fill="#F9960E"
        d="M634.374 669 512 288.39 562.579 183H713.33L892 669"
      />
      <path
        fillOpacity={0.451}
        d="M635.916 669 513 288.39 563.807 183 665 669"
      />
      <path
        fill="#F2754B"
        d="M380.84 668 255 216.907 305.579 92H456.33L635 668"
      />
      <path
        fillOpacity={0.451}
        d="M380.568 668 255 216.907 305.473 92 406 668"
      />
      <path fill="#F05455" d="M141.319 668 1 144.857 51.579 0H202.33L381 668" />
      <path fillOpacity={0.451} d="M141.01 668 1 144.857 51.473 0 152 668" />
    </g>
  </svg>
)
const Memo = memo(SvgComponent)
export default Memo
