import type { Meta, StoryObj } from "@storybook/react";
import SQLManagedInstance from "../SQLManagedInstance";

const meta: Meta<typeof SQLManagedInstance> = { title: "Azure/Databases/SQLManagedInstance", component: SQLManagedInstance };

export default meta;
type Story = StoryObj<typeof SQLManagedInstance>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
