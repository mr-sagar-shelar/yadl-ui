import type { SVGProps } from "react";
import { memo } from "react";
const ConfidentialLedgers = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
    <defs>
      <linearGradient
        id="prefix__a"
        x1={11.565}
        x2={12.577}
        y1={14.729}
        y2={14.729}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.001} stopColor="#773adc" />
        <stop offset={1} stopColor="#552f99" />
      </linearGradient>
      <linearGradient
        id="prefix__b"
        x1={6.415}
        x2={7.427}
        y1={5.733}
        y2={5.733}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.001} stopColor="#773adc" />
        <stop offset={1} stopColor="#552f99" />
      </linearGradient>
      <linearGradient
        id="prefix__c"
        x1={1.265}
        x2={2.278}
        y1={14.729}
        y2={14.729}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.001} stopColor="#773adc" />
        <stop offset={1} stopColor="#552f99" />
      </linearGradient>
    </defs>
    <path
      fill="#b796f9"
      d="M12.85 2.257 9 4.517l-3.85-2.26L9 0Zm-6.7 8.091-.73-.43L3.854 9 0 11.248l3.85 2.26 3.85-2.26Zm8-1.35-1.57.92-.73.43-1.55.9 3.11 1.83.74.43.36-.21 3.49-2.05Z"
    />
    <path
      fill="#a67af4"
      d="M9 4.518V9l-1.56-.91-.73-.43-1.56-.91V2.258l3.49 2.05Zm-9 6.735v4.49L3.854 18v-4.487Zm13.414 1.825v-.01l-3.11-1.82v4.5L14.154 18v-4.49Z"
    />
    <path
      fill="url(#prefix__a)"
      d="M12.081 13.49a1.08 1.08 0 0 1 .492.935.285.285 0 0 1-.248.287h-.024l.206.912.062.278c.022.108-.035.165-.119.116l-.139-.079-.138-.08q-.242-.141-.483-.278a.27.27 0 0 1-.119-.26q.133-.417.262-.836c.009-.027.007-.043-.019-.078a1 1 0 0 1-.238-.7c.023-.217.137-.315.324-.286a.6.6 0 0 1 .181.069"
    />
    <path
      fill="#773adc"
      d="M12.854 2.258v4.49l-1.56.91-.73.43L9 9V4.508Zm-8.26 10.81v.01l-.74.43V18l3.85-2.25v-4.5Zm9.56.437V18L18 15.743v-4.49ZM7.7 13.088v.85h2.6v-.85Zm-.99-5.43-1.29 2.26.73.43 1.29-2.26Zm4.58 0-.73.43 1.29 2.26.73-.43Z"
    />
    <path
      fill="url(#prefix__b)"
      d="M6.932 4.5a1.08 1.08 0 0 1 .491.935.285.285 0 0 1-.247.286h-.025l.206.912.062.279c.02.093-.035.164-.119.115l-.139-.079-.138-.08-.483-.28a.27.27 0 0 1-.119-.26q.133-.417.262-.836c.009-.027.007-.043-.019-.078a1 1 0 0 1-.238-.7c.023-.217.138-.315.325-.285a.5.5 0 0 1 .181.071"
    />
    <path
      fill="url(#prefix__c)"
      d="M1.782 13.49a1.08 1.08 0 0 1 .491.935.285.285 0 0 1-.247.287h-.025l.206.912.062.278c.023.108-.035.165-.119.116l-.139-.079-.138-.08q-.242-.141-.483-.278a.27.27 0 0 1-.119-.26q.133-.417.263-.836c.009-.027.006-.043-.02-.078a1 1 0 0 1-.238-.7c.023-.217.138-.315.325-.286a.6.6 0 0 1 .181.069"
    />
  </svg>
);
const Memo = memo(ConfidentialLedgers);
export default Memo;
