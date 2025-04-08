import type { Meta, StoryObj } from "@storybook/react";
import Mindaro from "../Mindaro";

const meta: Meta<typeof Mindaro> = { title: "Azure/Intune/Mindaro", component: Mindaro };

export default meta;
type Story = StoryObj<typeof Mindaro>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
