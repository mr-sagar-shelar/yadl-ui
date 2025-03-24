import type { SVGProps } from "react";
const VSCode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path
      fill="#2489CA"
      d="M33.716 100.208s-4.735-3.413.947-7.97l13.236-11.836s3.788-3.985 7.792-.513l122.149 92.479v44.346s-.059 6.964-8.996 6.194z"
    />
    <path
      fill="#1070B3"
      d="m65.2 128.792-31.484 28.623s-3.236 2.407 0 6.708l14.617 13.295s3.472 3.729 8.601-.513l33.378-25.309z"
    />
    <path
      fill="#0877B9"
      d="m120.474 129.029 57.741-44.09-.375-44.109s-2.466-9.627-10.692-4.616l-76.836 69.931z"
    />
    <path
      fill="#3C99D4"
      d="M168.844 222.968c3.354 3.432 7.418 2.308 7.418 2.308l44.997-22.173c5.76-3.926 4.951-8.798 4.951-8.798V61.898c0-5.82-5.958-7.831-5.958-7.831l-38.999-18.8c-8.522-5.267-14.105.947-14.105.947s7.18-5.168 10.692 4.616v175.075a8 8 0 0 1-.769 3.453c-1.026 2.071-3.255 4.004-8.601 3.195z"
    />
  </svg>
);
export default VSCode;
