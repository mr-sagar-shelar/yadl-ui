import type { Meta, StoryObj } from "@storybook/react";
import WAF from "../WAF";

const meta: Meta<typeof WAF> = { title: "AWS/SecurityIdentityCompliance/WAF", component: WAF };

export default meta;
type Story = StoryObj<typeof WAF>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
