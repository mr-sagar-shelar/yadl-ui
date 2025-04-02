import type { Meta, StoryObj } from "@storybook/react";
import OperationLogClassic from "../OperationLogClassic";

const meta: Meta<typeof OperationLogClassic> = { title: "Azure/ManagementGovernance/OperationLogClassic", component: OperationLogClassic };

export default meta;
type Story = StoryObj<typeof OperationLogClassic>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
