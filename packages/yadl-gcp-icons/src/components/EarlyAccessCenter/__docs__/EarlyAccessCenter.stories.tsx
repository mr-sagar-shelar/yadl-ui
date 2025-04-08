import type { Meta, StoryObj } from "@storybook/react";
import EarlyAccessCenter from "../EarlyAccessCenter";

const meta: Meta<typeof EarlyAccessCenter> = { title: "GCP/EarlyAccessCenter", component: EarlyAccessCenter };

export default meta;
type Story = StoryObj<typeof EarlyAccessCenter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
