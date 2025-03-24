import type { Meta, StoryObj } from "@storybook/react";
import CloudGpu from "../CloudGpu";

const meta: Meta<typeof CloudGpu> = { title: "GCP/CloudGpu", component: CloudGpu };

export default meta;
type Story = StoryObj<typeof CloudGpu>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
