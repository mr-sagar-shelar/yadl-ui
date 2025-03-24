import type { Meta, StoryObj } from "@storybook/react";
import BusinessChat from "../BusinessChat";

const meta: Meta<typeof BusinessChat> = { title: "unDraw/BusinessChat", component: BusinessChat };

export default meta;
type Story = StoryObj<typeof BusinessChat>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
