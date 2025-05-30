import type { SVGProps } from "react";
import { memo } from "react";
const GkeOnprem = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      d="M19.73 6.56a1.73 1.73 0 0 0-1.68 1.68 1.83 1.83 0 0 0 .89 1.48v6.9l-5.16 3.06.8 1.28 5.55-3.25a.84.84 0 0 0 .4-.69v-7.3a1.64 1.64 0 0 0 .89-1.48 1.61 1.61 0 0 0-1.69-1.68"
      style={{
        fill: "#aecbfa",
      }}
    />
    <path
      d="m18 5.48-5.61-3.16a1.18 1.18 0 0 0-.79 0L5.25 6a1.72 1.72 0 0 0-2.68 1.35A1.73 1.73 0 0 0 4.26 9a1.73 1.73 0 0 0 1.68-1.65L12 3.9l5.15 3ZM11.2 18.5a1.57 1.57 0 0 0-.89.29l-5.16-3V9.92H3.56v6.31a.84.84 0 0 0 .4.69L9.52 20v.09a1.69 1.69 0 0 0 3.37 0 1.65 1.65 0 0 0-1.69-1.59"
      data-name="Path"
      style={{
        fill: "#aecbfa",
      }}
    />
    <path
      d="M16.96 8.63 12.1 5.78 7.13 8.63l4.97 2.77z"
      data-name="Path"
      style={{
        fill: "#669df6",
      }}
    />
    <path
      d="M12.1 12.38 6.84 9.32v2.47l5.26 2.96zM12.1 15.73l-5.26-3.05v2.07l5.26 3.06z"
      style={{
        fill: "#669df6",
      }}
    />
    <path
      d="M12.09 12.38v2.37l5.26-3.06V9.33Zm4.32-.94a.38.38 0 1 1 0-.76.38.38 0 0 1 0 .76M12.09 15.73v2.07l5.26-3.05v-2.07Zm4.32-1.07a.38.38 0 1 1 0-.76.38.38 0 0 1 0 .76"
      style={{
        fill: "#4285f4",
      }}
    />
  </svg>
);
const Memo = memo(GkeOnprem);
export default Memo;
