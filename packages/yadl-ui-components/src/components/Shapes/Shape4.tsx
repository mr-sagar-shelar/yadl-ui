import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 209 314" 
    overflow="hidden"
    {...props}
  >
    <path
      fill="#F2B323"
      fillRule="evenodd"
      d="M164 38.288c26.837-7.891 61.97 11.178 0 58.52V107c81-60.658 31.717-84 0-78.082v9.37ZM44 38.288c-26.345-7.891-61.205 11.178 0 58.52V107c-80-60.658-31.165-84 0-78.082v9.37Z"
    />
    <path fill="#4D636E" d="M31 229h146v62H31z" />
    <path fill="#F2B323" d="M66 242h76v35H66z" />
    <path fill="#36515E" d="M25 291h159v11H25z" />
    <path
      fill="#FBC922"
      fillRule="evenodd"
      d="M167 96.083c0 14.847-6.123 29.693-18.368 40.95C136.225 148.453 120.113 154 104 154s-32.225-5.547-44.471-16.967C47.123 125.776 41 110.93 41 96.083V15h126v81.083Z"
    />
    <path fill="#F2B323" d="M34 1h140v20H34zM56 218h97v12H56z" />
    <path
      fill="#FBC922"
      fillRule="evenodd"
      d="M112.61 181.443V168H96.39v13.443C96.39 201.607 78.385 218 56 218h97c-22.385 0-40.39-16.393-40.39-36.557Z"
    />
    <path
      fill="#F2B323"
      fillRule="evenodd"
      d="M125 151H84v10.105c0 2.842 1.125 5.527 3.537 7.737 2.412 2.053 5.628 3.158 8.843 3.158h16.079c3.215 0 6.431-1.105 8.843-3.158 2.412-2.21 3.698-4.895 3.698-7.737V151Z"
    />
    <path fill="#4D636E" d="M18 302h172v11H18z" />
  </svg>
)
const Memo = memo(SvgComponent)
export default Memo
