import type { Meta, StoryObj } from "@storybook/react";
import QnAMakers from "../QnAMakers";

const meta: Meta<typeof QnAMakers> = { title: "Azure/AiMachineLearning/QnAMakers", component: QnAMakers };

export default meta;
type Story = StoryObj<typeof QnAMakers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
