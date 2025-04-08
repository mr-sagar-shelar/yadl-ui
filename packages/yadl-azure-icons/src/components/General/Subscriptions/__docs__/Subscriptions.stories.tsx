import type { Meta, StoryObj } from "@storybook/react";
import Subscriptions from "../Subscriptions";

const meta: Meta<typeof Subscriptions> = { title: "Azure/General/Subscriptions", component: Subscriptions };

export default meta;
type Story = StoryObj<typeof Subscriptions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
