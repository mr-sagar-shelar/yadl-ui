import type { Meta, StoryObj } from "@storybook/react";
import DevOpsGuru from "../DevOpsGuru";

const meta: Meta<typeof DevOpsGuru> = { title: "AWS/MachineLearning/DevOpsGuru", component: DevOpsGuru };

export default meta;
type Story = StoryObj<typeof DevOpsGuru>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
