import type { Meta, StoryObj } from "@storybook/react";
import FaceAPIs from "../FaceAPIs";

const meta: Meta<typeof FaceAPIs> = { title: "Azure/AiMachineLearning/FaceAPIs", component: FaceAPIs };

export default meta;
type Story = StoryObj<typeof FaceAPIs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
