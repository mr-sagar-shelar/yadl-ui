import type { SVGProps } from "react";
import { memo } from "react";
const SystemsManager = (props: SVGProps<SVGSVGElement>) => (
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
        d="M47 54.998h13v2H47v2h-2v-2h-4v-2h4v-1h2zm4-6h9v2h-9v2h-2v-2h-8v-2h8v-1.001h2zm5-6.002h4v2h-4v2h-2v-2H41v-2h13v-1h2zm-35 4h9v2.001h-9c-1.255 0-2.596-.377-3.587-1.008-2.02-1.28-5.413-4.274-5.413-9.947 0-6.881 4.665-9.407 7.38-10.292l-.054-.916c-.002-5.668 3.748-11.48 8.72-13.577 5.823-2.476 11.99-1.25 16.499 3.28 1.399 1.402 2.551 3.11 3.433 5.094a6.74 6.74 0 0 1 6.422-1.245c2.847.934 4.619 3.565 4.827 7.108 2.838.68 8.773 3.014 8.773 10.638 0 .285-.011.56-.022.823l-1.999-.053c.01-.267.021-.513.021-.77 0-6.734-5.557-8.426-7.946-8.84a1 1 0 0 1-.808-1.194c-.029-2.981-1.29-5.097-3.47-5.812-1.953-.643-4.099.066-5.342 1.758a1 1 0 0 1-.952.396 1 1 0 0 1-.796-.654c-.833-2.343-2.03-4.306-3.557-5.835-3.913-3.932-9.262-4.996-14.303-2.852-4.208 1.774-7.502 6.903-7.502 11.676l.099 1.654a1 1 0 0 1-.752 1.027C18.18 30.09 14 32.05 14 38.042c0 4.48 2.438 6.963 4.485 8.258.675.43 1.638.697 2.515.697m45 5.322-1.764-.101a1.01 1.01 0 0 0-1.032.779 13.4 13.4 0 0 1-1.748 4.22 1 1 0 0 0 .181 1.282l1.317 1.174-3.281 3.282-1.171-1.313a1 1 0 0 0-1.28-.18 13.4 13.4 0 0 1-4.225 1.75 1 1 0 0 0-.777 1.033l.1 1.756h-4.64l.1-1.758a1 1 0 0 0-.777-1.033 13.4 13.4 0 0 1-4.223-1.751.996.996 0 0 0-1.28.18l-1.174 1.315-3.28-3.281 1.315-1.172a1 1 0 0 0 .18-1.28 13.4 13.4 0 0 1-1.747-4.224c-.107-.478-.585-.804-1.032-.78L34 52.319v-4.641l1.768.101A1.02 1.02 0 0 0 36.8 47a13.4 13.4 0 0 1 1.75-4.215 1 1 0 0 0-.18-1.281l-1.324-1.181 3.281-3.282 1.181 1.324a1 1 0 0 0 1.279.179c1.3-.82 2.718-1.407 4.216-1.745a1 1 0 0 0 .777-1.033l-.1-1.771h4.64l-.1 1.773a1 1 0 0 0 .777 1.032c1.495.34 2.912.926 4.214 1.747a1 1 0 0 0 1.279-.18l1.183-1.326 3.281 3.282-1.321 1.178a1 1 0 0 0-.18 1.281A13.4 13.4 0 0 1 63.202 47c.108.476.561.804 1.032.778L66 47.677zm.943-6.698-2.001.114a15.4 15.4 0 0 0-1.363-3.289l1.497-1.335a1 1 0 0 0 .041-1.453l-4.778-4.779a.99.99 0 0 0-.735-.292 1 1 0 0 0-.718.333l-1.34 1.502a15.4 15.4 0 0 0-3.283-1.36l.114-2.01a1 1 0 0 0-.272-.743 1 1 0 0 0-.726-.313h-6.758a1 1 0 0 0-.726.313c-.19.2-.288.469-.272.744l.114 2.006a15.4 15.4 0 0 0-3.285 1.36l-1.338-1.499a1 1 0 0 0-.718-.333.96.96 0 0 0-.735.292l-4.778 4.779a1 1 0 0 0 .041 1.453l1.5 1.338a15.4 15.4 0 0 0-1.364 3.286l-2.003-.114a1 1 0 0 0-1.057.998v6.759a1 1 0 0 0 1.057.998l1.996-.114c.325 1.148.781 2.25 1.362 3.293l-1.491 1.33a1 1 0 0 0-.041 1.454l4.778 4.779a.999.999 0 0 0 1.453-.041l1.33-1.493a15.4 15.4 0 0 0 3.292 1.368l-.113 1.992A1 1 0 0 0 46.621 68h6.758a1 1 0 0 0 .998-1.057l-.113-1.99a15.4 15.4 0 0 0 3.294-1.367l1.328 1.49a1 1 0 0 0 1.453.04l4.778-4.778a1 1 0 0 0-.042-1.454l-1.493-1.332a15.4 15.4 0 0 0 1.363-3.291l1.998.114A1 1 0 0 0 68 53.377v-6.76a1 1 0 0 0-1.057-.997"
      />
    </g>
  </svg>
);
const Memo = memo(SystemsManager);
export default Memo;
