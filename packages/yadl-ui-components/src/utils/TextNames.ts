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
      "mx-auto break-words truncate text-primary",
    component: "Text",
  },
  textContent: {
    name: "Primary Content",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-primary-content",
    component: "Text",
  },
  textSecondary: {
    name: "Secondary",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-secondary",
    component: "Text",
  },
  textSecondaryContent: {
    name: "Secondary Content",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-secondary-content",
    component: "Text",
  },
  textAccent: {
    name: "Accent",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-accent",
    component: "Text",
  },
  textAccentContent: {
    name: "Accent Content",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-accent-content",
    component: "Text",
  },
  textNeutral: {
    name: "Neutral",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-neutral",
    component: "Text",
  },
  textNeutralContent: {
    name: "Neutral Content",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-neutral-content",
    component: "Text",
  },
  textInfo: {
    name: "Info",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-info",
    component: "Text",
  },
  textInfoContent: {
    name: "Info Content",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-info-content",
    component: "Text",
  },
  textSuccess: {
    name: "Success",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-success",
    component: "Text",
  },
  textSuccessContent: {
    name: "Success Content",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-success-content",
    component: "Text",
  },
  textWarning: {
    name: "Warning",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-warning",
    component: "Text",
  },
  textWarningContent: {
    name: "Warning Content",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-warning-content",
    component: "Text",
  },
  textError: {
    name: "Error",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-error",
    component: "Text",
  },
  textErrorContent: {
    name: "Error Content",
    type: "Solid",
    classes:
      "mx-auto break-words truncate text-error-content",
    component: "Text",
  },
  text1: {
    name: "Gradient 1",
    type: "Gradient",
    classes:
      "mx-auto break-words truncate from-pink-500 to-yellow-500 bg-clip-text text-transparent",
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
      "mx-auto break-words truncate from-indigo-500 to-purple-600 bg-clip-text text-transparent",
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
      "mx-auto break-words truncate from-violet-600  via-red-500 to-indigo-600 bg-clip-text text-transparent",
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
      "border-indigo-600 mx-auto break-words truncate from-purple-500 to-indigo-500 bg-clip-text text-transparent",
    component: "Text",
    props: {
      height: 284,
      width: 256,
    },
  },

};
