import type { Meta, StoryObj } from "@storybook/react";
import DefenderRelay from "../DefenderRelay";

const meta: Meta<typeof DefenderRelay> = { title: "Azure/Other/DefenderRelay", component: DefenderRelay };

export default meta;
type Story = StoryObj<typeof DefenderRelay>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
