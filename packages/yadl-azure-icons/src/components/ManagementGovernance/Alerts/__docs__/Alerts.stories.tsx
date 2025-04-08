import type { Meta, StoryObj } from "@storybook/react";
import Alerts from "../Alerts";

const meta: Meta<typeof Alerts> = { title: "Azure/ManagementGovernance/Alerts", component: Alerts };

export default meta;
type Story = StoryObj<typeof Alerts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
