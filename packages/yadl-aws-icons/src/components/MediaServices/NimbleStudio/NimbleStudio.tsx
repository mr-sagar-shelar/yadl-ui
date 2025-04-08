import type { SVGProps } from "react";
import { memo } from "react";
const NimbleStudio = (props: SVGProps<SVGSVGElement>) => (
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
        d="M47.959 60.958c-1.545-.824-4.132-2.203-6.536-4.937-2.228-2.53-3.34-5.136-4.075-6.86a31.4 31.4 0 0 1-1.972-6.501.999.999 0 0 0-1.867-.281 37 37 0 0 0-1.573 3.406C30.919 48.317 28.232 57.37 28.414 64h-4.287c-1.144-4.252-2.407-7.702-7.358-15.402a96 96 0 0 1-1.144-1.842c-.486-.796-.953-1.561-1.384-2.189l5.787-7.697q.509.927.949 1.893c.782 1.725 1.14 2.987 2.004 6.035l.433 1.521c.305 1.065.792 2.759 1.418 4.875a1 1 0 0 0 1.958-.239c.337-7.57 1.926-14.587 4.724-20.855 2.025-4.539 4.64-8.487 7.362-11.118a30 30 0 0 1 3.364-2.804l5.755 9.35a20 20 0 0 0-2.932 2.777 20.8 20.8 0 0 0-3.153 4.994c-.716 1.59-1.916 4.911-1.899 9.298.005 1.186.014 3.963 1.189 7.289.557 1.577 2.285 5.618 6.286 9.08 3.968 3.434 8.141 4.565 10.225 5.024-4.773-.375-8.255-2.233-9.752-3.032M40.193 15c.106 0 .209.006.314.007-1.054.793-2.077 1.627-3.02 2.537-2.902 2.804-5.673 6.974-7.799 11.741-2.221 4.975-3.708 10.398-4.438 16.177l-.344-1.21c-.868-3.059-1.264-4.455-2.109-6.316a30 30 0 0 0-1.815-3.396 1 1 0 0 0-.805-.471 1.02 1.02 0 0 0-.843.398L14.121 41.4c.008-.3.014-.558.014-.73C14.135 26.516 25.824 15 40.193 15m25.678 47.587c-1.392.079-3.983.228-7.128-.423-1.62-.335-5.923-1.227-9.948-4.711-3.639-3.149-5.205-6.807-5.709-8.233-1.062-3.007-1.071-5.546-1.075-6.631-.016-4.158 1.2-7.307 1.723-8.469a18.8 18.8 0 0 1 2.844-4.51 18 18 0 0 1 3.323-3.002 1 1 0 0 0 .28-1.344l-6.145-9.983c12.553 1.836 22.215 12.521 22.215 25.389 0 6.225-2.29 12.23-6.447 16.907l1.494 1.329a27.43 27.43 0 0 0 6.953-18.236C68.251 25.413 55.664 13 40.193 13S12.135 25.413 12.135 40.67c0 .813-.134 3.811-.135 3.841l.008.001a1 1 0 0 0 .202.658c.478.614 1.075 1.593 1.708 2.629.375.613.767 1.254 1.169 1.88 5.18 8.057 6.149 11.167 7.303 15.574a1 1 0 0 0 .967.747h6.112a1 1 0 0 0 .447-.118 27.4 27.4 0 0 0 10.207 1.946c2.328 0 4.641-.29 6.875-.862l-.496-1.938c-2.072.531-4.219.8-6.379.8-3.37 0-6.628-.644-9.705-1.907-.156-5.987 2.257-14.609 3.373-17.391q.137-.339.279-.675a33.5 33.5 0 0 0 1.438 4.09c.786 1.842 1.974 4.626 4.413 7.397 2.644 3.007 5.432 4.492 7.097 5.381 1.627.868 5.436 2.901 10.719 3.274q.841.059 1.678.058c3.94 0 7.615-.915 8.334-1.66.205-.214.342-.579.31-.874-.115-1.053-1.121-.993-2.188-.934"
      />
    </g>
  </svg>
);
const Memo = memo(NimbleStudio);
export default Memo;
