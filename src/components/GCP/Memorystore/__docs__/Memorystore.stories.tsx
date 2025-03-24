import type { Meta, StoryObj } from "@storybook/react";
import Memorystore from "../Memorystore";

const meta: Meta<typeof Memorystore> = { title: "GCP/Memorystore", component: Memorystore };

export default meta;
type Story = StoryObj<typeof Memorystore>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
