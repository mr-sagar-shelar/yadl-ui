import type { Meta, StoryObj } from "@storybook/react";
import ABSMember from "../ABSMember";

const meta: Meta<typeof ABSMember> = { title: "Azure/Blockchain/ABSMember", component: ABSMember };

export default meta;
type Story = StoryObj<typeof ABSMember>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
