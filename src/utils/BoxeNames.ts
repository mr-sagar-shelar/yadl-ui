export interface BoxDetails {
  name: string;
  icon: string;
  props: any;
}
export interface BoxNames {
  [key: string]: BoxDetails;
}

export const BoxNames: BoxNames = {
  box1: {
    name: "Box 1",
    icon: "Box1",
    props: {
      height: 284,
      width: 256,
      title: "UI / UX Creative Desing",
      icon: "athena",
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit",
    },
  },
  box2: {
    name: "Box 2",
    icon: "Box2",
    props: {
      height: 200,
      width: 288,
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit",
    },
  },
  box3: {
    name: "Box 3",
    icon: "Box3",
    props: {
      height: 330,
      width: 250,
      title: "Card Title",
      text: "Using Lorem ipsum to focus attention on graphic elements in a webpage design proposal · One of the earliest examples of the Lorem ipsum placeholder text on 1960s advertising...",
    },
  },
};
