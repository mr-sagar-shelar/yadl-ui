import type { Meta, StoryObj } from "@storybook/react";
import SendGridAccounts from "../SendGridAccounts";

const meta: Meta<typeof SendGridAccounts> = { title: "Azure/Integration/SendGridAccounts", component: SendGridAccounts };

export default meta;
type Story = StoryObj<typeof SendGridAccounts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
