import type { Meta, StoryObj } from "@storybook/react";
import Payments from "../Payments";

const meta: Meta<typeof Payments> = { title: "unDraw/Payments", component: Payments };

export default meta;
type Story = StoryObj<typeof Payments>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
