import type { Meta, StoryObj } from "@storybook/react";
import Table from "../Table";

const meta: Meta<typeof Table> = { title: "Azure/General/Table", component: Table };

export default meta;
type Story = StoryObj<typeof Table>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
