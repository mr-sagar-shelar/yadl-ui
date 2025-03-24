import type { Meta, StoryObj } from "@storybook/react";
import CloudNat from "../CloudNat";

const meta: Meta<typeof CloudNat> = { title: "GCP/CloudNat", component: CloudNat };

export default meta;
type Story = StoryObj<typeof CloudNat>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
