import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 619 814" 
    overflow="hidden"
    {...props}
  >
    <defs>
      <clipPath id="a">
        <path d="M195 171h619v814H195z" />
      </clipPath>
      <clipPath id="b">
        <path d="M1 1h619v280H1z" />
      </clipPath>
      <filter
        id="c"
        width="120%"
        height="120%"
        x="-10%"
        y="-10%"
        filterUnits="userSpaceOnUse"
        primitiveUnits="userSpaceOnUse"
      >
        <feComponentTransfer colorInterpolationFilters="sRGB">
          <feFuncR tableValues="0 0" type="discrete" />
          <feFuncG tableValues="0 0" type="discrete" />
          <feFuncB tableValues="0 0" type="discrete" />
          <feFuncA slope={0.984} type="linear" />
        </feComponentTransfer>
        <feGaussianBlur stdDeviation="0.888889 0.888889" />
      </filter>
    </defs>
    <g clipPath="url(#a)" transform="translate(-195 -171)">
      <g clipPath="url(#b)" filter="url(#c)" transform="translate(194 704)">
        <path
          fill="#2B68AB"
          fillRule="evenodd"
          d="m573.097 87.156-3.065-7.04c0-41.847-116.187-75.783-259.532-75.783-143.346 0-259.532 33.936-259.532 75.783l-3.065 7.04L4 187.85c0 49.405 137.215 89.483 306.5 89.483 169.284 0 306.5-40.078 306.5-89.483L573.097 87.156Z"
        />
      </g>
      <path
        fill="#2B68AB"
        fillRule="evenodd"
        d="m767.097 785.823-3.065-7.04C764.032 736.935 647.845 703 504.5 703c-143.346 0-259.532 33.935-259.532 75.783l-3.065 7.04L198 886.517C198 935.922 335.216 976 504.5 976S811 935.922 811 886.517l-43.903-100.694Z"
      />
      <path
        fillOpacity={0.349}
        fillRule="evenodd"
        d="M246 778.5c0-41.698 115.958-75.5 259-75.5s259 33.802 259 75.5S648.042 854 505 854s-259-33.802-259-75.5Z"
      />
      <path
        fillOpacity={0.349}
        fillRule="evenodd"
        d="M505.5 823c131.284 0 238.626-29.972 246.5-67.783C718.015 724.906 620.51 703 505.5 703c-115.01 0-212.515 21.906-246.5 52.217C266.874 793.028 374.216 823 505.5 823Z"
      />
      <path
        fill="#82B617"
        fillRule="evenodd"
        d="m716.62 661.744-2.47-5.684c0-33.713-93.632-61.06-209.15-61.06s-209.15 27.347-209.15 61.06L258 742.889C258 782.703 368.578 815 505 815s247-32.297 247-72.111l-35.38-81.145Z"
      />
      <path
        fillOpacity={0.349}
        fillRule="evenodd"
        d="M296 656c0-33.689 93.572-61 209-61 115.427 0 209 27.311 209 61s-93.573 61-209 61c-115.428 0-209-27.311-209-61Z"
      />
      <path
        fill="#F0C02B"
        fillRule="evenodd"
        d="m663.232 537.473-1.746-4.539c0-25.359-70.291-45.934-156.986-45.934s-156.986 20.575-156.986 45.934L314 619.974C314 651.464 399.284 677 504.5 677S695 651.464 695 619.974l-31.768-82.501Z"
      />
      <path
        fillOpacity={0.349}
        fillRule="evenodd"
        d="M348 533c0-25.405 70.291-46 157-46s157 20.595 157 46-70.291 46-157 46-157-20.595-157-46Z"
      />
      <path
        fill="#F9960E"
        fillRule="evenodd"
        d="M610.068 410.534C610.068 393.67 563.26 380 505.5 380s-104.568 13.67-104.568 30.534L367 497.182C367 520.273 429.004 539 505.5 539c76.496 0 138.5-18.727 138.5-41.818l-33.932-86.648Z"
      />
      <path
        fillOpacity={0.349}
        fillRule="evenodd"
        d="M400 410.5c0-16.845 46.786-30.5 104.5-30.5S609 393.655 609 410.5 562.214 441 504.5 441 400 427.345 400 410.5Z"
      />
      <path
        fill="#F2754B"
        fillRule="evenodd"
        d="M555.471 285.733c0-9.796-22.818-17.733-50.971-17.733-28.153 0-50.971 7.937-50.971 17.733L418 374.338C418 389.061 456.725 401 504.5 401c47.767 0 86.5-11.939 86.5-26.662l-35.529-88.605Z"
      />
      <path
        fillOpacity={0.349}
        fillRule="evenodd"
        d="M454 285.5c0-9.665 22.833-17.5 51-17.5s51 7.835 51 17.5-22.833 17.5-51 17.5-51-7.835-51-17.5Z"
      />
      <path
        fill="#F05455"
        fillRule="evenodd"
        d="M542 258.239c0 6.49-16.564 11.761-37 11.761s-37-5.271-37-11.761L504.962 171 542 258.239Z"
      />
    </g>
  </svg>
)
const Memo = memo(SvgComponent)
export default Memo
