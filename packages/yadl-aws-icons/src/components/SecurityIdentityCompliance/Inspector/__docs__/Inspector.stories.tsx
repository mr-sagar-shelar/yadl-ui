import type { Meta, StoryObj } from "@storybook/react";
import Inspector from "../Inspector";

const meta: Meta<typeof Inspector> = { title: "AWS/SecurityIdentityCompliance/Inspector", component: Inspector };

export default meta;
type Story = StoryObj<typeof Inspector>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
