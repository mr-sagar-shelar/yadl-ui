import type { Meta, StoryObj } from "@storybook/react";
import Compliance from "../Compliance";

const meta: Meta<typeof Compliance> = { title: "Azure/ManagementGovernance/Compliance", component: Compliance };

export default meta;
type Story = StoryObj<typeof Compliance>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
