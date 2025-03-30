import type { SVGProps } from "react";
import { memo } from "react";
const SageMaker = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    <defs>
      <linearGradient id="prefix__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#055F4E" />
        <stop offset="100%" stopColor="#56C0A7" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M54.034 26.034a1.017 1.017 0 1 1-1.017-1.016c.561 0 1.017.456 1.017 1.016M48.002 36a1.001 1.001 0 0 1 2 0 1.001 1.001 0 0 1-2 0m0 19a1.001 1.001 0 0 1 2 0 1.001 1.001 0 0 1-2 0m10-13a1.001 1.001 0 0 1-2 0 1.001 1.001 0 0 1 2 0M65 45.272l-5.037-2.89c.016-.126.039-.25.039-.382 0-1.654-1.346-3-3-3-1.655 0-3 1.346-3 3s1.345 3 3 3c.799 0 1.521-.319 2.059-.829l4.825 2.768-4.331 2.166c-.339.17-.553.516-.553.895v8.441l-12.019 7.396-5.98-3.417V56h5.183a3 3 0 0 0 2.816 2c1.654 0 3-1.346 3-3 0-1.655-1.346-3-3-3a2.995 2.995 0 0 0-2.816 2h-5.183V40c0-.35-.185-.677-.486-.858l-5.001-3-1.029 1.715 4.516 2.71v2.94l-6.001 4.616V44a1 1 0 0 0-.375-.78l-4.625-3.7v-4.985l5.554-3.702a1 1 0 0 0 .446-.832v-6h-2v5.465l-4.989 3.324-5.011-3.326v-7.89l5-2.915V27h2v-9.51l4.003-2.334 5.996 3.459L39.002 31c0 .359.192.69.504.867l6.536 3.735c-.018.131-.04.261-.04.397 0 1.654 1.345 3 3 3 1.654 0 3-1.346 3-3s-1.346-3-3-3c-.794 0-1.512.315-2.049.82l-5.951-3.4-.001-11.802 5.963-3.441 11.038 7.359V25h-2.151a3.02 3.02 0 0 0-2.834-1.983 3.02 3.02 0 0 0-3.015 3.016 3.02 3.02 0 0 0 3.015 3.016A3.02 3.02 0 0 0 55.875 27h2.127v3c0 .36.192.69.504.869L65 34.58zM33.02 65.837l-3.153-1.94 5.716-4.083-1.162-1.628-6.403 4.573-7.016-4.318v-7.875l4.514-2.709-1.029-1.715-4.529 2.718-4.956-2.478-.001-5.765 5.448-2.723-.894-1.789-4.554 2.276.001-3.8 5.961-3.406 5.039 3.344v4.961l-5.553 3.687 1.106 1.666 5.403-3.588 4.044 3.235v5.182l-4.61 3.545 1.219 1.585 11.392-8.762v16.39zm33.476-32.705-6.494-3.711V22a1 1 0 0 0-.446-.832l-12-8a1 1 0 0 0-1.054-.034l-6.498 3.75-6.502-3.75a1 1 0 0 0-1.004.002l-12 7a1 1 0 0 0-.496.864v8.42l-6.496 3.711a1 1 0 0 0-.504.868v.417L13 34.48v10.884l.002.06V47c0 .38.214.725.553.894l5.447 2.724V59c0 .347.179.67.475.851l13 8a1 1 0 0 0 1.021.017l6.505-3.716 6.503 3.716c.315.181.707.174 1.02-.017l13-8a1 1 0 0 0 .476-.85v-8.383l5.445-2.724A1 1 0 0 0 67 47V34a1 1 0 0 0-.504-.868"
      />
    </g>
  </svg>
);
const Memo = memo(SageMaker);
export default Memo;
