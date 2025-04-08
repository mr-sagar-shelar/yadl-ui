import type { Meta, StoryObj } from "@storybook/react";
import CloudFront from "../CloudFront";

const meta: Meta<typeof CloudFront> = { title: "AWS/NetworkingContentDelivery/CloudFront", component: CloudFront };

export default meta;
type Story = StoryObj<typeof CloudFront>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
