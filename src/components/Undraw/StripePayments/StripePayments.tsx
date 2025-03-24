import type { SVGProps } from "react";
import { memo } from "react";
const StripePayments = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className="prefix__injected-svg"
    viewBox="0 0 293.874 609.152"
    {...props}
  >
    <path
      fill="#2f2e41"
      d="M246.717 609.152H47.157C21.155 609.152 0 587.997 0 561.995V47.157C0 21.155 21.155 0 47.157 0h199.56c26.002 0 47.157 21.155 47.157 47.157v514.838c0 26.002-21.155 47.157-47.157 47.157"
    />
    <path
      fill="#fff"
      d="M246.92 596.425H46.954c-19.51 0-35.384-15.873-35.384-35.384V45.218c0-19.51 15.873-35.384 35.384-35.384H246.92c19.51 0 35.384 15.874 35.384 35.384v515.823c0 19.51-15.873 35.384-35.384 35.384"
    />
    <path
      fill="#2f2e41"
      d="M178.176 43.387H114.54c-7.336 0-13.305-5.969-13.305-13.305s5.969-13.306 13.305-13.306h63.635c7.336 0 13.305 5.969 13.305 13.306s-5.969 13.305-13.305 13.305"
    />
    <path
      fill="var(--color-primary)"
      d="m146.873 253.277-.048.048c-.44-.497-.89-.987-1.366-1.462-12.497-12.497-32.758-12.497-45.255 0s-12.497 32.757 0 45.254a32 32 0 0 0 1.463 1.366l-.049.049 45.255 45.254 45.255-45.254c12.497-12.497 12.497-32.759 0-45.255s-32.758-12.497-45.255 0"
    />
  </svg>
);
const Memo = memo(StripePayments);
export default Memo;
