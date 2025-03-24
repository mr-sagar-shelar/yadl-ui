import type { Meta, StoryObj } from "@storybook/react";
import Batch from "../Batch";

const meta: Meta<typeof Batch> = { title: "GCP/Batch", component: Batch };

export default meta;
type Story = StoryObj<typeof Batch>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
