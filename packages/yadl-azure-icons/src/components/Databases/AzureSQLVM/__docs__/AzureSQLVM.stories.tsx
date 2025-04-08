import type { Meta, StoryObj } from "@storybook/react";
import AzureSQLVM from "../AzureSQLVM";

const meta: Meta<typeof AzureSQLVM> = { title: "Azure/Databases/AzureSQLVM", component: AzureSQLVM };

export default meta;
type Story = StoryObj<typeof AzureSQLVM>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
