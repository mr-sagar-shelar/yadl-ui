import type { Meta, StoryObj } from "@storybook/react";
import Vertexai from "../Vertexai";

const meta: Meta<typeof Vertexai> = { title: "GCP/Vertexai", component: Vertexai };

export default meta;
type Story = StoryObj<typeof Vertexai>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
