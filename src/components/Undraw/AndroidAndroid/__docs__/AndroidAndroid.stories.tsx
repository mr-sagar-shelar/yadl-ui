import type { Meta, StoryObj } from "@storybook/react";
import AndroidAndroid from "../AndroidAndroid";

const meta: Meta<typeof AndroidAndroid> = { title: "unDraw/AndroidAndroid", component: AndroidAndroid };

export default meta;
type Story = StoryObj<typeof AndroidAndroid>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
