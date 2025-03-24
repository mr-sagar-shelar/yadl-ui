import type { Meta, StoryObj } from "@storybook/react";
import FunctionApps from "../FunctionApps";

const meta: Meta<typeof FunctionApps> = { title: "Azure/Compute/FunctionApps", component: FunctionApps };

export default meta;
type Story = StoryObj<typeof FunctionApps>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
