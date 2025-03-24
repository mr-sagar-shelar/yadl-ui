import type { Meta, StoryObj } from "@storybook/react";
import SQLDatabase from "../SQLDatabase";

const meta: Meta<typeof SQLDatabase> = { title: "Azure/Databases/SQLDatabase", component: SQLDatabase };

export default meta;
type Story = StoryObj<typeof SQLDatabase>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
