import type { Meta, StoryObj } from "@storybook/react";
import ThinkboxSequoia from "../ThinkboxSequoia";

const meta: Meta<typeof ThinkboxSequoia> = { title: "AWS/Compute/ThinkboxSequoia", component: ThinkboxSequoia };

export default meta;
type Story = StoryObj<typeof ThinkboxSequoia>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
