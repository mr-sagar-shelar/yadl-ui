import type { Meta, StoryObj } from "@storybook/react";
import AnthosConfigManagement from "../AnthosConfigManagement";

const meta: Meta<typeof AnthosConfigManagement> = { title: "GCP/AnthosConfigManagement", component: AnthosConfigManagement };

export default meta;
type Story = StoryObj<typeof AnthosConfigManagement>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
