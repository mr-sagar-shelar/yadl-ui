import type { SVGProps } from "react";
import { memo } from "react";
const ElasticKubernetesService = (props: SVGProps<SVGSVGElement>) => (
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
        d="m46.842 32.199-6.829 7.921 7.428 8.664h-2.772L38 41v8h-2V32h2v7l6.181-6.801zM64 48.234l-8-4.801V32a1 1 0 0 0-.496-.864L44 24.426v-9.674l20 11.819zm1.509-23.095-22-13a1 1 0 0 0-1.005-.008c-.311.178-.504.51-.504.869v12c0 .355.189.684.496.864L54 32.574V44a1 1 0 0 0 .486.857l10 6A.997.997 0 0 0 66 50V26a1 1 0 0 0-.491-.861M40.445 66.863 17 54.399V26.571l20-11.819v9.699l-10.537 6.705A1 1 0 0 0 26 32v17a1 1 0 0 0 .538.887l13.453 7c.289.15.633.151.921.001l13.052-6.744 8.032 4.82zm24.07-12.721-10-6a1 1 0 0 0-.974-.03l-13.086 6.761L28 48.393V32.549l10.537-6.705c.288-.184.463-.502.463-.844V13a1 1 0 0 0-1.509-.861l-22 13A1 1 0 0 0 15 26v29c0 .369.204.709.53.883l24.454 13a1 1 0 0 0 .953-.008l23.547-13a1.002 1.002 0 0 0 .031-1.733"
      />
    </g>
  </svg>
);
const Memo = memo(ElasticKubernetesService);
export default Memo;
