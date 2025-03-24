import type { Meta, StoryObj } from "@storybook/react";
import CloudSpanner from "../CloudSpanner";

const meta: Meta<typeof CloudSpanner> = { title: "GCP/CloudSpanner", component: CloudSpanner };

export default meta;
type Story = StoryObj<typeof CloudSpanner>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
