import type { Meta, StoryObj } from "@storybook/react";
import SharedGoals from "../SharedGoals";

const meta: Meta<typeof SharedGoals> = { title: "unDraw/SharedGoals", component: SharedGoals };

export default meta;
type Story = StoryObj<typeof SharedGoals>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
