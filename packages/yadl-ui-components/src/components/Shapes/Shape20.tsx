import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 661 658" 
    overflow="hidden"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={875}
        x2={875}
        y1={344}
        y2={628}
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop offset={0} stopColor="#2B68AB" />
        <stop offset={0.024} stopColor="#2A67AA" />
        <stop offset={0.048} stopColor="#2A67AA" />
        <stop offset={0.071} stopColor="#2A67AA" />
        <stop offset={0.095} stopColor="#2A67AA" />
        <stop offset={0.119} stopColor="#2A67AA" />
        <stop offset={0.143} stopColor="#2A67A9" />
        <stop offset={0.167} stopColor="#2A67A9" />
        <stop offset={0.19} stopColor="#2A66A9" />
        <stop offset={0.214} stopColor="#2A66A8" />
        <stop offset={0.238} stopColor="#2A66A8" />
        <stop offset={0.262} stopColor="#2A65A7" />
        <stop offset={0.286} stopColor="#2965A6" />
        <stop offset={0.31} stopColor="#2965A6" />
        <stop offset={0.333} stopColor="#2964A5" />
        <stop offset={0.357} stopColor="#2964A4" />
        <stop offset={0.381} stopColor="#2963A3" />
        <stop offset={0.405} stopColor="#2863A3" />
        <stop offset={0.429} stopColor="#2862A2" />
        <stop offset={0.452} stopColor="#2862A1" />
        <stop offset={0.476} stopColor="#2861A0" />
        <stop offset={0.5} stopColor="#28609F" />
        <stop offset={0.524} stopColor="#27609E" />
        <stop offset={0.548} stopColor="#275F9D" />
        <stop offset={0.571} stopColor="#275E9B" />
        <stop offset={0.595} stopColor="#265E9A" />
        <stop offset={0.619} stopColor="#265D99" />
        <stop offset={0.643} stopColor="#265C98" />
        <stop offset={0.667} stopColor="#255B96" />
        <stop offset={0.69} stopColor="#255B95" />
        <stop offset={0.714} stopColor="#255A94" />
        <stop offset={0.738} stopColor="#245992" />
        <stop offset={0.762} stopColor="#245891" />
        <stop offset={0.786} stopColor="#24578F" />
        <stop offset={0.81} stopColor="#23568E" />
        <stop offset={0.833} stopColor="#23558C" />
        <stop offset={0.857} stopColor="#22548A" />
        <stop offset={0.881} stopColor="#225389" />
        <stop offset={0.905} stopColor="#215287" />
        <stop offset={0.929} stopColor="#215185" />
        <stop offset={0.952} stopColor="#205083" />
        <stop offset={0.976} stopColor="#204F81" />
        <stop offset={1} stopColor="#204E80" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={809.5}
        x2={809.5}
        y1={524}
        y2={839}
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop offset={0} stopColor="#00A39B" />
        <stop offset={0.013} stopColor="#00A29A" />
        <stop offset={0.025} stopColor="#00A29A" />
        <stop offset={0.037} stopColor="#00A29A" />
        <stop offset={0.05} stopColor="#00A29A" />
        <stop offset={0.063} stopColor="#00A29A" />
        <stop offset={0.075} stopColor="#00A29A" />
        <stop offset={0.087} stopColor="#00A29A" />
        <stop offset={0.1} stopColor="#00A199" />
        <stop offset={0.113} stopColor="#00A199" />
        <stop offset={0.125} stopColor="#00A199" />
        <stop offset={0.138} stopColor="#00A199" />
        <stop offset={0.15} stopColor="#00A098" />
        <stop offset={0.163} stopColor="#00A098" />
        <stop offset={0.175} stopColor="#009F98" />
        <stop offset={0.188} stopColor="#009F97" />
        <stop offset={0.2} stopColor="#009F97" />
        <stop offset={0.212} stopColor="#009E96" />
        <stop offset={0.225} stopColor="#009E96" />
        <stop offset={0.237} stopColor="#009D95" />
        <stop offset={0.25} stopColor="#009C95" />
        <stop offset={0.263} stopColor="#009C94" />
        <stop offset={0.275} stopColor="#009B94" />
        <stop offset={0.287} stopColor="#009B93" />
        <stop offset={0.3} stopColor="#009A92" />
        <stop offset={0.313} stopColor="#009992" />
        <stop offset={0.325} stopColor="#009991" />
        <stop offset={0.338} stopColor="#009890" />
        <stop offset={0.35} stopColor="#009790" />
        <stop offset={0.362} stopColor="#00968F" />
        <stop offset={0.375} stopColor="#00968E" />
        <stop offset={0.388} stopColor="#00958D" />
        <stop offset={0.4} stopColor="#00948D" />
        <stop offset={0.412} stopColor="#00938C" />
        <stop offset={0.425} stopColor="#00928B" />
        <stop offset={0.438} stopColor="#00918A" />
        <stop offset={0.45} stopColor="#009089" />
        <stop offset={0.463} stopColor="#008F88" />
        <stop offset={0.475} stopColor="#008E87" />
        <stop offset={0.487} stopColor="#008D86" />
        <stop offset={0.5} stopColor="#008C86" />
        <stop offset={0.512} stopColor="#008B85" />
        <stop offset={0.525} stopColor="#008A83" />
        <stop offset={0.537} stopColor="#008982" />
        <stop offset={0.55} stopColor="#008881" />
        <stop offset={0.563} stopColor="#008780" />
        <stop offset={0.575} stopColor="#00867F" />
        <stop offset={0.588} stopColor="#00857E" />
        <stop offset={0.6} stopColor="#00837D" />
        <stop offset={0.613} stopColor="#00827C" />
        <stop offset={0.625} stopColor="#00817B" />
        <stop offset={0.637} stopColor="#008079" />
        <stop offset={0.65} stopColor="#007E78" />
        <stop offset={0.662} stopColor="#007D77" />
        <stop offset={0.675} stopColor="#007C76" />
        <stop offset={0.688} stopColor="#007A74" />
        <stop offset={0.7} stopColor="#007973" />
        <stop offset={0.713} stopColor="#007872" />
        <stop offset={0.725} stopColor="#007670" />
        <stop offset={0.738} stopColor="#00756F" />
        <stop offset={0.75} stopColor="#00736E" />
        <stop offset={0.762} stopColor="#00726C" />
        <stop offset={0.775} stopColor="#00706B" />
        <stop offset={0.787} stopColor="#006F69" />
        <stop offset={0.8} stopColor="#006D68" />
        <stop offset={0.813} stopColor="#006C66" />
        <stop offset={0.825} stopColor="#006A65" />
        <stop offset={0.838} stopColor="#006863" />
        <stop offset={0.85} stopColor="#006762" />
        <stop offset={0.863} stopColor="#006560" />
        <stop offset={0.875} stopColor="#00635F" />
        <stop offset={0.887} stopColor="#00625D" />
        <stop offset={0.9} stopColor="#00605B" />
        <stop offset={0.912} stopColor="#005E5A" />
        <stop offset={0.925} stopColor="#005D58" />
        <stop offset={0.938} stopColor="#005B56" />
        <stop offset={0.95} stopColor="#005955" />
        <stop offset={0.963} stopColor="#005753" />
        <stop offset={0.975} stopColor="#005551" />
        <stop offset={0.988} stopColor="#00534F" />
        <stop offset={1} stopColor="#00524E" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={894.5}
        x2={894.5}
        y1={741}
        y2={1000}
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
        id="d"
        x1={1169.5}
        x2={1169.5}
        y1={716}
        y2={1000}
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop offset={0} stopColor="#F2754B" />
        <stop offset={0.017} stopColor="#F1744A" />
        <stop offset={0.034} stopColor="#F1744A" />
        <stop offset={0.052} stopColor="#F1744A" />
        <stop offset={0.069} stopColor="#F1744A" />
        <stop offset={0.086} stopColor="#F1744A" />
        <stop offset={0.103} stopColor="#F1744A" />
        <stop offset={0.121} stopColor="#F17449" />
        <stop offset={0.138} stopColor="#F17349" />
        <stop offset={0.155} stopColor="#F17349" />
        <stop offset={0.172} stopColor="#F17348" />
        <stop offset={0.19} stopColor="#F17248" />
        <stop offset={0.207} stopColor="#F07247" />
        <stop offset={0.224} stopColor="#F07247" />
        <stop offset={0.241} stopColor="#F07146" />
        <stop offset={0.259} stopColor="#F07146" />
        <stop offset={0.276} stopColor="#F07045" />
        <stop offset={0.293} stopColor="#EF7045" />
        <stop offset={0.31} stopColor="#EF6F44" />
        <stop offset={0.328} stopColor="#EF6E43" />
        <stop offset={0.345} stopColor="#EF6E42" />
        <stop offset={0.362} stopColor="#EF6D42" />
        <stop offset={0.379} stopColor="#EE6D41" />
        <stop offset={0.397} stopColor="#EE6C40" />
        <stop offset={0.414} stopColor="#EE6B3F" />
        <stop offset={0.431} stopColor="#ED6A3E" />
        <stop offset={0.448} stopColor="#ED6A3D" />
        <stop offset={0.466} stopColor="#ED693C" />
        <stop offset={0.483} stopColor="#EC683B" />
        <stop offset={0.5} stopColor="#EC673A" />
        <stop offset={0.517} stopColor="#EC6639" />
        <stop offset={0.534} stopColor="#EB6538" />
        <stop offset={0.552} stopColor="#EB6437" />
        <stop offset={0.569} stopColor="#EB6336" />
        <stop offset={0.586} stopColor="#EA6235" />
        <stop offset={0.603} stopColor="#EA6134" />
        <stop offset={0.621} stopColor="#E96032" />
        <stop offset={0.638} stopColor="#E95F31" />
        <stop offset={0.655} stopColor="#E85E30" />
        <stop offset={0.672} stopColor="#E85D2E" />
        <stop offset={0.69} stopColor="#E85C2D" />
        <stop offset={0.707} stopColor="#E75B2C" />
        <stop offset={0.724} stopColor="#E75A2A" />
        <stop offset={0.741} stopColor="#E65929" />
        <stop offset={0.759} stopColor="#E65727" />
        <stop offset={0.776} stopColor="#E55626" />
        <stop offset={0.793} stopColor="#E55524" />
        <stop offset={0.81} stopColor="#E45323" />
        <stop offset={0.828} stopColor="#E35221" />
        <stop offset={0.845} stopColor="#E3511F" />
        <stop offset={0.862} stopColor="#E24F1E" />
        <stop offset={0.879} stopColor="#E24E1C" />
        <stop offset={0.897} stopColor="#E14D1A" />
        <stop offset={0.914} stopColor="#E14B19" />
        <stop offset={0.931} stopColor="#E04A17" />
        <stop offset={0.948} stopColor="#DF4815" />
        <stop offset={0.966} stopColor="#DF4713" />
        <stop offset={0.983} stopColor="#DE4511" />
        <stop offset={1} stopColor="#DE4410" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={1235.5}
        x2={1235.5}
        y1={505}
        y2={820}
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
        id="f"
        x1={1150.5}
        x2={1150.5}
        y1={344}
        y2={604}
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop offset={0} stopColor="#F0C02B" />
        <stop offset={0.024} stopColor="#EFBF2A" />
        <stop offset={0.049} stopColor="#EFBF2A" />
        <stop offset={0.073} stopColor="#EFBF2A" />
        <stop offset={0.098} stopColor="#EFBF2A" />
        <stop offset={0.122} stopColor="#EFBF2A" />
        <stop offset={0.146} stopColor="#EEBE2A" />
        <stop offset={0.171} stopColor="#EEBE29" />
        <stop offset={0.195} stopColor="#EEBE29" />
        <stop offset={0.22} stopColor="#EDBD29" />
        <stop offset={0.244} stopColor="#EDBD28" />
        <stop offset={0.268} stopColor="#ECBC28" />
        <stop offset={0.293} stopColor="#EBBC28" />
        <stop offset={0.317} stopColor="#EBBB27" />
        <stop offset={0.341} stopColor="#EABA27" />
        <stop offset={0.366} stopColor="#E9BA26" />
        <stop offset={0.39} stopColor="#E8B926" />
        <stop offset={0.415} stopColor="#E7B825" />
        <stop offset={0.439} stopColor="#E7B724" />
        <stop offset={0.463} stopColor="#E6B624" />
        <stop offset={0.488} stopColor="#E5B523" />
        <stop offset={0.512} stopColor="#E4B422" />
        <stop offset={0.537} stopColor="#E2B321" />
        <stop offset={0.561} stopColor="#E1B221" />
        <stop offset={0.585} stopColor="#E0B120" />
        <stop offset={0.61} stopColor="#DFB01F" />
        <stop offset={0.634} stopColor="#DEAF1E" />
        <stop offset={0.659} stopColor="#DCAE1D" />
        <stop offset={0.683} stopColor="#DBAC1C" />
        <stop offset={0.707} stopColor="#DAAB1B" />
        <stop offset={0.732} stopColor="#D8AA1A" />
        <stop offset={0.756} stopColor="#D7A819" />
        <stop offset={0.78} stopColor="#D5A718" />
        <stop offset={0.805} stopColor="#D4A617" />
        <stop offset={0.829} stopColor="#D2A416" />
        <stop offset={0.854} stopColor="#D0A315" />
        <stop offset={0.878} stopColor="#CFA114" />
        <stop offset={0.902} stopColor="#CD9F13" />
        <stop offset={0.927} stopColor="#CB9E11" />
        <stop offset={0.951} stopColor="#C99C10" />
        <stop offset={0.976} stopColor="#C79A0F" />
        <stop offset={1} stopColor="#C6990E" />
      </linearGradient>
    </defs>
    <g fillRule="evenodd">
      <path
        fill="#151F3A"
        d="M136 322c0-97.202 78.798-176 176-176 97.2 0 176 78.798 176 176s-78.8 176-176 176c-97.202 0-176-78.798-176-176Z"
      />
      <path
        fill="url(#a)"
        d="M747.201 491.338c-.059.105-.13.197-.201.303l.261.157 5.416 47.676L906.313 628l34.406-24.6h.023c15.645-18.434 37.452-31.477 62.258-35.934V344c-106.939 6.088-200.201 63.19-255.799 147.338Z"
        transform="translate(-692 -343)"
      />
      <path
        fillOpacity={0.651}
        d="m55 148 5.479 48.254L214.484 285 249 260.315 55 148Z"
      />
      <path
        fillOpacity={0.502}
        d="M312 224.895V147c-53.408 5.499-100.046 33.82-130 75.039L249.492 261c15.714-18.52 37.609-31.619 62.508-36.105Z"
      />
      <path
        fill="#FFF"
        fillOpacity={0.102}
        d="M58.385 143A321.486 321.486 0 0 0 55 148.021L176.354 218a188.753 188.753 0 0 1 3.646-4.872L58.385 143Z"
      />
      <path
        fill="url(#b)"
        d="M728.041 819.662c.057.103.114.219.171.336l.25-.16L772.516 839 926 749.983l-4.159-42.16.011-.015c-8.17-22.808-8.592-48.256-.08-72.012l-67.255-38.792L727.972 524c-48.111 95.827-45.148 205.319.069 295.662Z"
        transform="translate(-692 -343)"
      />
      <path
        fillOpacity={0.651}
        d="M36 476.69 80.486 496 234 407.126 229.838 365 36 476.69Z"
      />
      <path
        fillOpacity={0.502}
        d="M229.914 292.609 162.837 254c-21.757 48.66-20.505 102.81.136 149L230 364.26c-8.151-22.688-8.575-48.018-.086-71.651Z"
      />
      <path
        fill="#FFF"
        fillOpacity={0.102}
        d="M34 471.539c.873 1.83 1.762 3.649 2.669 5.461L158 406.609a200.911 200.911 0 0 1-2.411-5.609L34 471.539Z"
      />
      <path
        fill="url(#c)"
        d="M1002.91 999.976c.13.012.25.012.37.024v-.3l38.71-28.454.01-176.887-38.58-17.459v-.024c-23.834-4.328-46.069-16.667-62.362-35.876l-67.331 38.658L747 852.418c58.781 89.355 155.025 141.479 255.91 147.558Z"
        transform="translate(-692 -343)"
      />
      <path
        fillOpacity={0.651}
        d="m311 658 38.98-28.84.02-177.613L311.48 434 311 658Z"
      />
      <path
        fillOpacity={0.502}
        d="M249.498 398 182 436.556c31.441 43.123 79.27 69.139 129.95 74.444l.05-77.217c-23.894-4.321-46.186-16.631-62.502-35.783Z"
      />
      <path
        fill="#FFF"
        fillOpacity={0.102}
        d="M305 657.58c1.969.15 3.94.3 5.92.42l.08-140.275c-1.98-.209-3.949-.451-5.915-.725L305 657.58Z"
      />
      <path
        fill="url(#d)"
        d="M1296.8 852.544c.06-.106.13-.198.2-.303l-.26-.145-5.42-47.675L1138.25 716 1104 740.613h-.01c-15.57 18.434-37.29 31.49-61.99 35.96l.05 77.535.08 145.892c106.5-6.14 199.35-63.295 254.67-147.456Z"
        transform="translate(-692 -343)"
      />
      <path
        fillOpacity={0.651}
        d="m605 509-5.51-47.934-154-88.066L411 397.537 605 509Z"
      />
      <path
        fillOpacity={0.502}
        d="m350 433.81.05 77.19c52.99-5.477 99.25-33.565 128.95-74.434L412 398c-15.57 18.357-37.3 31.352-62 35.81Z"
      />
      <path
        fill="#FFF"
        fillOpacity={0.102}
        d="M602.59 514a336.01 336.01 0 0 0 3.41-5.028L483.67 439c-1.2 1.646-2.42 3.271-3.67 4.878L602.59 514Z"
      />
      <path
        fill="url(#e)"
        d="M1317.18 524.41c-.06-.116-.12-.218-.17-.335l-.25.146L1272.7 505 1119 593.754l4.09 42.161h-.01c8.14 22.808 8.52 48.256-.04 71.997l67.22 38.894L1316.77 820c48.28-95.725 45.51-205.202.41-295.59Z"
        transform="translate(-692 -343)"
      />
      <path
        fillOpacity={0.651}
        d="M625 181.413 580.57 162 427 250.789 431.1 293 625 181.413Z"
      />
      <path
        fillOpacity={0.502}
        d="M431 364.281 498.04 403c21.84-48.625 20.68-102.776.1-149l-67.11 38.63c8.12 22.701 8.5 48.031-.03 71.651Z"
      />
      <path
        fill="#FFF"
        fillOpacity={0.102}
        d="M627 186.478c-.87-1.833-1.75-3.659-2.66-5.478L503 251.37c.83 1.865 1.62 3.744 2.39 5.63L627 186.478Z"
      />
      <path
        fill="url(#f)"
        d="M1042.06 344.024c-.12-.012-.25-.012-.37-.024v.301L1003 372.865l.01 177.594 38.59 17.514v.024c23.84 4.334 46.08 16.732 62.37 36.003l67.33-38.831 126.7-73.053c-58.8-89.7-155.05-142.001-255.94-148.092Z"
        transform="translate(-692 -343)"
      />
      <path
        fillOpacity={0.651}
        d="m350 1-39 28.85.02 177.614L349.57 225 350 1Z"
      />
      <path
        fillOpacity={0.502}
        d="M412.03 261 479 222.082c-31.2-43.5-78.68-69.741-128.97-75.082l-.03 77.911c23.71 4.354 45.83 16.767 62.03 36.089Z"
      />
      <path
        fill="#FFF"
        fillOpacity={0.102}
        d="M356 1.418c-1.98-.157-3.96-.301-5.94-.418L350 141.282c1.99.202 3.97.45 5.94.718L356 1.418Z"
      />
    </g>
  </svg>
)
const Memo = memo(SvgComponent)
export default Memo
