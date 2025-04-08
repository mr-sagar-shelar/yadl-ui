import type { Meta, StoryObj } from "@storybook/react";
import Process from "../Process";

const meta: Meta<typeof Process> = { title: "unDraw/Process", component: Process };

export default meta;
type Story = StoryObj<typeof Process>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
