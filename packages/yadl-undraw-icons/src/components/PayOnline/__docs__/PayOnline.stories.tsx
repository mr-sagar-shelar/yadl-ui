import type { Meta, StoryObj } from "@storybook/react";
import PayOnline from "../PayOnline";

const meta: Meta<typeof PayOnline> = { title: "unDraw/PayOnline", component: PayOnline };

export default meta;
type Story = StoryObj<typeof PayOnline>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
