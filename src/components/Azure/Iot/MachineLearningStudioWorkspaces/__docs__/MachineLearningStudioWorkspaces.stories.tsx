import type { Meta, StoryObj } from "@storybook/react";
import MachineLearningStudioWorkspaces from "../MachineLearningStudioWorkspaces";

const meta: Meta<typeof MachineLearningStudioWorkspaces> = { title: "Azure/Iot/MachineLearningStudioWorkspaces", component: MachineLearningStudioWorkspaces };

export default meta;
type Story = StoryObj<typeof MachineLearningStudioWorkspaces>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
