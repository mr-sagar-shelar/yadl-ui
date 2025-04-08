import type { Meta, StoryObj } from "@storybook/react";
import UniversalPrint from "../UniversalPrint";

const meta: Meta<typeof UniversalPrint> = { title: "Azure/ManagementGovernance/UniversalPrint", component: UniversalPrint };

export default meta;
type Story = StoryObj<typeof UniversalPrint>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
