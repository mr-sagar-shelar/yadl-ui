import type { Meta, StoryObj } from "@storybook/react";
import Fargate from "../Fargate";

const meta: Meta<typeof Fargate> = { title: "AWS/Containers/Fargate", component: Fargate };

export default meta;
type Story = StoryObj<typeof Fargate>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
