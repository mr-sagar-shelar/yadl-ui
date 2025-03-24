import type { Meta, StoryObj } from "@storybook/react";
import WebRisk from "../WebRisk";

const meta: Meta<typeof WebRisk> = { title: "GCP/WebRisk", component: WebRisk };

export default meta;
type Story = StoryObj<typeof WebRisk>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
