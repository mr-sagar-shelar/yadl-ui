export interface BoxDetails {
  name: string;
  component: string;
  props: any;
}
export interface BoxNames {
  [key: string]: BoxDetails;
}

export const BoxNames: BoxNames = {
  box1: {
    name: "Box 1",
    component: "Box1",
    props: {
      height: 284,
      width: 256,
      title: "UI / UX Creative Desing",
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit",
    },
  }
};
