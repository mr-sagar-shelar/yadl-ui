export interface TextDetails {
  name: string;
  props?: any;
  classes: string;
  type?: string;
  component: string;
}
export interface TextNames {
  [key: string]: TextDetails;
}

export const TextNames: TextNames = {
  textPrimary: {
    name: "Primary",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-primary w-[130px] bg-linear-to-t",
    component: "Text",
  },
  textContent: {
    name: "Primary Content",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-primary-content w-[130px] bg-linear-to-t",
    component: "Text",
  },
  textSecondary: {
    name: "Secondary",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-secondary w-[130px] bg-linear-to-t",
    component: "Text",
  },
  textSecondaryContent: {
    name: "Secondary Content",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-secondary-content w-[130px] bg-linear-to-t",
    component: "Text",
  },
  textAccent: {
    name: "Accent",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-accent w-[130px] bg-linear-to-t",
    component: "Text",
  },
  textAccentContent: {
    name: "Accent Content",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-accent-content w-[130px] bg-linear-to-t",
    component: "Text",
  },
  textNeutral: {
    name: "Neutral",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-neutral w-[130px] bg-linear-to-t",
    component: "Text",
  },
  textNeutralContent: {
    name: "Neutral Content",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-neutral-content w-[130px] bg-linear-to-t",
    component: "Text",
  },
  textInfo: {
    name: "Info",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-info w-[130px] bg-linear-to-t",
    component: "Text",
  },
  textInfoContent: {
    name: "Info Content",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-info-content w-[130px] bg-linear-to-t",
    component: "Text",
  },
  textSuccess: {
    name: "Success",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-success w-[130px] bg-linear-to-t",
    component: "Text",
  },
  textSuccessContent: {
    name: "Success Content",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-success-content w-[130px] bg-linear-to-t",
    component: "Text",
  },
  textWarning: {
    name: "Warning",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-warning w-[130px] bg-linear-to-t",
    component: "Text",
  },
  textWarningContent: {
    name: "Warning Content",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-warning-content w-[130px] bg-linear-to-t",
    component: "Text",
  },
  textError: {
    name: "Error",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-error w-[130px] bg-linear-to-t",
    component: "Text",
  },
  textErrorContent: {
    name: "Error Content",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-error-content w-[130px] bg-linear-to-t",
    component: "Text",
  },
  text1: {
    name: "Gradient 1",
    type: "Gradient",
    classes:
      "mx-auto break-words truncate from-pink-500 to-yellow-500 bg-clip-text text-transparent w-[130px] bg-linear-to-t",
    component: "Text",
    props: {
      height: 284,
      width: 256,
    },
  },
  text2: {
    name: "Gradient 2",
    type: "Gradient",
    classes:
      "mx-auto break-words truncate from-indigo-500 to-purple-600 bg-clip-text text-transparent w-[130px] bg-linear-to-t",
    component: "Text",
    props: {
      height: 284,
      width: 256,
    },
  },
  text3: {
    name: "Gradient 3",
    type: "Gradient",
    classes:
      "mx-auto break-words truncate from-violet-600  via-red-500 to-indigo-600 bg-clip-text text-transparent w-[130px] bg-linear-to-t",
    component: "Text",
    props: {
      height: 284,
      width: 256,
    },
  },
  text4: {
    name: "Gradient 4",
    type: "Gradient",
    classes:
      "border-indigo-600 mx-auto break-words truncate from-purple-500 to-indigo-500 bg-clip-text text-transparent w-[130px] bg-linear-to-t",
    component: "Text",
    props: {
      height: 284,
      width: 256,
    },
  },

};
