import type { Meta, StoryObj } from "@storybook/react";
import Documents from "../Documents";

const meta: Meta<typeof Documents> = { title: "unDraw/Documents", component: Documents };

export default meta;
type Story = StoryObj<typeof Documents>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
