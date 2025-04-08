import type { Meta, StoryObj } from "@storybook/react";
import AugmentedReality from "../AugmentedReality";

const meta: Meta<typeof AugmentedReality> = { title: "unDraw/AugmentedReality", component: AugmentedReality };

export default meta;
type Story = StoryObj<typeof AugmentedReality>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
