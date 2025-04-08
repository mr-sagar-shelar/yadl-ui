import type { Meta, StoryObj } from "@storybook/react";
import AtWork from "../AtWork";

const meta: Meta<typeof AtWork> = { title: "unDraw/AtWork", component: AtWork };

export default meta;
type Story = StoryObj<typeof AtWork>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
