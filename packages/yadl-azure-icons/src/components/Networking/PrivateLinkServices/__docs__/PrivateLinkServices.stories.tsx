import type { Meta, StoryObj } from "@storybook/react";
import PrivateLinkServices from "../PrivateLinkServices";

const meta: Meta<typeof PrivateLinkServices> = { title: "Azure/Networking/PrivateLinkServices", component: PrivateLinkServices };

export default meta;
type Story = StoryObj<typeof PrivateLinkServices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
