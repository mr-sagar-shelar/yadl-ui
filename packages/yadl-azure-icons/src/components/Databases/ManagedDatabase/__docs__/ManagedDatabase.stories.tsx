import type { Meta, StoryObj } from "@storybook/react";
import ManagedDatabase from "../ManagedDatabase";

const meta: Meta<typeof ManagedDatabase> = { title: "Azure/Databases/ManagedDatabase", component: ManagedDatabase };

export default meta;
type Story = StoryObj<typeof ManagedDatabase>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
