import type { Meta, StoryObj } from "@storybook/react";
import GkeOnprem from "../GkeOnprem";

const meta: Meta<typeof GkeOnprem> = { title: "GCP/GkeOnprem", component: GkeOnprem };

export default meta;
type Story = StoryObj<typeof GkeOnprem>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
