import type { Meta, StoryObj } from "@storybook/react";
import Proton from "../Proton";

const meta: Meta<typeof Proton> = { title: "AWS/ManagementGovernance/Proton", component: Proton };

export default meta;
type Story = StoryObj<typeof Proton>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
