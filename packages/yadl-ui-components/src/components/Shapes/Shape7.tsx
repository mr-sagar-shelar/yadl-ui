import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 607 611" 
    overflow="hidden"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={215.5}
        x2={215.5}
        y1={916}
        y2={513}
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop offset={0} stopColor="#F9960E" />
        <stop offset={0.018} stopColor="#F8950D" />
        <stop offset={0.036} stopColor="#F8950D" />
        <stop offset={0.054} stopColor="#F8950D" />
        <stop offset={0.071} stopColor="#F8950D" />
        <stop offset={0.089} stopColor="#F8950D" />
        <stop offset={0.107} stopColor="#F8950D" />
        <stop offset={0.125} stopColor="#F7950D" />
        <stop offset={0.143} stopColor="#F7950D" />
        <stop offset={0.161} stopColor="#F7940D" />
        <stop offset={0.179} stopColor="#F6940D" />
        <stop offset={0.196} stopColor="#F6940D" />
        <stop offset={0.214} stopColor="#F5930D" />
        <stop offset={0.232} stopColor="#F5930D" />
        <stop offset={0.25} stopColor="#F4930D" />
        <stop offset={0.268} stopColor="#F4920D" />
        <stop offset={0.286} stopColor="#F3920D" />
        <stop offset={0.304} stopColor="#F2920D" />
        <stop offset={0.321} stopColor="#F2910C" />
        <stop offset={0.339} stopColor="#F1910C" />
        <stop offset={0.357} stopColor="#F0900C" />
        <stop offset={0.375} stopColor="#EF900C" />
        <stop offset={0.393} stopColor="#EF8F0C" />
        <stop offset={0.411} stopColor="#EE8F0C" />
        <stop offset={0.429} stopColor="#ED8E0C" />
        <stop offset={0.446} stopColor="#EC8D0C" />
        <stop offset={0.464} stopColor="#EB8D0B" />
        <stop offset={0.482} stopColor="#EA8C0B" />
        <stop offset={0.5} stopColor="#E98B0B" />
        <stop offset={0.518} stopColor="#E88B0B" />
        <stop offset={0.536} stopColor="#E78A0B" />
        <stop offset={0.554} stopColor="#E6890B" />
        <stop offset={0.571} stopColor="#E5890A" />
        <stop offset={0.589} stopColor="#E3880A" />
        <stop offset={0.607} stopColor="#E2870A" />
        <stop offset={0.625} stopColor="#E1860A" />
        <stop offset={0.643} stopColor="#E0850A" />
        <stop offset={0.661} stopColor="#DE8409" />
        <stop offset={0.679} stopColor="#DD8409" />
        <stop offset={0.696} stopColor="#DC8309" />
        <stop offset={0.714} stopColor="#DA8209" />
        <stop offset={0.732} stopColor="#D98108" />
        <stop offset={0.75} stopColor="#D78008" />
        <stop offset={0.768} stopColor="#D67F08" />
        <stop offset={0.786} stopColor="#D47E08" />
        <stop offset={0.804} stopColor="#D37D08" />
        <stop offset={0.821} stopColor="#D17C07" />
        <stop offset={0.839} stopColor="#CF7B07" />
        <stop offset={0.857} stopColor="#CE7A07" />
        <stop offset={0.875} stopColor="#CC7906" />
        <stop offset={0.893} stopColor="#CA7806" />
        <stop offset={0.911} stopColor="#C97606" />
        <stop offset={0.929} stopColor="#C77506" />
        <stop offset={0.946} stopColor="#C57405" />
        <stop offset={0.964} stopColor="#C37305" />
        <stop offset={0.982} stopColor="#C17205" />
        <stop offset={1} stopColor="#C07105" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={596.5}
        x2={596.5}
        y1={678}
        y2={978}
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop offset={0} stopColor="#82B617" />
        <stop offset={0.022} stopColor="#81B516" />
        <stop offset={0.044} stopColor="#81B516" />
        <stop offset={0.067} stopColor="#81B516" />
        <stop offset={0.089} stopColor="#81B516" />
        <stop offset={0.111} stopColor="#81B516" />
        <stop offset={0.133} stopColor="#81B416" />
        <stop offset={0.156} stopColor="#81B416" />
        <stop offset={0.178} stopColor="#80B416" />
        <stop offset={0.2} stopColor="#80B316" />
        <stop offset={0.222} stopColor="#80B316" />
        <stop offset={0.244} stopColor="#7FB216" />
        <stop offset={0.267} stopColor="#7FB216" />
        <stop offset={0.289} stopColor="#7EB116" />
        <stop offset={0.311} stopColor="#7EB016" />
        <stop offset={0.333} stopColor="#7DB016" />
        <stop offset={0.356} stopColor="#7DAF16" />
        <stop offset={0.378} stopColor="#7CAE16" />
        <stop offset={0.4} stopColor="#7CAD15" />
        <stop offset={0.422} stopColor="#7BAC15" />
        <stop offset={0.444} stopColor="#7BAB15" />
        <stop offset={0.467} stopColor="#7AAA15" />
        <stop offset={0.489} stopColor="#79A915" />
        <stop offset={0.511} stopColor="#78A815" />
        <stop offset={0.533} stopColor="#78A715" />
        <stop offset={0.556} stopColor="#77A615" />
        <stop offset={0.578} stopColor="#76A514" />
        <stop offset={0.6} stopColor="#75A414" />
        <stop offset={0.622} stopColor="#74A314" />
        <stop offset={0.644} stopColor="#73A114" />
        <stop offset={0.667} stopColor="#73A014" />
        <stop offset={0.689} stopColor="#729F14" />
        <stop offset={0.711} stopColor="#719D13" />
        <stop offset={0.733} stopColor="#709C13" />
        <stop offset={0.756} stopColor="#6F9A13" />
        <stop offset={0.778} stopColor="#6E9913" />
        <stop offset={0.8} stopColor="#6C9713" />
        <stop offset={0.822} stopColor="#6B9612" />
        <stop offset={0.844} stopColor="#6A9412" />
        <stop offset={0.867} stopColor="#699212" />
        <stop offset={0.889} stopColor="#689112" />
        <stop offset={0.911} stopColor="#678F11" />
        <stop offset={0.933} stopColor="#658D11" />
        <stop offset={0.956} stopColor="#648B11" />
        <stop offset={0.978} stopColor="#638911" />
        <stop offset={1} stopColor="#628811" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={649.5}
        x2={649.5}
        y1={528}
        y2={737}
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop offset={0} stopColor="#00A39B" />
        <stop offset={0.58} stopColor="#00A39B" />
        <stop offset={1} stopColor="#007A74" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={583.5}
        x2={583.5}
        y1={469}
        y2={591}
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop offset={0} stopColor="#00A39B" />
        <stop offset={0.27} stopColor="#00A39B" />
        <stop offset={1} stopColor="#007A74" />
      </linearGradient>
    </defs>
    <g fillRule="evenodd">
      <path
        fill="#F9960E"
        d="M315.667 0 1 146.178 158.067 219 473 73.089 315.667 0Z"
      />
      <path
        fill="url(#a)"
        d="M137 843.284 294 916V585.716L137 513v330.284Z"
        transform="translate(-136 -367)"
      />
      <path fill="#C07105" d="M473 403.297 158 549V218.703L473 73v330.297Z" />
      <path fill="#415B0C" d="M170 378v165.742L315 611V445.525L170 378Z" />
      <path
        fill="url(#b)"
        d="M451 812.813 742 678v165.453L451 978V812.813Z"
        transform="translate(-136 -367)"
      />
      <path
        fill="#628811"
        d="M170 380.578 460.667 246 606 313.156 315.333 448 170 380.578Z"
      />
      <path
        fill="#00524E"
        d="M315 163v147.842L447 372V224.158l-131.202-60.892L315 163Z"
      />
      <path
        fill="url(#c)"
        d="M583 589.158 716 528v147.842L583 737V589.158Z"
        transform="translate(-136 -367)"
      />
      <path
        fill="url(#d)"
        d="m451 530 132.5-61L716 530l-132.5 61L451 530Z"
        transform="translate(-136 -367)"
      />
      <path
        fill="#F6D980"
        d="M222 256.867 315 214l93 42.867L315 300l-93-43.133Z"
      />
      <path fill="#F0C02B" d="M315 300.036V397l93-43.036V257l-93 43.036Z" />
      <path fill="#C0BEB1" d="m222 257 93 43.036V397l-93-43.036V257Z" />
      <path fill="#C6990E" d="m222 257 93 43.036V397l-93-43.036V257Z" />
    </g>
  </svg>
)
const Memo = memo(SvgComponent)
export default Memo
