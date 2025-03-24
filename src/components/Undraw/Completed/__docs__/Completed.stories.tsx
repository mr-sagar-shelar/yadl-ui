import type { Meta, StoryObj } from "@storybook/react";
import Completed from "../Completed";

const meta: Meta<typeof Completed> = { title: "unDraw/Completed", component: Completed };

export default meta;
type Story = StoryObj<typeof Completed>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
