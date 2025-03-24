import type { Meta, StoryObj } from "@storybook/react";
import ControlTower from "../ControlTower";

const meta: Meta<typeof ControlTower> = { title: "AWS/ManagementGovernance/ControlTower", component: ControlTower };

export default meta;
type Story = StoryObj<typeof ControlTower>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
