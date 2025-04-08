import type { Meta, StoryObj } from "@storybook/react";
import Quotas from "../Quotas";

const meta: Meta<typeof Quotas> = { title: "GCP/Quotas", component: Quotas };

export default meta;
type Story = StoryObj<typeof Quotas>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
