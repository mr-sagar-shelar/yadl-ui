import type { SVGProps } from "react";
import { memo } from "react";
const Lex = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    {...props}
  >
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
        d="M47.217 46.074c0 .36.142.699.398.953.514.51 1.41.51 1.923 0a1.33 1.33 0 0 0 .399-.953 1.357 1.357 0 0 0-1.361-1.348c-.363 0-.704.14-.961.395a1.34 1.34 0 0 0-.398.953m-1.016 2.354a3.3 3.3 0 0 1-.984-2.354c0-.89.35-1.726.984-2.355 1.268-1.258 3.482-1.258 4.751 0 .635.63.985 1.466.985 2.355 0 .89-.35 1.726-.985 2.355a3.35 3.35 0 0 1-2.376.974 3.35 3.35 0 0 1-2.375-.975m-3.904-2.658.407 2.554 1.819-.074c.286-.01.55.095.749.29l.813.809a.98.98 0 0 1 .291.74l-.073 1.805 2.576.405.486-1.721a1 1 0 0 1 .517-.618l1.06-.525c.247-.123.535-.138.794-.042l1.681.617 1.185-2.303-1.505-.994a1 1 0 0 1-.433-.666l-.187-1.14a.99.99 0 0 1 .202-.774l1.128-1.414-1.845-1.828-1.424 1.117c-.221.173-.5.245-.783.201l-1.147-.186a1 1 0 0 1-.67-.43l-1.005-1.492-2.324 1.173.623 1.664a.99.99 0 0 1-.043.789l-.531 1.049c-.127.25-.352.435-.624.511zm-1.429 3.736-.685-4.297a.99.99 0 0 1 .717-1.11l2.168-.603.137-.272-.781-2.088a.987.987 0 0 1 .483-1.228l3.911-1.974a1.005 1.005 0 0 1 1.286.333l1.257 1.869.282.046 1.775-1.393c.399-.313.968-.28 1.328.076l3.104 3.076c.358.355.391.92.078 1.315l-1.406 1.763.047.284 1.883 1.243a.986.986 0 0 1 .336 1.276l-1.994 3.874c-.23.45-.763.653-1.238.479l-2.11-.774-.274.136-.607 2.146a1 1 0 0 1-1.119.712l-4.334-.68a.995.995 0 0 1-.843-1.02l.092-2.254-.195-.193-2.269.093c-.455.017-.95-.338-1.029-.835M65 35.816l-33-.01v20.806l16 .01c.515 0 .965.18 1.379.554L56 63.454v-4.85c0-1.186.804-1.983 2-1.983h6.991zm2-.01v20.815c0 1.168-.822 1.983-2 1.983h-6.991L58 64.426A1.575 1.575 0 0 1 56.423 66c-.384 0-.763-.14-1.059-.406l-7.349-6.968L32 58.604c-1.196 0-2-.797-2-1.983V35.806c0-1.463.524-1.982 2-1.982h33c1.179.004 2 .819 2 1.982M36 30.85h4v-1.982h-4zm-17 0h15v-1.982H19zm13-4.956h11v-1.982H32zm-13 0h9v-1.982h-9zm20-4.956h4v-1.982h-4zm-20 0h18v-1.982H19zm8.276 16.168 1.449 1.367-6.022 6.267c-.367.326-.794.489-1.207.489q-.326 0-.626-.132a1.47 1.47 0 0 1-.87-1.361v-5.94l-4-.007c-1.178 0-2-.815-2-1.983V15.982c0-1.167.822-1.982 2-1.982h30c1.215 0 2 .778 2 1.982V30.85h-2V15.982H16.008L16 35.798l4 .008c1.178 0 2 .815 2 1.983v4.813z"
      />
    </g>
  </svg>
);
const Memo = memo(Lex);
export default Memo;
