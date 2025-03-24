import type { SVGProps } from "react";
import { memo } from "react";
const CleanRooms = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
    <defs>
      <linearGradient id="prefix__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#4D27A8" />
        <stop offset="100%" stopColor="#A166FF" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M65.118 60.122c-1.133 1.133-3.11 1.133-4.242 0a3.003 3.003 0 0 1 0-4.243 2.98 2.98 0 0 1 2.12-.879c.803 0 1.556.312 2.122.879a3.003 3.003 0 0 1 0 4.243M62.997 53c-.996 0-1.946.291-2.757.829l-4.536-4.536-1.414 1.414 4.536 4.537a5.01 5.01 0 0 0 .636 6.292A4.97 4.97 0 0 0 62.997 63c1.336 0 2.59-.52 3.535-1.464a5.006 5.006 0 0 0 0-7.071A4.96 4.96 0 0 0 62.997 53m-2.121-33.121a2.98 2.98 0 0 1 2.12-.879c.803 0 1.556.312 2.122.879a3.003 3.003 0 0 1 0 4.243c-1.133 1.133-3.11 1.133-4.242 0a3.003 3.003 0 0 1 0-4.243m-5.172 10.828 4.536-4.536a4.96 4.96 0 0 0 2.757.829c1.336 0 2.59-.52 3.535-1.464a5.006 5.006 0 0 0 0-7.071A4.96 4.96 0 0 0 62.997 17c-1.336 0-2.591.52-3.535 1.465a5.01 5.01 0 0 0-.636 6.292l-4.536 4.536zM19.118 60.122c-1.133 1.133-3.11 1.133-4.242 0a3.003 3.003 0 0 1 0-4.243 2.98 2.98 0 0 1 2.12-.879c.803 0 1.556.312 2.122.879a3.003 3.003 0 0 1 0 4.243m5.172-10.829-4.536 4.536A4.97 4.97 0 0 0 16.997 53c-1.336 0-2.591.52-3.535 1.465a5.006 5.006 0 0 0 0 7.071A4.97 4.97 0 0 0 16.997 63c1.336 0 2.59-.52 3.535-1.464a5.01 5.01 0 0 0 .636-6.292l4.536-4.537zM39.997 41a1.501 1.501 0 1 1-1.5 1.5c0-.827.673-1.5 1.5-1.5m-.97 4.847V49h2v-3.172c1.426-.444 2.47-1.759 2.47-3.328 0-1.929-1.57-3.5-3.5-3.5s-3.5 1.571-3.5 3.5c0 1.592 1.074 2.924 2.53 3.347M14.877 24.122a3.003 3.003 0 0 1 0-4.243 2.98 2.98 0 0 1 2.12-.879c.803 0 1.556.312 2.122.879a3.003 3.003 0 0 1 0 4.243c-1.133 1.133-3.11 1.133-4.242 0m5.656-5.657A4.96 4.96 0 0 0 16.997 17c-1.336 0-2.591.52-3.535 1.465a5.006 5.006 0 0 0 0 7.071A4.97 4.97 0 0 0 16.997 27c.996 0 1.946-.29 2.757-.829l4.536 4.536 1.414-1.414-4.536-4.536a5.01 5.01 0 0 0-.636-6.292M28.997 52h22V37h-22zm4.976-21.047c0-1.628 1.357-2.953 3.024-2.953h5.976c1.667 0 3.024 1.325 3.024 2.953V35H33.973zM42.997 63c0 1.655-1.346 3-3 3s-3-1.345-3-3c0-1.654 1.346-3 3-3s3 1.346 3 3m-6-46c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.655-1.346 3-3 3s-3-1.345-3-3m14.257 18h-3.257v-4.047c0-2.731-2.254-4.953-5.024-4.953h-1.976v-4.101a5.01 5.01 0 0 0 4-4.899c0-2.756-2.243-5-5-5s-5 2.244-5 5a5.01 5.01 0 0 0 4 4.899V26h-2c-2.77 0-5.024 2.222-5.024 4.953V35H28.74c-.961 0-1.743.771-1.743 1.718v15.565c0 .947.782 1.717 1.743 1.717h10.257v4.101a5.01 5.01 0 0 0-4 4.899c0 2.757 2.243 5 5 5s5-2.243 5-5a5.01 5.01 0 0 0-4-4.899V54h11a1 1 0 0 0 1-1V36.718c0-.947-.782-1.718-1.743-1.718"
      />
    </g>
  </svg>
);
const Memo = memo(CleanRooms);
export default Memo;
