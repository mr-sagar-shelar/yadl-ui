import type { Meta, StoryObj } from "@storybook/react";
import Organizations from "../Organizations";

const meta: Meta<typeof Organizations> = { title: "AWS/ManagementGovernance/Organizations", component: Organizations };

export default meta;
type Story = StoryObj<typeof Organizations>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
