import type { Meta, StoryObj } from "@storybook/react";
import Account from "../Account";

const meta: Meta<typeof Account> = { title: "unDraw/Account", component: Account };

export default meta;
type Story = StoryObj<typeof Account>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
