import type { Meta, StoryObj } from "@storybook/react";
import Terms from "../Terms";

const meta: Meta<typeof Terms> = { title: "unDraw/Terms", component: Terms };

export default meta;
type Story = StoryObj<typeof Terms>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
