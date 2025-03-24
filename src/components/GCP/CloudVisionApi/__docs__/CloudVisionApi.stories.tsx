import type { Meta, StoryObj } from "@storybook/react";
import CloudVisionApi from "../CloudVisionApi";

const meta: Meta<typeof CloudVisionApi> = { title: "GCP/CloudVisionApi", component: CloudVisionApi };

export default meta;
type Story = StoryObj<typeof CloudVisionApi>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
