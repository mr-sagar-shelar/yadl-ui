import type { SVGProps } from "react";
import { memo } from "react";
const CloudDevelopmentKit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    <defs>
      <linearGradient id="prefix__a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#2E27AD" />
        <stop offset="100%" stopColor="#527FFF" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M68 39.306c0 6.929-4.734 9.47-7.555 10.369l-.6-1.907c2.815-.895 6.17-3.09 6.17-8.462 0-6.792-5.559-8.487-7.948-8.901a1 1 0 0 1-.814-1.135c-.236-3.094-1.675-5.32-3.862-5.963-1.817-.534-3.768.174-4.965 1.807a1 1 0 0 1-.945.395.99.99 0 0 1-.79-.656c-.824-2.35-2.02-4.326-3.55-5.874-1.88-1.9-7.038-5.985-14.328-2.877-4.21 1.795-7.507 6.968-7.507 11.775 0 .534.031 1.073.095 1.602a1 1 0 0 1-.74 1.087c-2.494.64-6.676 2.616-6.676 8.656q0 .292.015.576c.187 3.888 3.028 7.229 6.91 8.125l-.444 1.949c-4.745-1.097-8.22-5.198-8.45-9.974a13 13 0 0 1-.016-.676c0-6.908 4.637-9.455 7.352-10.353q-.031-.497-.032-.992c0-5.643 3.749-11.496 8.72-13.617 5.824-2.485 11.996-1.249 16.506 3.307 1.402 1.418 2.552 3.137 3.428 5.128 1.669-1.413 3.875-1.925 5.974-1.307 2.878.847 4.805 3.518 5.235 7.206C61.999 29.257 68 31.581 68 39.306M56.899 61.314 49.963 65.2v-8.646l6.936-3.942zm-17.891-.025-6.92 3.988V56.52l6.92-3.93zm-7.916-6.499-6.923-3.885 6.935-3.884 6.868 3.861zm-7.97-2.184 6.98 3.918v8.758l-6.98-3.995zm16.907-20.553 6.882 3.845-6.91 3.865-6.856-3.845zm2.003 18.831 6.923-3.88 6.91 3.9-6.894 3.918zm-1.039 1.705 6.985 3.965V65.2l-6.985-3.92zm6.971-7.317-6.97 3.906v-7.683l6.97-3.898zm-15.867-7.653 6.91 3.875v7.68l-6.91-3.885zm26.295 12.418-.016-.007v-.002l-8.427-4.754v-9.376a1 1 0 0 0-.489-.861l-.023-.01.002-.003-8.928-4.988a.99.99 0 0 0-.965.001l-8.924 5.009.001.002q-.011.005-.022.009c-.302.18-.489.508-.489.861v9.369l-8.466 4.744.002.002-.023.01c-.302.179-.489.508-.489.861V61.87c0 .36.192.691.502.868l8.959 5.128.007.005v-.001a.99.99 0 0 0 .984-.001l8.42-4.852 8.48 4.758.001-.003c.15.084.315.129.482.129a1 1 0 0 0 .482-.126l8.922-4.999c.314-.177.509-.51.509-.873V50.9a1 1 0 0 0-.492-.863"
      />
    </g>
  </svg>
);
const Memo = memo(CloudDevelopmentKit);
export default Memo;
