import type { Meta, StoryObj } from "@storybook/react";
import StepFunctions from "../StepFunctions";

const meta: Meta<typeof StepFunctions> = { title: "AWS/AppIntegration/StepFunctions", component: StepFunctions };

export default meta;
type Story = StoryObj<typeof StepFunctions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
