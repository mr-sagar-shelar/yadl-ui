import type { Meta, StoryObj } from "@storybook/react";
import AzureDatabaseMariaDBServer from "../AzureDatabaseMariaDBServer";

const meta: Meta<typeof AzureDatabaseMariaDBServer> = { title: "Azure/Databases/AzureDatabaseMariaDBServer", component: AzureDatabaseMariaDBServer };

export default meta;
type Story = StoryObj<typeof AzureDatabaseMariaDBServer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
