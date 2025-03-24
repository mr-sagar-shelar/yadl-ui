import type { Meta, StoryObj } from "@storybook/react";
import SQLServer from "../SQLServer";

const meta: Meta<typeof SQLServer> = { title: "Azure/Databases/SQLServer", component: SQLServer };

export default meta;
type Story = StoryObj<typeof SQLServer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
