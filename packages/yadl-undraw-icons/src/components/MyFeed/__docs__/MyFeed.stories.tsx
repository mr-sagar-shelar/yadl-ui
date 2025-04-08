import type { Meta, StoryObj } from "@storybook/react";
import MyFeed from "../MyFeed";

const meta: Meta<typeof MyFeed> = { title: "unDraw/MyFeed", component: MyFeed };

export default meta;
type Story = StoryObj<typeof MyFeed>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
