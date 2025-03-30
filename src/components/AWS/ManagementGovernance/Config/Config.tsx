import type { SVGProps } from "react";
import { memo } from "react";
const Config = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    <defs>
      <linearGradient id="prefix__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#B0084D" />
        <stop offset="100%" stopColor="#FF4F8B" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="m58.54 47.05 1.882.651-1.187 3.429a.994.994 0 0 1-1.063.661l-3.832-.477.247-1.975 2.165.271c-.851-1.342-2.457-2.18-4.377-2.18-2.514 0-4.42 1.376-4.855 3.505l-1.948-.398c.632-3.095 3.303-5.095 6.803-5.095 2.454 0 4.532 1.039 5.782 2.72zm-1.31 6.74 1.948.4c-.63 3.073-3.364 5.137-6.803 5.137-2.239 0-4.212-.964-5.487-2.512l-.198.934-1.947-.413.79-3.722a.99.99 0 0 1 1.164-.77l3.617.709-.382 1.952-1.823-.357c.873 1.339 2.452 2.19 4.266 2.19 2.507 0 4.412-1.393 4.855-3.549m7.78.31-1.196-.068c-.482-.023-.919.3-1.026.775a10.5 10.5 0 0 1-1.367 3.3c-.26.41-.184.949.178 1.272l.894.797-2.316 2.317-.794-.889a.994.994 0 0 0-1.274-.179 10.5 10.5 0 0 1-3.304 1.37.99.99 0 0 0-.773 1.026l.068 1.19H50.82l.07-1.19a.995.995 0 0 0-.775-1.028 10.5 10.5 0 0 1-3.302-1.37.99.99 0 0 0-1.273.18l-.796.89-2.317-2.317.891-.795a.99.99 0 0 0 .18-1.272 10.5 10.5 0 0 1-1.367-3.303 1 1 0 0 0-1.026-.774l-1.195.068v-3.278l1.199.068c.44.02.918-.298 1.026-.773.265-1.17.726-2.278 1.369-3.296a.995.995 0 0 0-.179-1.273l-.898-.802 2.317-2.318.802.897a.994.994 0 0 0 1.272.18 10.5 10.5 0 0 1 3.297-1.365.995.995 0 0 0 .774-1.027l-.069-1.202H54.1l-.068 1.204c-.029.485.3.919.773 1.026 1.17.265 2.278.725 3.294 1.366a1 1 0 0 0 1.273-.179l.804-.9 2.317 2.318-.896.799a.995.995 0 0 0-.178 1.273 10.5 10.5 0 0 1 1.368 3.3c.107.474.568.792 1.026.772l1.198-.068zm1.678-5.054a1 1 0 0 0-.74-.27l-1.436.082a12.5 12.5 0 0 0-.982-2.37l1.074-.959a.997.997 0 0 0 .04-1.445l-3.806-3.807a.95.95 0 0 0-.732-.29 1 1 0 0 0-.714.33l-.962 1.08a12.4 12.4 0 0 0-2.366-.981l.082-1.443a.993.993 0 0 0-.993-1.05H49.77a.993.993 0 0 0-.992 1.05l.081 1.44q-1.234.369-2.368.981l-.96-1.076a1 1 0 0 0-.715-.332.97.97 0 0 0-.731.29l-3.807 3.808a.99.99 0 0 0 .04 1.445l1.077.962a12.5 12.5 0 0 0-.983 2.367l-1.438-.082a.995.995 0 0 0-1.05.994v5.383a.996.996 0 0 0 1.05.993l1.433-.082q.369 1.237.982 2.374l-1.07.954a1 1 0 0 0-.041 1.446l3.807 3.807a.995.995 0 0 0 1.445-.04l.955-1.071q1.137.616 2.374.984l-.081 1.43A.993.993 0 0 0 49.769 67h5.384a.994.994 0 0 0 .993-1.051l-.082-1.429c.825-.245 1.62-.574 2.375-.984l.953 1.068c.182.205.44.324.714.332a.96.96 0 0 0 .732-.291l3.807-3.807a.995.995 0 0 0-.04-1.445l-1.073-.957c.409-.756.738-1.55.982-2.372l1.435.082A.993.993 0 0 0 67 55.153V49.77a1 1 0 0 0-.312-.723m-51.699 5.728h19.893v1.99H13.995a.994.994 0 0 1-.995-.995V13.995c0-.55.445-.995.995-.995h45.752c.55 0 .995.446.995.995v21.881h-1.99V14.99H14.99zm32.823-27.85h-.995v-1.989h5.968v1.99h-4.973m.994-3.978h1.99v-3.978h-1.99zm3.979 12.93v-6.962h.994c.55 0 .995-.446.995-.995v-3.978a.994.994 0 0 0-.995-.995h-.994v-4.973a.994.994 0 0 0-.995-.995h-3.978a.994.994 0 0 0-.995.995v4.973h-.994a.994.994 0 0 0-.995.995v3.978c0 .55.444.995.995.995h.994v6.962h1.99v-6.962h1.989v6.962zm-18.898 1.99h-.995v-1.99h5.968v1.99h-4.973m.995-3.979h1.989v-14.92h-1.99zm3.978 7.957v-1.99h.995c.55 0 .994-.445.994-.994v-3.978a.994.994 0 0 0-.994-.995h-.995V17.973a.994.994 0 0 0-.994-.995h-3.979a.994.994 0 0 0-.995.995v15.914h-.994a.994.994 0 0 0-.995.995v3.978c0 .55.445.995.995.995h.994v10.94h1.99v-10.94h1.989v1.989zM18.968 27.919h5.967v1.99h-5.967zm1.989-1.989h1.99v-6.962h-1.99zm0 22.876h1.99V31.898h-1.99zm-.995 1.99h3.979c.55 0 .994-.446.994-.995V31.898h.995c.55 0 .995-.446.995-.995v-3.978a.994.994 0 0 0-.995-.995h-.995v-7.957a.994.994 0 0 0-.994-.995h-3.979a.994.994 0 0 0-.994.995v7.957h-.995a.994.994 0 0 0-.995.995v3.978c0 .55.445.995.995.995h.995V49.8c0 .549.444.995.994.995"
      />
    </g>
  </svg>
);
const Memo = memo(Config);
export default Memo;
