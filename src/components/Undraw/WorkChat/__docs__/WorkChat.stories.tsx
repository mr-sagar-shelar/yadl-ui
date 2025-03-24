import type { Meta, StoryObj } from "@storybook/react";
import WorkChat from "../WorkChat";

const meta: Meta<typeof WorkChat> = { title: "unDraw/WorkChat", component: WorkChat };

export default meta;
type Story = StoryObj<typeof WorkChat>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
