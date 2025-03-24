import type { Meta, StoryObj } from "@storybook/react";
import ComputeEngine from "../ComputeEngine";

const meta: Meta<typeof ComputeEngine> = { title: "GCP/ComputeEngine", component: ComputeEngine };

export default meta;
type Story = StoryObj<typeof ComputeEngine>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
