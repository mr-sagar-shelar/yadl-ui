import type { SVGProps } from "react";
import { memo } from "react";
const BackupVault = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
    <defs>
      <linearGradient
        id="prefix__a"
        x1={11.462}
        x2={11.462}
        y1={10.536}
        y2={1.423}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#0078d4" />
        <stop offset={0.149} stopColor="#1882db" />
        <stop offset={0.373} stopColor="#378fe4" />
        <stop offset={0.594} stopColor="#4c99ea" />
        <stop offset={0.806} stopColor="#5a9eee" />
        <stop offset={1} stopColor="#5ea0ef" />
      </linearGradient>
      <linearGradient
        id="prefix__b"
        x1={6.484}
        x2={6.484}
        y1={16.577}
        y2={7.461}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#32bedd" />
        <stop offset={1} stopColor="#50e6ff" />
      </linearGradient>
    </defs>
    <path
      fill="url(#prefix__a)"
      d="M17.891 7.681a2.89 2.89 0 0 0-2.508-2.776 3.64 3.64 0 0 0-3.75-3.482 3.735 3.735 0 0 0-3.57 2.434 3.45 3.45 0 0 0-3.03 3.317 3.5 3.5 0 0 0 3.62 3.362c.108 0 .214 0 .319-.014h5.863a.6.6 0 0 0 .155-.023 2.923 2.923 0 0 0 2.901-2.818"
    />
    <path
      fill="#fff"
      d="m9.835 11 .018.414.41.055a2.37 2.37 0 0 1 2.058 2.3 2.41 2.41 0 0 1-2.384 2.379h-6.3A2.976 2.976 0 0 1 .56 13.262a2.92 2.92 0 0 1 2.571-2.8l.3-.037.1-.285a3.22 3.22 0 0 1 3.078-2.119h.022A3.116 3.116 0 0 1 9.835 11"
    />
    <path
      fill="#fff"
      d="m13.6 5.66-1.587-1.538c-.173-.173-.319-.112-.319.156v.691a.2.2 0 0 1-.016.075.18.18 0 0 1-.108.1.2.2 0 0 1-.075.012c-1.02 0-3.864.268-3.967 4.157a.2.2 0 0 0 .2.2h1.01a.2.2 0 0 0 .08-.017.2.2 0 0 0 .067-.047.2.2 0 0 0 .042-.071.2.2 0 0 0 .01-.081 2.386 2.386 0 0 1 2.592-2.878.2.2 0 0 1 .2.2v.639c0 .32.1.372.32.156L13.6 5.989a.2.2 0 0 0 .064-.072.2.2 0 0 0 0-.185.2.2 0 0 0-.064-.072"
    />
    <path
      fill="url(#prefix__b)"
      d="M3.578 16.577A3.47 3.47 0 0 1 .11 13.213v-.031A3.42 3.42 0 0 1 3.116 9.9a3.71 3.71 0 0 1 3.545-2.44 3.61 3.61 0 0 1 3.712 3.452 2.865 2.865 0 0 1 2.486 2.775v.017a2.9 2.9 0 0 1-2.874 2.868H3.7q-.062.006-.122.005M1.1 13.2a2.483 2.483 0 0 0 2.567 2.389H9.98a1.914 1.914 0 0 0 1.89-1.889 1.876 1.876 0 0 0-1.628-1.8l-.822-.11-.035-.828A2.62 2.62 0 0 0 6.69 8.451h-.032a2.72 2.72 0 0 0-2.613 1.79l-.208.571-.6.072A2.425 2.425 0 0 0 1.1 13.2"
    />
  </svg>
);
const Memo = memo(BackupVault);
export default Memo;
