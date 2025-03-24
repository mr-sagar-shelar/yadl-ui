import type { Meta, StoryObj } from "@storybook/react";
import Blueprints from "../Blueprints";

const meta: Meta<typeof Blueprints> = { title: "Azure/ManagementGovernance/Blueprints", component: Blueprints };

export default meta;
type Story = StoryObj<typeof Blueprints>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
