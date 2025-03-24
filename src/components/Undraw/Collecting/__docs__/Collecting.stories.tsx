import type { Meta, StoryObj } from "@storybook/react";
import Collecting from "../Collecting";

const meta: Meta<typeof Collecting> = { title: "unDraw/Collecting", component: Collecting };

export default meta;
type Story = StoryObj<typeof Collecting>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
