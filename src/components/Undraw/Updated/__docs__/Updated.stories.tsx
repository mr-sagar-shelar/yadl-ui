import type { Meta, StoryObj } from "@storybook/react";
import Updated from "../Updated";

const meta: Meta<typeof Updated> = { title: "unDraw/Updated", component: Updated };

export default meta;
type Story = StoryObj<typeof Updated>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
