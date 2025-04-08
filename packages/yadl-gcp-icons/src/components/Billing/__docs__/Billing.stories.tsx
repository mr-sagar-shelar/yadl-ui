import type { Meta, StoryObj } from "@storybook/react";
import Billing from "../Billing";

const meta: Meta<typeof Billing> = { title: "GCP/Billing", component: Billing };

export default meta;
type Story = StoryObj<typeof Billing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
