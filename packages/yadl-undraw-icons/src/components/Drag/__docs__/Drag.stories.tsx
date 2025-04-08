import type { Meta, StoryObj } from "@storybook/react";
import Drag from "../Drag";

const meta: Meta<typeof Drag> = { title: "unDraw/Drag", component: Drag };

export default meta;
type Story = StoryObj<typeof Drag>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
