import type { Meta, StoryObj } from "@storybook/react";
import DatabaseMigrationService from "../DatabaseMigrationService";

const meta: Meta<typeof DatabaseMigrationService> = { title: "AWS/Database/DatabaseMigrationService", component: DatabaseMigrationService };

export default meta;
type Story = StoryObj<typeof DatabaseMigrationService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
