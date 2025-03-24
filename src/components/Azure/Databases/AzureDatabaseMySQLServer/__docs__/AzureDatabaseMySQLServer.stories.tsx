import type { Meta, StoryObj } from "@storybook/react";
import AzureDatabaseMySQLServer from "../AzureDatabaseMySQLServer";

const meta: Meta<typeof AzureDatabaseMySQLServer> = { title: "Azure/Databases/AzureDatabaseMySQLServer", component: AzureDatabaseMySQLServer };

export default meta;
type Story = StoryObj<typeof AzureDatabaseMySQLServer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
