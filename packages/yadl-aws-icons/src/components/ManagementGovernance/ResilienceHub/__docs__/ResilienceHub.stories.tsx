import type { Meta, StoryObj } from "@storybook/react";
import ResilienceHub from "../ResilienceHub";

const meta: Meta<typeof ResilienceHub> = { title: "AWS/ManagementGovernance/ResilienceHub", component: ResilienceHub };

export default meta;
type Story = StoryObj<typeof ResilienceHub>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
