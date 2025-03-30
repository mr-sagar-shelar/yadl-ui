import type { SVGProps } from "react";
import { memo } from "react";
const EKSDistro = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    <defs>
      <linearGradient id="prefix__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#C8511B" />
        <stop offset="100%" stopColor="#F90" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M51.931 56.813a4.875 4.875 0 0 1-4.869-4.87 4.874 4.874 0 0 1 4.869-4.869 4.874 4.874 0 0 1 4.869 4.869 4.875 4.875 0 0 1-4.869 4.87m0-11.739a6.876 6.876 0 0 0-6.869 6.869 6.877 6.877 0 0 0 6.869 6.87 6.877 6.877 0 0 0 6.869-6.87 6.876 6.876 0 0 0-6.869-6.869m14 9.13h-2.182a1 1 0 0 0-.966.744c-.251.947-.63 1.86-1.126 2.714a1 1 0 0 0 .157 1.209l1.544 1.545-2.954 2.955-1.545-1.545a1 1 0 0 0-1.21-.158c-.855.498-1.768.877-2.713 1.127a1 1 0 0 0-.744.967v2.181H49.67v-2.181a1 1 0 0 0-.757-.97 12 12 0 0 1-2.884-1.135 1 1 0 0 0-1.17.15l-1.69 1.6-3.158-2.991 1.61-1.526a1 1 0 0 0 .165-1.249 10.7 10.7 0 0 1-1.186-2.706 1 1 0 0 0-.963-.731h-1.706v-4.259h.018l2.181-.038a1 1 0 0 0 .95-.748c.252-.967.632-1.9 1.129-2.772a1 1 0 0 0-.154-1.196l-1.564-1.595 2.972-3.029.015.017 1.516 1.553a1 1 0 0 0 1.226.161 10.9 10.9 0 0 1 2.711-1.147 1 1 0 0 0 .739-.965v-2.243h4.522v2.182a1 1 0 0 0 .744.967 11 11 0 0 1 2.713 1.126 1 1 0 0 0 1.21-.157l1.545-1.545 2.954 2.955-1.544 1.545a1 1 0 0 0-.157 1.209c.496.854.875 1.767 1.126 2.714a1 1 0 0 0 .966.744h2.182zM37.445 65.862 14 53.398V26.57l20-11.818v9.699l-10.537 6.705A1 1 0 0 0 23 32v16c0 .373.208.714.538.887L36.2 55.475c.29.438.786.729 1.35.729h1.353q.317.912.773 1.774l-1.332 1.262a1.63 1.63 0 0 0-.506 1.176c0 .442.185.871.506 1.175l2.517 2.385zm15.059-34.726L41 24.425v-9.673L61 26.57v11.913c-.584-.221-1.29-.105-1.741.35l-1.287 1.286a13 13 0 0 0-1.78-.74v-1.816c0-.893-.727-1.62-1.619-1.62H53V32a1 1 0 0 0-.496-.864m13.808 16.547h-1.818a13 13 0 0 0-.739-1.781l1.285-1.285c.307-.306.476-.713.476-1.146s-.169-.84-.475-1.145L63 40.285V26a1 1 0 0 0-.491-.861l-22-13a1 1 0 0 0-1.005-.008c-.311.178-.504.51-.504.869v12a1 1 0 0 0 .496.863L51 32.574v3.369h-1.711c-.892 0-1.619.727-1.619 1.62v1.881a13 13 0 0 0-1.776.751l-.9-.922a1.8 1.8 0 0 0-1.262-.831c-.543-.079-1.072.088-1.424.447l-2.938 2.993-2.357-2.762 6.83-7.921h-2.661L35 38v-7h-2v17h2v-8l3.368 3.89c.057.307.2.602.433.84l1.313 1.338q-.447.9-.755 1.852l-1.431.025c-.222 0-.594 0-.964.133-.646.231-1.033.777-1.033 1.459v3.543L25 47.393V32.548l10.537-6.705A1 1 0 0 0 36 25V13a1 1 0 0 0-1.508-.861l-22 13A1 1 0 0 0 12 26v28c0 .369.204.709.531.882l24.453 13a1 1 0 0 0 .953-.007l4.535-2.503c.59.285 1.31.209 1.811-.265l1.435-1.359q.948.458 1.952.771v1.805c0 .893.727 1.619 1.619 1.619h5.284c.892 0 1.619-.726 1.619-1.619v-1.817a13 13 0 0 0 1.78-.739l1.286 1.286c.61.611 1.676.613 2.29 0l3.492-3.492c.307-.307.476-.713.476-1.146s-.169-.84-.475-1.145l-1.286-1.287q.437-.864.739-1.78h1.818c.892 0 1.619-.726 1.619-1.619v-5.284a1.62 1.62 0 0 0-1.619-1.618"
      />
    </g>
  </svg>
);
const Memo = memo(EKSDistro);
export default Memo;
