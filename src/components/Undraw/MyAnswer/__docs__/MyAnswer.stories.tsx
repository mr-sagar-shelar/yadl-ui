import type { Meta, StoryObj } from "@storybook/react";
import MyAnswer from "../MyAnswer";

const meta: Meta<typeof MyAnswer> = { title: "unDraw/MyAnswer", component: MyAnswer };

export default meta;
type Story = StoryObj<typeof MyAnswer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
