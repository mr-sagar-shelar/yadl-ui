import type { SVGProps } from "react";
import { memo } from "react";
const FinanceGuyAvatar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="prefix__injected-svg"
    viewBox="0 0 640 640"
    {...props}
  >
    <defs>
      <clipPath id="prefix__a">
        <circle
          cx={320}
          cy={320}
          r={320}
          fill="none"
          stroke="#707070"
          data-name="Ellipse 889"
          transform="translate(-4451 -15900)"
        />
      </clipPath>
    </defs>
    <g data-name="Group 306">
      <path
        fill="var(--color-primary)"
        d="M320 0c176.731 0 320 143.269 320 320S496.731 640 320 640 0 496.731 0 320 143.269 0 320 0"
        data-name="Path 5233"
      />
      <g
        clipPath="url(#prefix__a)"
        data-name="Mask Group 9"
        transform="translate(4451 15900)"
      >
        <g data-name="Group 302" transform="translate(-4315.748 -15782.601)">
          <circle
            cx={55.3}
            cy={55.3}
            r={55.3}
            fill="#ffb9b9"
            data-name="Ellipse 851"
            transform="translate(148.307 30.406)"
          />
          <path
            fill="#ffb9b9"
            d="M155.845 98.269s-2.514 77.922-15.082 87.977 45.245 52.785 45.245 52.785l37.7-60.326v-55.3Z"
            data-name="Path 4985"
          />
          <path
            fill="#f2f2f2"
            d="m180.981 203.844-30.517-46.081-17.239 23.459-25.137 70.381 20.111 273.984 118.143 2.514 15.082-314.2-37.7-45.244Z"
            data-name="Path 4986"
          />
          <path
            fill="#090814"
            d="m309.177 221.437 20.111-2.514s5.026 2.514 7.541 20.108 32.667 173.442 32.667 173.442l-40.219 191.026-45.245-60.326 27.66-105.563-27.652-105.573Z"
            data-name="Path 4987"
          />
          <path
            fill="#090814"
            d="M52.788 218.928H37.706L0 422.528l35.189 158.361 35.192-57.814-10.055-62.84 5.013-55.3 17.6-32.68Z"
            data-name="Path 4988"
          />
          <path
            fill="#090814"
            d="m170.93 85.705 10.055-2.514s7.541-42.743 25.137-37.7 62.841 10.055 62.841-10.055-42.744-37.7-67.867-35.192S133.229 10.299 135.741 48s18.733 74.384 18.733 74.384l1.319-22.356Z"
            data-name="Path 4991"
          />
          <path
            fill="#090814"
            d="m326.778 218.924-80.437-32.677-18.852-13.826-56.561 250.106-37.7-113.114 11.311-144.533-104.311 54.044L75.42 389.852l5.026 65.355-15.084 52.786s-52.786 37.7-35.19 77.922 37.7 42.743 37.7 42.743 85.463-80.436 90.5-100.544 12.567-55.3 12.567-55.3 42.743 160.873 93 158.358 50.274-55.3 50.274-55.3l-12.567-55.3-20.108-57.814 10.055-95.513Z"
            data-name="Path 4994"
          />
        </g>
      </g>
    </g>
  </svg>
);
const Memo = memo(FinanceGuyAvatar);
export default Memo;
