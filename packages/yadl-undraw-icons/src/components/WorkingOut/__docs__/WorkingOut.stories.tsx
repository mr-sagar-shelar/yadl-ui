import type { Meta, StoryObj } from "@storybook/react";
import WorkingOut from "../WorkingOut";

const meta: Meta<typeof WorkingOut> = { title: "unDraw/WorkingOut", component: WorkingOut };

export default meta;
type Story = StoryObj<typeof WorkingOut>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
