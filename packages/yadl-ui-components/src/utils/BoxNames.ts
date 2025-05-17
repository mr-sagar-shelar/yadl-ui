export interface BoxDetails {
  name: string;
  component: string;
  props: any;
}
export interface BoxNames {
  [key: string]: BoxDetails;
}

export const BoxNames: BoxNames = {
  // box1: {
  //   name: "Box 1",
  //   component: "Box2",
  //   props: {
  //     height: 284,
  //     width: 256,
  //     title: "UI / UX Creative Desing",
  //     caption:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit",
  //   },
  // },
  boxPrimary: {
    name: "Primary",
    component: "Box1",
    props: {
      height: 200,
      width: 200,
      classes: "bg-blue-500"
    },
  },
  boxPrimaryContent: {
    name: "Primary Content",
    component: "Box1",
    props: {
      height: 200,
      width: 200,
      classes: "bg-primary-content"
    },
  },
  boxSecondary: {
    name: "Secondary",
    component: "Box1",
    props: {
      height: 200,
      width: 200,
      classes: "bg-secondary"
    },
  },
  boxSecondaryContent: {
    name: "Secondary Content",
    component: "Box1",
    props: {
      height: 200,
      width: 200,
      classes: "bg-secondary-content"
    },
  },
  boxAccent: {
    name: "Accent",
    component: "Box1",
    props: {
      height: 200,
      width: 200,
      classes: "bg-accent"
    },
  },
  boxAccentContent: {
    name: "Accent Content",
    component: "Box1",
    props: {
      height: 200,
      width: 200,
      classes: "bg-accent-content"
    },
  },
  boxNeutral: {
    name: "Neutral",
    component: "Box1",
    props: {
      height: 200,
      width: 200,
      classes: "bg-neutral"
    },
  },
  boxNeutralContent: {
    name: "Neutral Content",
    component: "Box1",
    props: {
      height: 200,
      width: 200,
      classes: "bg-neutral-content"
    },
  },
  boxInfo: {
    name: "Info",
    component: "Box1",
    props: {
      height: 200,
      width: 200,
      classes: "bg-info"
    },
  },
  boxInfoContent: {
    name: "Info Content",
    component: "Box1",
    props: {
      height: 200,
      width: 200,
      classes: "bg-info-content"
    },
  },
  boxSuccess: {
    name: "Success",
    component: "Box1",
    props: {
      height: 200,
      width: 200,
      classes: "bg-success"
    },
  },
  boxSuccessContent: {
    name: "Success Content",
    component: "Box1",
    props: {
      height: 200,
      width: 200,
      classes: "bg-success-content"
    },
  },
  boxWarning: {
    name: "Warning",
    component: "Box1",
    props: {
      height: 200,
      width: 200,
      classes: "bg-warning"
    },
  },
  boxWarningContent: {
    name: "Warning Content",
    component: "Box1",
    props: {
      height: 200,
      width: 200,
      classes: "bg-warning-content"
    },
  },
  boxError: {
    name: "Error",
    component: "Box1",
    props: {
      height: 200,
      width: 200,
      classes: "bg-error"
    },
  },
  boxErrorContent: {
    name: "Error Content",
    component: "Box1",
    props: {
      height: 200,
      width: 200,
      classes: "bg-error-content"
    },
  }
};
