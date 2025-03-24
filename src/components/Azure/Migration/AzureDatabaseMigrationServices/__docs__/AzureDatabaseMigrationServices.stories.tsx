import type { Meta, StoryObj } from "@storybook/react";
import AzureDatabaseMigrationServices from "../AzureDatabaseMigrationServices";

const meta: Meta<typeof AzureDatabaseMigrationServices> = { title: "Azure/Migration/AzureDatabaseMigrationServices", component: AzureDatabaseMigrationServices };

export default meta;
type Story = StoryObj<typeof AzureDatabaseMigrationServices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
