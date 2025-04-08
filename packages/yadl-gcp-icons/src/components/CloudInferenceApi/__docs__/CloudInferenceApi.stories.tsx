import type { Meta, StoryObj } from "@storybook/react";
import CloudInferenceApi from "../CloudInferenceApi";

const meta: Meta<typeof CloudInferenceApi> = { title: "GCP/CloudInferenceApi", component: CloudInferenceApi };

export default meta;
type Story = StoryObj<typeof CloudInferenceApi>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
