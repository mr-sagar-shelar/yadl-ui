import type { SVGProps } from "react";
import { memo } from "react";
const Dog = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="prefix__injected-svg"
    viewBox="0 0 888 483.611"
    {...props}
  >
    <path fill="#3f3d56" d="M1 421.535h887v-2H1a1 1 0 1 0 0 2" />
    <path
      fill="#3f3d56"
      d="M406 438.535c5 24 33.5-5.5 33.5-5.5l34-4s21.5.5 35.5 11.5 23.5-3.5 23.5-3.5c15.773 5.257 35.097 5.236 51.833 3.552 24.116-2.426 43.446-21.04 46.76-45.05C649.79 260.095 547 193.535 547 193.535l-30-81s9.5-23.5 12.5-44.5-19-41-46-61c-11.813-8.75-25.348-8.121-36.837-4.645-12.89 3.9-24.132 11.918-32.44 22.516-6.882 8.78-18.687 21.215-31.663 23.369-4.49.74-8.92 2.52-13.06 5.76-4.28 3.35-6.17 8.94-6.23 15.89-.32 30.36 24.75 66.91 46.73 72.61 27 7 12.5 73.5 12.5 73.5-44 62-13 131-13 131l-8 56s-.5 11.5 4.5 35.5"
    />
    <path
      fill="#3f3d56"
      d="m553 309.535-11 137s15 38-36 36-21-80-21-80l16-102"
    />
    <path
      fill="#2f2e41"
      d="M509.795 483.611q-1.87 0-3.834-.077c-11.29-.443-19.604-4.6-24.711-12.359-14.603-22.181 1.639-65.906 2.778-68.899l15.984-101.896a1 1 0 0 1 1.143-.833c.545.085.918.597.833 1.143l-16 102q-.017.105-.054.204c-.175.452-17.252 45.556-3.012 67.184 4.732 7.186 12.51 11.042 23.117 11.458 16.652.65 27.853-2.904 33.298-10.569 7.124-10.028 1.787-23.926 1.732-24.066a1 1 0 0 1-.066-.446l11-137c.044-.55.517-.951 1.077-.917a1 1 0 0 1 .917 1.077L543.015 446.39c.726 1.961 5.282 15.405-2.04 25.724-5.416 7.636-15.898 11.497-31.18 11.497"
    />
    <path fill="#3f3d56" d="M462 337.535s3 127-60 124-6-43-6-43l5.5-15.5" />
    <path
      fill="#2f2e41"
      d="M404.162 462.587q-1.096 0-2.21-.053c-17.988-.857-28.152-4.887-30.208-11.979-3.704-12.779 20.44-30.521 23.42-32.653l5.394-15.201a.999.999 0 1 1 1.884.668l-5.5 15.5a1 1 0 0 1-.368.484c-.263.186-26.377 18.685-22.908 30.646 1.792 6.18 11.34 9.725 28.382 10.537 11.348.546 21.297-3.27 29.55-11.33C462.552 418.992 461.02 338.37 461 337.559a1 1 0 0 1 .977-1.023c.522 0 1.01.425 1.023.976.08 3.346 1.572 82.298-30.003 113.125-8.128 7.936-17.82 11.95-28.835 11.95M363.27 69.925c7.18.86 18.42.82 27.73-5.39 9.97-6.65-.38-12.85-8.44-16.26-4.49.74-8.92 2.52-13.06 5.76-4.28 3.35-6.17 8.94-6.23 15.89M479.298 51.944S461.848 7.127 486.841 6.5s44.732 38.21 44.732 38.21 62.728 114.343-23.213 108.177-44.874-51.811-44.874-51.811 19.602-24.1 15.812-49.132"
    />
    <path
      fill="#3f3d56"
      d="M575.039 386.85c11.067 4.924 22.631 9.949 34.735 9.468s24.842-8.276 26.728-20.241c.974-6.177-.957-12.804 1.408-18.593 3.182-7.789 13.446-10.792 21.425-8.123s13.841 9.552 18.044 16.84c7.863 13.637 11.014 31.535 2.583 44.828-7.309 11.524-21.17 16.731-34.065 21.198-17.175 5.949-36.351 11.854-52.994 4.546-16.738-7.35-25.856-28.585-19.658-45.782"
    />
    <path
      fill="var(--color-primary)"
      d="M538.114 170.921s22 11 11 23-79 46-104 41-31-20-31-24S416 158.535 424 160.535s58.114 47.386 114.114 10.386"
    />
  </svg>
);
const Memo = memo(Dog);
export default Memo;
