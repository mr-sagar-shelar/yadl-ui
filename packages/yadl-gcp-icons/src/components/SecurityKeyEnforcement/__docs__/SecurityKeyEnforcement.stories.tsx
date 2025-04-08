import type { Meta, StoryObj } from "@storybook/react";
import SecurityKeyEnforcement from "../SecurityKeyEnforcement";

const meta: Meta<typeof SecurityKeyEnforcement> = { title: "GCP/SecurityKeyEnforcement", component: SecurityKeyEnforcement };

export default meta;
type Story = StoryObj<typeof SecurityKeyEnforcement>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
