import type { Meta, StoryObj } from "@storybook/react";
import Detective from "../Detective";

const meta: Meta<typeof Detective> = { title: "AWS/SecurityIdentityCompliance/Detective", component: Detective };

export default meta;
type Story = StoryObj<typeof Detective>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
