import type { Meta, StoryObj } from "@storybook/react";
import AugmentedAIA2I from "../AugmentedAIA2I";

const meta: Meta<typeof AugmentedAIA2I> = { title: "AWS/MachineLearning/AugmentedAIA2I", component: AugmentedAIA2I };

export default meta;
type Story = StoryObj<typeof AugmentedAIA2I>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
