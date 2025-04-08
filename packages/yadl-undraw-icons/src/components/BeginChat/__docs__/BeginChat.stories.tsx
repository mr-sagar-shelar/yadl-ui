import type { Meta, StoryObj } from "@storybook/react";
import BeginChat from "../BeginChat";

const meta: Meta<typeof BeginChat> = { title: "unDraw/BeginChat", component: BeginChat };

export default meta;
type Story = StoryObj<typeof BeginChat>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
