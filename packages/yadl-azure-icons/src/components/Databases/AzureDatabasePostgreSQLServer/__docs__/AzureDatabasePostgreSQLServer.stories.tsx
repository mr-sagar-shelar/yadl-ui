import type { Meta, StoryObj } from "@storybook/react";
import AzureDatabasePostgreSQLServer from "../AzureDatabasePostgreSQLServer";

const meta: Meta<typeof AzureDatabasePostgreSQLServer> = { title: "Azure/Databases/AzureDatabasePostgreSQLServer", component: AzureDatabasePostgreSQLServer };

export default meta;
type Story = StoryObj<typeof AzureDatabasePostgreSQLServer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
