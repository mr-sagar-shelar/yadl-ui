import type { Meta, StoryObj } from "@storybook/react";
import APIManagementServices from "../APIManagementServices";

const meta: Meta<typeof APIManagementServices> = { title: "Azure/Integration/APIManagementServices", component: APIManagementServices };

export default meta;
type Story = StoryObj<typeof APIManagementServices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
