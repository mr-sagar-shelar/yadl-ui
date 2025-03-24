import type { Meta, StoryObj } from "@storybook/react";
import AzureDatabasePostgreSQLServerGroup from "../AzureDatabasePostgreSQLServerGroup";

const meta: Meta<typeof AzureDatabasePostgreSQLServerGroup> = { title: "Azure/Databases/AzureDatabasePostgreSQLServerGroup", component: AzureDatabasePostgreSQLServerGroup };

export default meta;
type Story = StoryObj<typeof AzureDatabasePostgreSQLServerGroup>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
