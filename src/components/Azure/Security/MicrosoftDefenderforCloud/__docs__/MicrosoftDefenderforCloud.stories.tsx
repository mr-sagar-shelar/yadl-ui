import type { Meta, StoryObj } from "@storybook/react";
import MicrosoftDefenderforCloud from "../MicrosoftDefenderforCloud";

const meta: Meta<typeof MicrosoftDefenderforCloud> = { title: "Azure/Security/MicrosoftDefenderforCloud", component: MicrosoftDefenderforCloud };

export default meta;
type Story = StoryObj<typeof MicrosoftDefenderforCloud>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
