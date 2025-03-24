import type { Meta, StoryObj } from "@storybook/react";
import ManagedBlockchain from "../ManagedBlockchain";

const meta: Meta<typeof ManagedBlockchain> = { title: "AWS/Blockchain/ManagedBlockchain", component: ManagedBlockchain };

export default meta;
type Story = StoryObj<typeof ManagedBlockchain>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
