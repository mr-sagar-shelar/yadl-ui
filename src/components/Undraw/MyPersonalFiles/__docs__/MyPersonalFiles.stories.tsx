import type { Meta, StoryObj } from "@storybook/react";
import MyPersonalFiles from "../MyPersonalFiles";

const meta: Meta<typeof MyPersonalFiles> = { title: "unDraw/MyPersonalFiles", component: MyPersonalFiles };

export default meta;
type Story = StoryObj<typeof MyPersonalFiles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
