import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 154 153" 
    overflow="hidden"
    {...props}
  >
    <g fill="#F05455" fillRule="evenodd">
      <path
        fillOpacity={0.2}
        d="M1 76.5C1 34.25 35.026 0 77 0s76 34.25 76 76.5S118.974 153 77 153 1 118.75 1 76.5Z"
      />
      <path
        fillOpacity={0.349}
        d="M12 76.5C12 40.325 41.102 11 77 11c35.898 0 65 29.325 65 65.5S112.898 142 77 142c-35.898 0-65-29.325-65-65.5Z"
      />
      <path d="M23 76.5C23 46.953 47.177 23 77 23s54 23.953 54 53.5S106.823 130 77 130s-54-23.953-54-53.5Z" />
    </g>
  </svg>
)
const Memo = memo(SvgComponent)
export default Memo
