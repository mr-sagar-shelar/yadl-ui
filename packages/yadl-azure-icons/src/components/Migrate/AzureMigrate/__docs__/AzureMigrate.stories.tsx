import type { Meta, StoryObj } from "@storybook/react";
import AzureMigrate from "../AzureMigrate";

const meta: Meta<typeof AzureMigrate> = { title: "Azure/Migrate/AzureMigrate", component: AzureMigrate };

export default meta;
type Story = StoryObj<typeof AzureMigrate>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
