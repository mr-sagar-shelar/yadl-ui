import type { Meta, StoryObj } from "@storybook/react";
import MyFiles from "../MyFiles";

const meta: Meta<typeof MyFiles> = { title: "unDraw/MyFiles", component: MyFiles };

export default meta;
type Story = StoryObj<typeof MyFiles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
