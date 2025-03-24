import type { Meta, StoryObj } from "@storybook/react";
import Sail from "../Sail";

const meta: Meta<typeof Sail> = { title: "AWS/Compute/Sail", component: Sail };

export default meta;
type Story = StoryObj<typeof Sail>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
