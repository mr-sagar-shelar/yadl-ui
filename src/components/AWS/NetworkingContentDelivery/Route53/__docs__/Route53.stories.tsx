import type { Meta, StoryObj } from "@storybook/react";
import Route53 from "../Route53";

const meta: Meta<typeof Route53> = { title: "AWS/NetworkingContentDelivery/Route53", component: Route53 };

export default meta;
type Story = StoryObj<typeof Route53>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
