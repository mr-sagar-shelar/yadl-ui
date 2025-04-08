import type { Meta, StoryObj } from "@storybook/react";
import ServerMigrationService from "../ServerMigrationService";

const meta: Meta<typeof ServerMigrationService> = { title: "AWS/MigrationTransfer/ServerMigrationService", component: ServerMigrationService };

export default meta;
type Story = StoryObj<typeof ServerMigrationService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
