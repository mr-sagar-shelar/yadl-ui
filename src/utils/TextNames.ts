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
  text2: {
    name: "Dancing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    classes:
      "border-2 p-2 mx-auto text-2xl font-bold break-words sm:text-3xl md:text-4xl  bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent",
    component: "Text",
    props: {
      height: 284,
      width: 256,
    },
  },
  text3: {
    name: "Dancing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    classes:
      "mx-auto text-2xl font-bold break-words sm:text-3xl md:text-4xl truncate bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent",
    component: "Text",
    props: {
      height: 284,
      width: 256,
    },
  },
  text4: {
    name: "Dancing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    classes:
      "mx-auto text-2xl font-bold break-words sm:text-3xl md:text-4xl truncate bg-gradient-to-r from-violet-600  via-red-500 to-indigo-600 bg-clip-text text-transparent",
    component: "Text",
    props: {
      height: 284,
      width: 256,
    },
  },
  text5: {
    name: "Dancing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    classes:
      "border-indigo-600 mx-auto text-2xl font-bold break-words sm:text-3xl md:text-4xl truncate bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent",
    component: "Text",
    props: {
      height: 284,
      width: 256,
    },
  },
};
