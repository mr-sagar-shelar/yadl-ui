import type { Meta, StoryObj } from "@storybook/react";
import SSHKeys from "../SSHKeys";

const meta: Meta<typeof SSHKeys> = { title: "Azure/Other/SSHKeys", component: SSHKeys };

export default meta;
type Story = StoryObj<typeof SSHKeys>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
