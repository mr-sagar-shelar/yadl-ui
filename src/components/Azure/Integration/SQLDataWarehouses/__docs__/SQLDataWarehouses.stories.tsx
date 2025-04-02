import type { Meta, StoryObj } from "@storybook/react";
import SQLDataWarehouses from "../SQLDataWarehouses";

const meta: Meta<typeof SQLDataWarehouses> = { title: "Azure/Integration/SQLDataWarehouses", component: SQLDataWarehouses };

export default meta;
type Story = StoryObj<typeof SQLDataWarehouses>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
