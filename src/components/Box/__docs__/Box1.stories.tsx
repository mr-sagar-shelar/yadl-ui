import type { Meta, StoryObj } from "@storybook/react";
import Box1 from "../Box1";

const meta: Meta<typeof Box1> = { title: "Box/Box1", component: Box1 };

export default meta;
type Story = StoryObj<typeof Box1>;

export const Primary: Story = {
  args: {
    height: 284,
    width: 256,
    title: "UI / UX Creative Desing",
    icon: "athena",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit",
  },
};
