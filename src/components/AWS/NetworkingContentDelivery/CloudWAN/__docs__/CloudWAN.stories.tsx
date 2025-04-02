import type { Meta, StoryObj } from "@storybook/react";
import CloudWAN from "../CloudWAN";

const meta: Meta<typeof CloudWAN> = { title: "AWS/NetworkingContentDelivery/CloudWAN", component: CloudWAN };

export default meta;
type Story = StoryObj<typeof CloudWAN>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
