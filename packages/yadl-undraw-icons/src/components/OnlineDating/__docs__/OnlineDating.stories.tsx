import type { Meta, StoryObj } from "@storybook/react";
import OnlineDating from "../OnlineDating";

const meta: Meta<typeof OnlineDating> = { title: "unDraw/OnlineDating", component: OnlineDating };

export default meta;
type Story = StoryObj<typeof OnlineDating>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
