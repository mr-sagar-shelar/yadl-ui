import type { SVGProps } from "react";
import { memo } from "react";
const Flask = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path
      fill="#000"
      d="M89.778 193.926c-7.238-5.693-14.96-11.151-20.235-18.837-11.102-13.554-19.65-29.247-25.494-45.737-3.532-10.724-4.741-22.22-9.295-32.53-4.763-7.487.817-15.671 9.018-18.051 3.651-.701 10.072-4.145 2.322-1.684-6.948 5.098-7.62-4.627-.496-5.243 4.862-.646 6.652-4.627 4.99-8.21-5.22-3.404 12.656-7.145 3.662-12.223-9.37-10.11 13.106-12.055 7.56-.575-1.327 8.829 15.706-1.618 11.754 8.577 4.017 4.896 15.042 1.114 14.768 7.983 5.852.402 7.86 5.325 13.353 5.703 5.693 2.571 16.013 4.597 17.95 11.012-5.648 4.472-18.726-9.236-19.355 3.141 1.706 18.285 1.272 37.121 7.962 54.533 3.164 10.543 10.835 18.843 17.762 27.054 6.629 8.042 15.607 13.704 24.758 18.471 8.028 3.786 16.682 6.297 25.431 7.872 3.548-2.714 9.813-12.804 15.349-8.549.262 4.781-10.987 9.994-.53 9.465 6.141-1.852 10.4 4.75 15.457-1.205 4.659 5.518 19.364-3.526 16.049 7.754-4.482 2.892-11.02 1.144-15.509 5.122-7.403-3.697-13.296 3.309-21.491 2.423-9.101 1.63-18.36 2.288-27.587 2.302-15.137-1.196-30.595-1.7-44.995-6.97-8.112-2.357-16.029-6.977-23.158-11.598m12.784 5.539c7.921 3.426 15.667 7.036 24.348 8.125 13.773 1.916 27.996 4.862 41.818 2.175-6.256-2.825-12.723 1.1-18.956-2.02-7.474 1.608-15.496-.41-23.094-1.404-8.642-3.849-17.967-6.495-26.059-11.492-10.112-3.693 5.229 4.737 7.96 5.419 6.321 3.588-6.951-1.839-8.822-3.33-5.294-2.97-5.969-2.349-.524.667 1.096.641 2.18 1.314 3.329 1.86m-15.073-10.652c7.676 2.844-.034-5.397-3.551-4.919-1.559-2.703-5.954-4.411-2.853-5.864-5.578 1.937-5.843-7.363-8.465-6.034-5.9-1.863-2.296-8.464-9.325-12.517-.642-4.271-6.983-7.975-9.006-14.417-.893-3.298-7.164-12.77-3.312-3.955 3.28 8.486 9.051 15.753 13.854 23.011 3.73 6.911 8.133 14.134 14.925 18.446 2.29 2.196 4.5 5.561 7.733 6.249m-22.113-24.278c.268-1.159 1.404 2.509 0 0m31.306 27.687c1.7-.761-2.445-.959 0 0m4.167 1.52c-.432-2.099-1.903 1.173 0 0m5.215 2.175c2.483-2.364-3.827-1.49 0 0m8.94 4.983c1.509-2.231-4.83-.842 0 0m-17.166-11.967c3.856-2.495-4.982-.034 0 0m3.912 1.951c-.109-1.319-1.394.591 0 0m19.556 12.206c3.143 1.984 18.357 4.348 8.831.813-1.594.336-17.665-4.545-8.831-.813m-31.045-24.179c-.306-1.323-4.88-1.46 0 0m9.104 5.306c2.369-1.652-4.918-1.275 0 0m7.657 4.695c3.4-1.282-5.515-1.288 0 0m-20.466-14.035c3.69 2.829 14.877.362 5.65-1.689-4.2-2.239-13.666-3.771-7.214 1.35zm25.653 15.656c1.536-2.618-6.444-1.495 0 0m-7.795-6.195c9.02 2.552-7.585-5.704-2.226-.939l1.188.538zm15.628 9.033c8.543.082-7.716-1.178 0 0m-36.773-23.437c-.333-1.591-2.108.134 0 0m51.223 31.543c.228-2.874-2.787 2.138 0 0m-36.644-22.615c-.517-1.513-2.67-.062 0 0m-13.768-9.926c4.904-.295-6.715-2.161 0 0m-16.31-10.543c-.61-2.351-5.337-4.226 0 0m42.818 27.174c-.899-1.025-.423.224 0 0m26.651 16.355c-.085-1.566-1.451.592 0 0m-29.01-18.791c.48-2.017-4.182-.611 0 0m-19.855-12.583c3.649-.391-5.845-2.467 0 0m33.586 20.87c5.686-2.253-5.541-1.1 0 0m-17.47-11.859c6.553.845-7.797-4.457-1.438-.475zm22.774 14.003c6.118-3.658 4.101 8.564 10.38 1.032 6.193-4.522-5.349 5.591 2.284.807 5.52-3.692 13.673 1.75 18.824 3.525 3.704-.182 7.304 3.203 11.102 1.144 7.309-1.969-14.294-2.92-8.631-6.413-6.689 1.946-11.63-2.321-14.921-6.605-7.503-1.733-16.177-5.568-19.921-12.207-1.527-2.493 2.205.351-1.318-3.724-4.521-4.021-6.778-8.585-9.813-13.473-3.626-1.934-4.048-7.627-4.414-.191.028-4.693-4.378-7.852-5.453-6.539-.019-4.519 4.715-2.254 1.401-5.598-.713-4.684-3.062-9.566-3.768-14.855-1.097-2.549-.155-8.009-3.744-2.238-1.308 6.1-.434-7.495 1.599-3.012 2.67-4.575-.958-4.037-1.106-3.402 1.738-3.859 1.1-9.334-.454-7.246.926-4.091 1.464-15.055-1.387-13.112 1.728-4.278 3.277-19.575-4.224-13.743-3.04.043-8.303 1.104-10.792 2.341 7.802 4.3-.784 1.553-3.96.87-.414 3.98-3.56 2.258-7.49 2.297 6.277.777-3.056 6.42-6.657 4.228-4.677 2.235 4.036 7.814.093 9.539.485 2.601-7.164-.939-6.563 5.067-4.54-1.91-.625 7.124 1.646 4.069 7.722 2.09 5.436 6.854 5.633 11.38-1.259 2.638-6.212-6.199-1.104-5.789-4.03-6.547-4.458-2.367-7.807.675-.779.22 8.543 4.327 2.693 6.358 5.146.794 5.293 5.297 6.34 8.147 3.094 3.222 2.46-3.557 6.162.314-2.342-3.449-12.406-9.719-4.303-7.708-.043-3.472-1.466-6.271 1.017-6.203 2.458-4.452-2.575 10.977 2.966 5.319 1.534-.67 1.914-4.458 4.672.357 4.004 3.94 1.446 6.795-4.203 3.187 1.01 3.429 7.557 4.654 6.327 10.016 1.304 4.715 3.129 2.979 4.719 2.706 1.248 4.582 1.956 1.213 2.015-.968 5.713 1.223 4.375 4.6 6.162 6.959 3.936 1.777-5.634-12.044 1.124-4.156 7.11 6.42 2.666 9.1-3.714 8.071 4.038-.326 5.34 5.46 10.392 5.257 4.606 2.191 7.725 10.608-.215 7.104-2.754-2.483-12.5-5.546-4.54-.823 7.352 3.404 13.191 5.441 20.282 9.714 5.074 3.623 7.266 7.772 9.19 8.593-4.265 2.037-12.853-1.626-6.476-2.749-3.977-.724-8.451-2.736-4.641 2.22 3.239 2.705 11.477 2.418 12.954 2.724-1.252 2.759-3.4 2.978.051 3.192-3.85 2.052 1.234 2.369 1.591 3.542m-7.873-22.234c-2.343-2.45-2.948-7.039-.416-3.046 1.298.521 4.16 7.498.416 3.046m25.641 16.287c1.461-.095.042 1.11 0 0m-29.34-22.294c-.09-3.704.847 2.856 0 0m-2.548-3.429c-2.947-5.693 3.714 1.612 0 0m-30.883-21.315c1.731-.462.852 2.961 0 0m24.579 13.322c1.063-3.992 1.249 3.35 0 0m-17.364-12.073c-1.224-2.203 2.56 2.066 0 0m14.902 4.777c-2.792-6.255 1.976-3.417.617 1.025zm-25.699-17.139c-1.248-2.051-3.312-8.072-2.648-9.91.602 2.993 6.366 12.881 2.828 4.096-3.91-7.364 4.673 2.391 5.556 4.227.411 1.828-2.412-.499-.5 3.786-3.488-4.878-2.059 2.694-5.236-2.199m-7.942-5.472c.327-4.771 1.818 3.271 0 0m3.573 1.229c1.704-3.6 2.89 5.02 0 0m-8.594-6.648c-2.957-2.938-5.097-5.646.138-1.823 2.017.079-4.481-6.16.486-1.981 5.223.952 2.58 8.564-.624 3.804m4.514-.118c1.717-1.701.912 1.676 0 0m2.778.891c-2.604-4.88 3.16 2.046 0 0m-5.522-5.277c-8.596-7.65 10.801 4 1.404 1.418zm24.629 14.31c-3.72-2.23-.986-15.702.282-6.488 3.617-1.17-.2 4.758 2.498 4.703-.425 3.74-1.632 5.085-2.78 1.785m9.109 5.384c.365-4.06.768 2.776 0 0m-1.582-1.564c.41-1.734.042 2.043 0 0m-30.47-20.644c-5.522-7.619 16.05 7.707 3.537 1.933-1.307-.342-2.88-.464-3.537-1.933m17.542 9.301c-.522-6.415 1.167 1.063 0 0m13.319 8.544c1.03-3.655.077 2.417 0 0m-30.015-20.753c3.282-.702 13.602 5.765 4.125 1.847-1.053-1.165-3.298-.636-4.125-1.847m28.185 14.048c.35-6.56 1.959-3.919.012.939zm-25.742-16.33c1.338-1.962-3.55-8.87.705-2.478 1.838 1.461 5.322 2.447 2.246 3.062 4.838 4.268-1.18 1.156-2.95-.584m24.348 14.281c.924-7.473.815 4.378 0 0m-27.14-21.183c1.02-.437.539 1.361 0 0m6.35 3.78c1.635-3.43 3.015 3.825 0 0m17.914 9.965c-.017-1.317.338 1.916 0 0m-1.037-2.297c-2.487-6.134 2.313 3.248 0 0m-1.527-4.022c-.417-2.535 1.418 3.184 0 0m2.485-4.039c-1.707-3.007 2.154-13.25 2.585-6.897-1.8 4.95-.52 7.719.737 1.08 2.32-5.226-.501 10.311-3.322 5.817m2.553-15.234c.744-.913.165 1.1 0 0m-4.264 84.022c-1.011-.883.127.562 0 0m8.784 4.444c4.886 1.253 4.861-.761.445-1.359-2.375-2.21-9.87-4.553-3.162-.274.445 1.125 1.848 1.099 2.717 1.633m-17.348-11.523c2.692 2.007 10.14 5.689 3.835.764 2.125-2.47-4.069-3.784-2.014-5.436-5.227-3.198-4.123-2.914-.462-2.813-6.28-2.808.907-2.598.569-4.036-2.422-.479-12.03-4.271-6.378.311-5.746-2.929-1.37 1.092-3.106.667-5.875-1.603 5.233 4.474-.933 2.966 3.37 2.671 9.073 6.842 1.425 2.827-1.008 1.45 5.473 3.649 7.064 4.75m9.187 5.278c11.171 3.599-5.477-4.398 0 0m47.029 28.49c.144-2.216-1.526 1.891 0 0m4.834 2.035c2.577-2.498.105 3.978 4.271-.612.045-3.285-.129-5.226-4.787-1.235-1.284.712-1.857 3.74.516 1.847m-76.73-48.188c-.792-3.112-5.548-3.096 0 0m5.161 3.382c-1.916-3.178-6.839-2.877 0 0m29.364 17.709c2.867 2.546 13.168 1.868 3.483.313-1.435-2.121-9.109-1.61-3.483-.313m40.367 24.929c4.412-3.702-4.276 1.652 0 0m9.176 6.306c.028-1.188-1.901.521 0 0m.015-1.663c4.886-5.177-4.735.306 0 0m-96.778-61.292c-4.165-5.942-2.59-8.613-6.605-13.464-.76-3.71-6.89-12.13-3.17-3.21 3.406 5.216 4.419 13.293 9.775 16.674m95.245 59.646c8.989-5.81-3.69-2.531 0 0m6.862 2.689c4.502-3.866-2.847-.809 0 0m-90.942-58.274c1.288-1.917-3.328-.246 0 0m89.509 56.438c4.359-2.81-1.004-2.379-.79.259zM96.725 164.76c-.15-1.898-2.301.161 0 0m3.656 2.103c-1.162-2.349-1.786.369 0 0m62.491 37.08c5.584-4.028-3.385-.771-1.172.763zm-2.138-1.033c4.549-3.812-4.803 1.689 0 0m10.925 7.275c3.054-2.045-3.711-.662 0 0m-102.49-65.962c4.095.918 16.361 10.083 9.125.634-3.707-1.097-1.484-10.157-5.264-8.553 2.537 4.239 2.087 6.043-3.24 3.371-6.696-3.269-3.763 1.619-2.455 2.967-1.783.405 2.36 1.547 1.835 1.581m-18.651-14.73c.733-3.031-6.749-16.677-3.533-6.837 1.16 2.061 1.043 5.967 3.533 6.837m34.234 21.106c-2.108-1.763-.1-.249 0 0m5.192 1.209c-.003-3.212-5.739-1.304 0 0m44.987 28.36c-.858-2.194-3.392-.051 0 0m2.16 1.578c-.319-1.228-1.246.237 0 0m17.831 11.231c1.715-1.267-2.14-.161 0 0m-95.087-61.105c4.905-1.9-5.256-1.355 0 0m71.135 44.816c-.054-3.176-3.127.787 0 0m-73.073-49.333c3.15-1.064-2.915-.701 0 0m9.145 4.431c-.057-1.044-.967.395 0 0m111.551 68.404c4.052-.821 13.285 2.062 14.778-1.074-4.921-.12-17.024-3.472-17.597.8l1.078.169zM69.949 132.518c.07-3.218-2.51-.12 0 0m-24.046-16.68c-1.093-6.132-4.154-.928 0 0m5.734 1.441c.07-1.969-5.249-1.772 0 0m3.277 1.609c-.948-.767-.742.97 0 0m20.619 13.227c.97-.891-2.299-.66 0 0M52.73 115.259c-.554-4.631-6.641-.694 0 0m-11.756-7.628c-.167-2.138-1.146.806 0 0m1.749-1.321c-.286-2.534-1.502.322 0 0m9.662 5.767c4.085-1.605-7.442-3.319-.835-.303zm129.308 79.872c2.615-2.397-3.323-.741 0 0m15.622 8.098c1.048-3.1-2.639.408 0 0M53.373 107.013c.43-2.998-3.24.595 0 0m-13.746-9.21c-.739-4.233-.638-11.664 6.425-9.153-9.428 1.872 6.526 11.719 4.511 3.945 3.965.194 7.756-2.343 5.675 1.507 7.811-.863 13.227-7.636 20.772-6.687 5.877-.778 12.303-1.368 18.636-3.733 5.207-.376 10.22-5.982 7.366-9.305-7.101-.6-14.535.288-22.384 1.848-8.697 1.808-16.597 5.243-25.373 6.718-8.554 1.149 1.72 3.165-.73 3.615-4.463 1.548 5.323 2.593-.578 4.225-3.645-.693-7.439-1.945-5.882-5.786-8.194 1.063-15.393 4.464-8.92 12.802zM59.37 87.748c1.921-7.078 10.293 5.823 3.15.94-.854-.639-2.257-1.16-3.15-.94m.374-3.432c2.773-2.065 1.474 1.158 0 0m3.52.056c.251-3.256 8.06 1.724 1.288 1.173zm4.817-1.936c1.759-2.055.505 1.828 0 0m1.232-.825c2.928-3.519 16.584-2.246 6.589-.343-2.68-2.017-4.733 1.189-6.59.343m17.821-2.747c-.445-9.612 8.854 3.415 0 0m5.057-.028c1.849-4.844 7.174-1.944.855-.973.138.515-.185 2.5-.855.973m-40.812 25.691c5.524-3.383-5.864-2.935 0 0m4.084 1.134c1.937-2.059-4.208-.835 0 0m-12.034-8.54c3.156-2.425-3.735-.922 0 0m163.107 102.04c.092-2.813-2.412 1.267 0 0m-16.573-11.311c.471-3.238-2.13.283 0 0m21.131 12.401c4.413.015 13.371-1.37 3.769-1.366-1.507.235-8.779.185-3.769 1.366M59.056 103.676c3.571-.245 5.588-3.94-.69-3.727-9.731-1.007 8.584 3.332-1.25 2.091-1.32.875 1.863 1.878 1.94 1.636m3.145 1.592c-.373-2.293-1.104 1.219 0 0m3.731-9.949c1.55-1.922-2.144-.514 0 0M54.055 75.465c6.374-2.168 15.09-4.605 18.1 1.068-3.063-3.687-1.236-7.316 1.656-1.926 4.091 5.454 6.139-2.48 3.478-4.31 3.032 3.768 6.48 5.548 2.03.239 4.837-5.818-9.683.761-12.983.695-1.588.713-16.394 3.776-12.281 4.234m3.735-7.154c3.635-2.744 12.573 1.632 6.838-2.727-.561-.495-12.56 3.305-6.838 2.727m13.253.547c4.254.109-1.835-5.715 3.234-3.076-.832-2.72-5.902-3.23-8.38-4.316-1.403 2.486 2.853 7.425 5.146 7.392m-10.929-12.03c1.472-1.995-2.58 1.011 0 0m5.417 1.296c6.856-.909-1.748-2.952-1.382-.073zm-10.114-7.913c-4.828-6.302 9.078 1.059 4.174-5.54-4.128-3.286-8.095 3.7-4.174 5.54m61.952 33.369c2.214-3.925-9.141-5.29-1.492-1.391.705.235.545 1.662 1.492 1.39"
    />
  </svg>
);
const Memo = memo(Flask);
export default Memo;
