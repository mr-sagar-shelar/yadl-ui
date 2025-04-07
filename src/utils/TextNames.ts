export interface TextDetails {
  name: string;
  props: any;
  text: string;
  classes: string;
  component: string;
}
export interface TextNames {
  [key: string]: TextDetails;
}

export const TextNames: TextNames = {
  text1: {
    name: "Dancing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    classes: "text-dancing",
    component: "Text",
    props: {
      height: 284,
      width: 256,
    },
  },
};
