import type { Meta, StoryObj } from "@storybook/react";
import FreeTrial from "../FreeTrial";

const meta: Meta<typeof FreeTrial> = { title: "GCP/FreeTrial", component: FreeTrial };

export default meta;
type Story = StoryObj<typeof FreeTrial>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
