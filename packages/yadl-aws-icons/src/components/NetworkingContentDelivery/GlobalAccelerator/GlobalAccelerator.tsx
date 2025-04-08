import type { SVGProps } from "react";
import { memo } from "react";
const GlobalAccelerator = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
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
        d="M52.473 60.743c0-1.103-.897-2-2-2s-2 .897-2 2 .897 2 2 2 2-.897 2-2m-12 0c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2M35.814 49.96c-1.058-1.356-1.946-3.156-2.613-5.277-1.347.339-2.589.768-3.683 1.284a15.37 15.37 0 0 0 6.296 3.993m15.896-3.991c-1.093-.517-2.335-.946-3.681-1.285-.667 2.12-1.557 3.92-2.614 5.276a15.4 15.4 0 0 0 6.295-3.991m-16.569-1.7c1.064 3.3 2.672 5.506 4.332 6.216v-6.653c-1.497.05-2.952.198-4.332.438m10.947.002a31.5 31.5 0 0 0-4.615-.446v6.758c1.759-.57 3.49-2.825 4.615-6.312M34.62 42.336a33.5 33.5 0 0 1 4.853-.504v-1.675L38.18 41.45l-1.414-1.414 3.707-3.707 3.707 3.707-1.414 1.414-1.293-1.293v1.668c1.773.043 3.502.216 5.136.512.447-1.94.718-4.155.743-6.594H33.877c.025 2.439.296 4.654.743 6.593m-9.34-6.593a15.25 15.25 0 0 0 2.925 8.646c1.31-.666 2.821-1.214 4.473-1.632-.492-2.127-.776-4.494-.801-7.014zm3.149-9.657a15.26 15.26 0 0 0-3.076 7.657h6.556c.099-2.193.402-4.248.862-6.113-1.596-.398-3.06-.916-4.342-1.544m7.385-5.272a15.4 15.4 0 0 0-6.038 3.71c1.059.477 2.258.869 3.54 1.185.653-1.958 1.504-3.62 2.498-4.895m4.801-.78c-1.971 0-4.021 2.269-5.337 6.085 1.689.286 3.489.442 5.337.442s3.647-.156 5.337-.442c-1.317-3.816-3.367-6.084-5.337-6.084m10.838 4.49a15.4 15.4 0 0 0-6.038-3.71c.995 1.276 1.845 2.937 2.498 4.895 1.283-.316 2.481-.708 3.54-1.184m-4.935 3.52a34 34 0 0 1-5.903.517c-2.041 0-4.032-.184-5.904-.516a29.4 29.4 0 0 0-.803 5.698h13.414c-.098-2.098-.385-4.007-.804-5.698m9.358 5.699a15.25 15.25 0 0 0-3.076-7.657c-1.282.628-2.746 1.146-4.342 1.544.46 1.865.763 3.92.863 6.113zm-6.524 2c-.025 2.52-.309 4.887-.801 7.015 1.652.418 3.163.966 4.472 1.632a15.26 15.26 0 0 0 2.927-8.647zm-18.879 23c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2m24 2c0 2.206-1.794 4-4 4s-4-1.794-4-4c0-1.858 1.279-3.411 3-3.858v-1.142h-8v3.142c1.721.447 3 2 3 3.858 0 2.206-1.794 4-4 4s-4-1.794-4-4c0-1.858 1.279-3.411 3-3.858v-3.142h-8v1.142c1.721.447 3 2 3 3.858 0 2.206-1.794 4-4 4s-4-1.794-4-4c0-1.858 1.279-3.411 3-3.858v-3.142h10V52.68c-9.036-.592-16.211-8.111-16.211-17.294 0-9.568 7.784-17.352 17.353-17.352 9.568 0 17.352 7.784 17.352 17.352 0 9.278-7.326 16.857-16.494 17.309v1.047h10v3.142c1.721.447 3 2 3 3.858m8.473-25.281a22.32 22.32 0 0 1-6.582 15.89l-1.414-1.414a20.33 20.33 0 0 0 5.996-14.476 20.34 20.34 0 0 0-5.996-14.476c-7.983-7.982-20.971-7.982-28.954 0A20.34 20.34 0 0 0 20 35.462c0 5.469 2.129 10.61 5.996 14.476l-1.414 1.414A22.32 22.32 0 0 1 18 35.462a22.32 22.32 0 0 1 6.582-15.89c8.764-8.763 23.02-8.762 31.782 0a22.32 22.32 0 0 1 6.582 15.89"
      />
    </g>
  </svg>
);
const Memo = memo(GlobalAccelerator);
export default Memo;
