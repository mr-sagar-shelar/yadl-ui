import type { Meta, StoryObj } from "@storybook/react";
import TransferAppliance from "../TransferAppliance";

const meta: Meta<typeof TransferAppliance> = { title: "GCP/TransferAppliance", component: TransferAppliance };

export default meta;
type Story = StoryObj<typeof TransferAppliance>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
