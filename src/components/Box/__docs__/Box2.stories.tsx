import type { Meta, StoryObj } from "@storybook/react";
import Box2 from "../Box2";

const meta: Meta<typeof Box2> = { title: "Box/Box2", component: Box2 };

export default meta;
type Story = StoryObj<typeof Box2>;

export const Primary: Story = {
  args: {
    height: 200,
    width: 288,
    icon: "cleanRooms",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit",
  },
};
