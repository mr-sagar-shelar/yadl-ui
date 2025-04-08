import type { Meta, StoryObj } from "@storybook/react";
import UsabilityTesting from "../UsabilityTesting";

const meta: Meta<typeof UsabilityTesting> = { title: "unDraw/UsabilityTesting", component: UsabilityTesting };

export default meta;
type Story = StoryObj<typeof UsabilityTesting>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
