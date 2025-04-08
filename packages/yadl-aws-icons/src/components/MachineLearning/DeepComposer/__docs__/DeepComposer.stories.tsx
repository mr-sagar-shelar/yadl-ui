import type { Meta, StoryObj } from "@storybook/react";
import DeepComposer from "../DeepComposer";

const meta: Meta<typeof DeepComposer> = { title: "AWS/MachineLearning/DeepComposer", component: DeepComposer };

export default meta;
type Story = StoryObj<typeof DeepComposer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
