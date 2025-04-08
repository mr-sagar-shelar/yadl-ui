import type { Meta, StoryObj } from "@storybook/react";
import DefenderSlot from "../DefenderSlot";

const meta: Meta<typeof DefenderSlot> = { title: "Azure/Other/DefenderSlot", component: DefenderSlot };

export default meta;
type Story = StoryObj<typeof DefenderSlot>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
