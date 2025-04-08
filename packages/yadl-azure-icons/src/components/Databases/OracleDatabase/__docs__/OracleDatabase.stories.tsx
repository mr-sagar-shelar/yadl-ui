import type { Meta, StoryObj } from "@storybook/react";
import OracleDatabase from "../OracleDatabase";

const meta: Meta<typeof OracleDatabase> = { title: "Azure/Databases/OracleDatabase", component: OracleDatabase };

export default meta;
type Story = StoryObj<typeof OracleDatabase>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
