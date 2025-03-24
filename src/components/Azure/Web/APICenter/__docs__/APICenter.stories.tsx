import type { Meta, StoryObj } from "@storybook/react";
import APICenter from "../APICenter";

const meta: Meta<typeof APICenter> = { title: "Azure/Web/APICenter", component: APICenter };

export default meta;
type Story = StoryObj<typeof APICenter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
