import type { Meta, StoryObj } from "@storybook/react";
import ApplicationMigrationService from "../ApplicationMigrationService";

const meta: Meta<typeof ApplicationMigrationService> = { title: "AWS/MigrationTransfer/ApplicationMigrationService", component: ApplicationMigrationService };

export default meta;
type Story = StoryObj<typeof ApplicationMigrationService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
