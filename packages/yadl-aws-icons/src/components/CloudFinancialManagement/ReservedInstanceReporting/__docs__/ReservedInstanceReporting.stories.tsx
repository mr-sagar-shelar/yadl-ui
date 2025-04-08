import type { Meta, StoryObj } from "@storybook/react";
import ReservedInstanceReporting from "../ReservedInstanceReporting";

const meta: Meta<typeof ReservedInstanceReporting> = { title: "AWS/CloudFinancialManagement/ReservedInstanceReporting", component: ReservedInstanceReporting };

export default meta;
type Story = StoryObj<typeof ReservedInstanceReporting>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
