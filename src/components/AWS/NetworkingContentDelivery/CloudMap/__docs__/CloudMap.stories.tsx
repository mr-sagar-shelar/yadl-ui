import type { Meta, StoryObj } from "@storybook/react";
import CloudMap from "../CloudMap";

const meta: Meta<typeof CloudMap> = { title: "AWS/NetworkingContentDelivery/CloudMap", component: CloudMap };

export default meta;
type Story = StoryObj<typeof CloudMap>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
