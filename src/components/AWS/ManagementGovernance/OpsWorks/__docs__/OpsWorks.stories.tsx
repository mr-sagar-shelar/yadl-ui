import type { Meta, StoryObj } from "@storybook/react";
import OpsWorks from "../OpsWorks";

const meta: Meta<typeof OpsWorks> = { title: "AWS/ManagementGovernance/OpsWorks", component: OpsWorks };

export default meta;
type Story = StoryObj<typeof OpsWorks>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
