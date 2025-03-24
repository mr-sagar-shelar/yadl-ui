import type { Meta, StoryObj } from "@storybook/react";
import MigrationHub from "../MigrationHub";

const meta: Meta<typeof MigrationHub> = { title: "AWS/MigrationTransfer/MigrationHub", component: MigrationHub };

export default meta;
type Story = StoryObj<typeof MigrationHub>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
