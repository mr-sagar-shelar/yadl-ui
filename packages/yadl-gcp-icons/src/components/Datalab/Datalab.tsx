import type { SVGProps } from "react";
import { memo } from "react";
const Datalab = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      fill="#4285F4"
      fillRule="evenodd"
      d="M14.711 8.845c.06 0 .112.042.13.1l.007.047v.809c0 .065-.039.12-.094.14l-.043.007h-.549v1.45q0 .063.02.122l.025.058 3.703 6.82c.103.192.118.421.044.623l-.044.099-1.343 2.52a.68.68 0 0 1-.482.352l-.102.008H8.017a.66.66 0 0 1-.526-.27l-.058-.09-1.343-2.52a.77.77 0 0 1-.044-.623l.044-.099 3.693-6.82a.5.5 0 0 0 .047-.118l.008-.063V9.948h-.55a.14.14 0 0 1-.13-.1L9.153 9.8v-.809c0-.065.039-.12.093-.14l.044-.007zm-1.579 1.103h-2.265v1.674a.8.8 0 0 1-.05.276l-.04.085-3.54 6.608a.38.38 0 0 0-.029.291l.03.07.915 1.698a.34.34 0 0 0 .22.172l.071.008h1.128l-.997-1.85a.38.38 0 0 1-.029-.292l.03-.07.868-1.611 6.469-.001-.514-.959h-2.394l-.389-.722 2.396-.001-.72-1.345h-2.417l-.39-.722 2.419-.001-.681-1.273a.8.8 0 0 1-.085-.267l-.006-.094zm3.215 7.867h-2.39l.388.736 2.396-.001zM10.631 5.773c.372 0 .673.323.673.721 0 .399-.301.722-.673.722s-.674-.323-.674-.722.302-.721.674-.721m2.54-1.548c.559 0 1.01.484 1.01 1.082s-.451 1.082-1.01 1.082c-.557 0-1.01-.484-1.01-1.082s.453-1.082 1.01-1.082M11.642 2c.372 0 .673.323.673.722s-.301.721-.673.721-.674-.323-.674-.721c0-.399.302-.722.674-.722"
    />
  </svg>
);
const Memo = memo(Datalab);
export default Memo;
