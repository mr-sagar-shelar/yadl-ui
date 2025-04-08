import type { Meta, StoryObj } from "@storybook/react";
import NICEDCV from "../NICEDCV";

const meta: Meta<typeof NICEDCV> = { title: "AWS/Compute/NICEDCV", component: NICEDCV };

export default meta;
type Story = StoryObj<typeof NICEDCV>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
