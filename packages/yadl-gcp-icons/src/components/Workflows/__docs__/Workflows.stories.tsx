import type { Meta, StoryObj } from "@storybook/react";
import Workflows from "../Workflows";

const meta: Meta<typeof Workflows> = { title: "GCP/Workflows", component: Workflows };

export default meta;
type Story = StoryObj<typeof Workflows>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
