import type { Meta, StoryObj } from "@storybook/react";
import GceSystemsManagement from "../GceSystemsManagement";

const meta: Meta<typeof GceSystemsManagement> = { title: "GCP/GceSystemsManagement", component: GceSystemsManagement };

export default meta;
type Story = StoryObj<typeof GceSystemsManagement>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
