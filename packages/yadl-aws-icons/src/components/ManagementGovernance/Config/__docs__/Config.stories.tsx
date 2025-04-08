import type { Meta, StoryObj } from "@storybook/react";
import Config from "../Config";

const meta: Meta<typeof Config> = { title: "AWS/ManagementGovernance/Config", component: Config };

export default meta;
type Story = StoryObj<typeof Config>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
