import type { Meta, StoryObj } from "@storybook/react";
import WellArchitectedTool from "../WellArchitectedTool";

const meta: Meta<typeof WellArchitectedTool> = { title: "AWS/ManagementGovernance/WellArchitectedTool", component: WellArchitectedTool };

export default meta;
type Story = StoryObj<typeof WellArchitectedTool>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
