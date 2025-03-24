import type { Meta, StoryObj } from "@storybook/react";
import ProducerPortal from "../ProducerPortal";

const meta: Meta<typeof ProducerPortal> = { title: "GCP/ProducerPortal", component: ProducerPortal };

export default meta;
type Story = StoryObj<typeof ProducerPortal>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
