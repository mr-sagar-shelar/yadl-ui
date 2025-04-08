import type { Meta, StoryObj } from "@storybook/react";
import TensorflowEnterprise from "../TensorflowEnterprise";

const meta: Meta<typeof TensorflowEnterprise> = { title: "GCP/TensorflowEnterprise", component: TensorflowEnterprise };

export default meta;
type Story = StoryObj<typeof TensorflowEnterprise>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
