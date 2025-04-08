import type { Meta, StoryObj } from "@storybook/react";
import EnterpriseApplications from "../EnterpriseApplications";

const meta: Meta<typeof EnterpriseApplications> = { title: "Azure/Identity/EnterpriseApplications", component: EnterpriseApplications };

export default meta;
type Story = StoryObj<typeof EnterpriseApplications>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
