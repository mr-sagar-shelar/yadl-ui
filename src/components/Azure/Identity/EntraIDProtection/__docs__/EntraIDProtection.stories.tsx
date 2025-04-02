import type { Meta, StoryObj } from "@storybook/react";
import EntraIDProtection from "../EntraIDProtection";

const meta: Meta<typeof EntraIDProtection> = { title: "Azure/Identity/EntraIDProtection", component: EntraIDProtection };

export default meta;
type Story = StoryObj<typeof EntraIDProtection>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
