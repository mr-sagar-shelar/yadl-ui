import type { Meta, StoryObj } from "@storybook/react";
import AutomlVision from "../AutomlVision";

const meta: Meta<typeof AutomlVision> = { title: "GCP/AutomlVision", component: AutomlVision };

export default meta;
type Story = StoryObj<typeof AutomlVision>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
