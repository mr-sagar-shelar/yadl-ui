import type { Meta, StoryObj } from "@storybook/react";
import SQLServerRegistries from "../SQLServerRegistries";

const meta: Meta<typeof SQLServerRegistries> = { title: "Azure/Databases/SQLServerRegistries", component: SQLServerRegistries };

export default meta;
type Story = StoryObj<typeof SQLServerRegistries>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
