import type { SVGProps } from "react";
import { memo } from "react";
const Detective = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    <defs>
      <linearGradient id="prefix__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#BD0816" />
        <stop offset="100%" stopColor="#FF5252" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M26.72 27.095c2.072.476 4.651 1.33 7.328 2.215 3.563 1.18 7.246 2.4 8.954 2.4s5.391-1.22 8.952-2.4c2.677-.886 5.255-1.739 7.327-2.215l-3.408-2.275c-2.266.856-10.47 3.89-12.871 3.89s-10.607-3.034-12.875-3.89zm4.728-3.916c4.151 1.551 9.98 3.53 11.554 3.53 1.572 0 7.385-1.974 11.533-3.523l-5.171-8.839c-.2-.318-.657-.429-1.003-.219l-3.945 2.366a2.75 2.75 0 0 1-2.828 0l-3.944-2.366c-.364-.22-.849-.113-1.101.03zm21.392 7.945-.257.085c-3.883 1.285-7.551 2.5-9.581 2.5s-5.698-1.215-9.583-2.5l-.259-.086c.906 4.82 5.861 12.586 9.842 12.586 3.98 0 8.933-7.766 9.838-12.585M23.043 28a1 1 0 0 1 .402-1.122L29.252 23l5.655-10.01a1 1 0 0 1 .209-.258c.802-.708 2.323-1.06 3.557-.318l3.944 2.366a.75.75 0 0 0 .77 0l3.944-2.366a2.76 2.76 0 0 1 3.743.9l5.667 9.681 5.815 3.883A1 1 0 0 1 62 28.71c-1.467 0-4.152.786-7.036 1.72-.494 5.693-6.555 15.28-11.962 15.28-5.41 0-11.471-9.588-11.966-15.28-2.883-.934-5.57-1.72-7.036-1.72a1 1 0 0 1-.957-.71m35.612 19.59 1.088-1.21a.996.996 0 0 0-.118-1.45l-5-4-1.25 1.561 4.173 3.337-8.291 9.213a1 1 0 0 0 .144 1.469l3.196 2.398-5.395 7.136 1.596 1.206 6-7.937a1.002 1.002 0 0 0-.198-1.403l-3.125-2.344 5.553-6.17C61.413 49.49 66 54.223 66 58.71v9h2v-9c0-5.01-4.471-10.09-9.345-11.12M37.85 63.393l-5.922-5.949a10.6 10.6 0 0 1-1.867 1.948l5.895 5.892c.497.498 1.327.478 1.849-.044.52-.52.541-1.349.045-1.847M23.5 59.71c4.687 0 8.5-3.813 8.5-8.5s-3.813-8.5-8.5-8.5-8.5 3.813-8.5 8.5 3.814 8.5 8.5 8.5m15.768 2.274c1.271 1.278 1.25 3.373-.049 4.672a3.36 3.36 0 0 1-2.379.99 3.23 3.23 0 0 1-2.298-.945l-6.191-6.188A10.4 10.4 0 0 1 23.5 61.71C17.71 61.71 13 57 13 51.21s4.71-10.5 10.5-10.5S34 45.42 34 51.21a10.4 10.4 0 0 1-1.011 4.467zm9.024-14.989-5.29 5.3-5.295-5.3-1.414 1.413 6.002 6.008a1 1 0 0 0 1.415 0l5.998-6.008zM58 67.71h2v-7h-2z"
      />
    </g>
  </svg>
);
const Memo = memo(Detective);
export default Memo;
