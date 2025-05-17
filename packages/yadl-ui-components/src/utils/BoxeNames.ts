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
    component: "Box2",
    props: {
      height: 284,
      width: 256,
      title: "UI / UX Creative Desing",
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit",
    },
  },
  box2: {
    name: "Box 2",
    component: "Box1",
    props: {
      height: 284,
      width: 256,
      classes: "bg-blue-500"
    },
  },
  box3: {
    name: "Box 3",
    component: "Box1",
    props: {
      height: 284,
      width: 256,
      classes: "border-4 bg-indigo-500 bg-clip-border"
    },
  },
  box4: {
    name: "Box 4",
    component: "Box1",
    props: {
      height: 284,
      width: 256,
      classes: "border-4 bg-indigo-500 bg-clip-padding"
    },
  },
  box5: {
    name: "Box 5",
    component: "Box1",
    props: {
      height: 284,
      width: 256,
      classes: "border-4 opacity-75 bg-indigo-500 bg-clip-content"
    },
  },
};
