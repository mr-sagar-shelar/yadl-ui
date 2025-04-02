import type { Meta, StoryObj } from "@storybook/react";
import ConfidentialLedgers from "../ConfidentialLedgers";

const meta: Meta<typeof ConfidentialLedgers> = { title: "Azure/Other/ConfidentialLedgers", component: ConfidentialLedgers };

export default meta;
type Story = StoryObj<typeof ConfidentialLedgers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
