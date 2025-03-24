import type { Meta, StoryObj } from "@storybook/react";
import NetworkTiers from "../NetworkTiers";

const meta: Meta<typeof NetworkTiers> = { title: "GCP/NetworkTiers", component: NetworkTiers };

export default meta;
type Story = StoryObj<typeof NetworkTiers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
